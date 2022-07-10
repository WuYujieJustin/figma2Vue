<template>
<div id="ui">
	<button class="button button--primary" @click='createNode'>导出</button>
	<button class="button button--primary" @click='setImage'>设置为图片</button>
</div>
</template>

<script>
import styles from 'figma-plugin-ds/dist/figma-plugin-ds.css'
import {
  dispatch,
  handleEvent
} from "./uiMessageHandler";
import {
  onMounted,
  ref
} from 'vue';

export default {
  setup() {
    const message = ref("")
    const imageNode = ref([])
    function createNode() {
      // todo get imageNode Value
      dispatch("createNode", ["341:15494"]);
    }
    const setImage = () => {
      dispatch("setImage");
    }
    onMounted(() => {
      handleEvent("imageNodeSet", val => {
        const { id } = val
        if (!imageNode.value.includes(id)) {
          imageNode.value.push(id)
        } else {
          dispatch("errorMessage",'已设置为图片类型');
        }
      });
    })

    return {
      message,
      createNode,
      setImage,
      imageNode
    };
  }

};
</script>

<style scoped>
#ui{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--size-medium);
}
</style>