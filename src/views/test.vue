<template>
  <div class="test"> 
    <div class="lines" v-if="boxNum > 1"></div>
    <div class="cont-box" @click="handlebox">
        <div class="cont" v-for="_ of boxNum" :key="_">
            <div class="ten">
                <div class="c-h"></div>
                <div class="c-v"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, } from 'vue';

export default defineComponent({
  name: 'testPage',

  setup() {

    // 添加蓝色盒子
    let boxNum = ref(1)
    function handlebox() {
        boxNum.value++;
    }

    return {
        boxNum,
        handlebox,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.test {
    /* width: 50vw; */
    /* height: 50vh; */
    /* background: #ccc; */
    margin: 0 auto;
    position: absolute;
    top: 25%;
    left: 30%;
    justify-content: center;
    display: flex;
    align-items: stretch;
}

.lines {
    width: 40px;
    /* background: #ede931; */
    margin: 80px 0;
    border-top: 2px solid #444;
    border-bottom: 2px solid #444;
    border-left: 2px solid #444;
}

.lines:before {
    content: "并";
    position: absolute;
    top: 49%;
    left: -6px;
    background: white;
}

.cont {
    width: 20vw;
    height: 20vh;
    background: #3dd;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 28px;
}

.ten {
    position: relative;
}

.c-h {
    width: 25px;
    height: 0;
    border-top: 3px solid white;
}

.c-v {
    @extend .c-h;
    transform: rotate(90deg);
    position: absolute;
    top: 0;
}
</style>
