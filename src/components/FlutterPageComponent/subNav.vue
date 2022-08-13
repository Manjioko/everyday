<template>
    <article class="fsn-contains">
        <ul class="fsn-ul">
            <li class="fsn-li" v-for="(item,index) in list" :key="index">
                <a href="" class="fsn-a">{{item}}</a>
            </li>
        </ul>
    </article>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'FlutterSubNav',
  props: ['list'],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fsn-contains {
    position: absolute;
    padding: 24px;
    background: #fff;
    left: -60px;
    top: 40px;
    border-radius: 6px;
    border: none;
    box-sizing: border-box;
    box-shadow: 0 0 2px #ccc;
    min-width: 220px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    z-index: 10;

    // 默认隐藏
    // display: none;
}

.fsn-ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.fsn-a {
    text-decoration: none;
    color: #4a4a4a;
    padding: 9px 16px 8px;
    display: inline-block;
}

.fsn-li {
    margin-bottom: 8px;
}
.fsn-li:hover {
    background-color: #f1f3f4;
    border-radius: 24px;
    font-weight: 700;
    transition: all 0.2s;
}
</style>
