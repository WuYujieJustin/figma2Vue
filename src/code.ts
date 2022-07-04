import { dispatch, handleEvent } from "./codeMessageHandler";
import base64 from "@hexagon/base64";
figma.showUI(__html__);
// Skip over invisible nodes and their descendants inside instances for faster performance
figma.skipInvisibleInstanceChildren = true
// 解析为图片
const exportAsImage = (val: SceneNode) => {
  return new Promise(async (resolve, reject) => {
    const unit8ArrayValue = await val.exportAsync({
      format: "PNG",
      contentsOnly: false,
      useAbsoluteBounds: true,
    });
    const image = base64.fromArrayBuffer(unit8ArrayValue);
    const helper = {
      origin: val,
      node: "img",
      src: image,
      style: {},
    };
    resolve(helper);
  });
};

// 解析为普通html节点
const parseNode = async (val: SceneNode) => {
  return new Promise((resolve, reject) => {
    const { id, type } = val;
    const helper = {
      id,
      node: "div",
      style: {},
      text: "",
      origin: val,
    };
    if (type === "TEXT") {
      helper.text = val.characters;
    }
    resolve(helper);
  });
};
// export node type
/**
 * {
 *  node: img | div,
 *  style: Object,
 *  text: string,
 *  src: base64
 * }
 *
 **/
// BFS
// todo val type?
// figma.currentPage.selection
const recursion = async (val: any, imageNodeList: Object[], result: any) => {
  return new Promise(async (resolve, reject) => {
    for (const node of val) {
      const { id } = node;
      if (Array.isArray(node.children)) {
        if (imageNodeList.includes(id)) {
          const image = await exportAsImage(node);
          result.push(image);
        } else {
          const helper = await parseNode(node);
          result.push(helper);
          result[result.length - 1].children = await recursion(
            node.children,
            imageNodeList,
            []
          );
        }
      } else {
        if (imageNodeList.includes(id)) {
          const image = await exportAsImage(node);
          result.push(image);
        } else {
          const helper = await parseNode(node);
          result.push(helper);
        }
      }
    }
    resolve(result);
  });
};

handleEvent("createNode", async (val: Object[]) => {
  const result = await recursion(figma.currentPage.selection, val, []);
  console.log(result);
});

handleEvent("setImage", () => {
  const selection = figma.currentPage.selection;
  dispatch("imageNodeListSet", selection[0]);
});

handleEvent("errorMessage", (val: string) => {
  figma.notify(val);
});
