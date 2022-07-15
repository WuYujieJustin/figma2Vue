import { getStyleObj, combineNode } from "./ui/utils/index";
import { dispatch, handleEvent } from "./codeMessageHandler";
import base64 from "@hexagon/base64";
figma.showUI(__html__);
// Skip over invisible nodes and their descendants inside instances for faster performance
figma.skipInvisibleInstanceChildren = true;

// todo send to ui to decode bytes using browser built-in function
// 解析为图片
// upload cdn
const exportAsImage = (val: SceneNode) => {
  return new Promise(async (resolve, reject) => {
    const unit8ArrayValue = await val.exportAsync({
      format: "PNG",
      contentsOnly: false,
      useAbsoluteBounds: true,
    });
    const style = await getStyleObj(val)
    const image = base64.fromArrayBuffer(unit8ArrayValue);
    const helper = {
      origin: val,
      node: "img",
      src: image,
      style,
    };
    // await upload cdn
    // const url = await uploadCdn(image)
    // resolve(url)
    resolve(helper);
  });
};

// 解析为普通html节点
const parseNode = async (val: SceneNode) => {
  return new Promise(async (resolve, reject) => {
    const { id, type } = val;
    const style = await getStyleObj(val)
    const helper = {
      id,
      node: "div",
      style,
      text: "",
      origin: val,
    };
    if (type === "TEXT") {
      helper.text = val.characters;
    }
    resolve(helper);
  });
};

const isExportAsImage = (val: SceneNode) => {
  const { name } = val;
  return name.indexOf("#export_as_image") > -1;
};

// BFS
// todo val type?
// figma.currentPage.selection
const recursion = async (val: any, result: any) => {
  return new Promise(async (resolve, reject) => {
    for (const node of val) {
      if (Array.isArray(node.children)) {
        if (isExportAsImage(node)) {
          const image = await exportAsImage(node);
          result.push(image);
        } else {
          const helper = await parseNode(node);
          result.push(helper);
          result[result.length - 1].children = await recursion(
            node.children,
            []
          );
        }
      } else {
        if (isExportAsImage(node)) {
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

handleEvent("createNode", async () => {
  const result = await recursion(figma.currentPage.selection, []);
  dispatch('nodeParsed', result)
  const combineResult = combineNode(result[0])
  console.log(combineResult, 'combineResult')
});

handleEvent("setImage", () => {
  const selection = figma.currentPage.selection;
  const { name } = selection[0];
  if (name.indexOf("#export_as_image") > -1) {
    figma.notify("该节点已被设置为图片节点");
  } else {
    const node = figma.currentPage.selection[0];
    node.name = name + "#export_as_image";
    figma.currentPage.selection = [node];
  }
});

handleEvent("errorMessage", (val: string) => {
  figma.notify(val);
});
