<template>
  <div class="home">
    <div class="say-something">
      <h2 class="home-h2">
        点击右侧列表，即可进入相应页面
      </h2>
      <p class="home-p">
        该项目内所有页面均为纯CSS构建，不依赖任何UI库，这也是我做这个小项目的初衷，
        该项目目的在于模仿各地有名网站，通过自己的CSS能力，构建出大致一样的页面
        借此提升自己的前端页面绘制能力。<strong>严禁</strong> 该项目用于 <strong>任何商业用途</strong> ，仅供前端学习使用。
      </p>
    </div>
    <ul class="goto-ohter">
      <li v-for="(item,index) in gotoList" :key="index">
        <a :href="item.href" class="goto-a">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    // GoLangVue
  },

  setup() {

    return {
      gotoList: [
        {title: '百度',href: '/baidu'},
        {title: 'Golang(需翻墙)',href: '/golang'},
        {title: 'Rust',href: '/rust'},
        {title: 'Ruby',href: '/ruby'},
        {title: 'Vue',href: '/vue'},
      ]
    }
  }


});
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.goto-ohter {
  list-style: trad-chinese-formal;
  padding: 0;
  overflow-y: auto;
  scrollbar-width: none;
  /* -ms-overflow-style: none; */
  max-height: 25rem;
  min-width: 10rem;
}

.goto-ohter::-webkit-scrollbar {
  display: none;
}

.goto-a {
  text-decoration: none;
  color: #343a4b;
  font-size: 1.4725rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  font-weight: 400;
  display: block;
}

.goto-a:hover {
  color: #626d8a;
  text-decoration: underline;
}

.say-something {
  flex: 0 37%;
  margin-right: 8rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
}
.home-h2 {
    margin-top: 0;
    margin-bottom: 1rem;
}
.home-p {
  margin-top: 0;
  font-size: 0.8725rem;
  color: #555759;
  font-style: italic;
}
</style>
