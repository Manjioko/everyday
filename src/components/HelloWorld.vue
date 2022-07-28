<template>
  <div class="hello"> 
    <div @click="saySome">{{some}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props:['msg'],
  setup(props,content) {
    function saySome() :void {
      content.emit("childSay","关山难越，谁悲失路之人，萍水相蓬，尽是他乡之客");
    }
    return {
      some: props.msg,
      saySome
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
