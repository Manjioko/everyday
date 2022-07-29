<template>
  <header>
    <nav class="rust-nav">
      <div class="rust-logo">
        <img src="	https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="rust logo" class="rust-logo-img">
      </div>
      <div class="rust-nav-list">
        <ul class="rust-nav-list">
          <li class="rust-nav-li" v-for="(item,index) in rustNavList" :key="index">
            <a href="/rust" class="rust-nav-li-a">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="rust-nav-select">
        <!-- <label for="language-nav" class="hidden">语言</label> -->
        <select name="NAV-SELECT" id="nav-select" aria-labelledby="select">
          <option :value="item" v-for="(item,index) in navSelect" :key="index">{{item}}</option>
        </select>
      </div>
    </nav>
  </header>
  <main>
    <section class="big-rust">
      <article class="br-contains">
        <div class="br-contains-layout">
          <div class="br-co-welcom">
            <h1 class="br-co-we-h1">Rust</h1>
            <p class="br-co-we-p">一门赋予每个人<br/>构建可靠且高效软件能力的语言。</p>
          </div>
          <div class="br-co-get-start">
            <a href="/rust" class="br-gs-btn">马上开始</a>
            <a href="/rust" class="br-gs-version">版本 1.62.1</a>
          </div>
        </div>
      </article>
    </section>
    <section class="why-try">
      <article class="why-try-contains">
        <div class="why-try-rust">
          <p>为什么选择Rust?</p>
        </div>
        <div class="why-try-list" >
          <article class="why-try-list-item" v-for="(item, index) in whyTryBox" :key="index" >
              <h2 class="wtli-h2">{{item.title}}</h2>
              <p class="wtli-p">
                {{item.contents}}
              </p>
          </article>
        </div>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'RustPage',
  setup() {

    return {
      rustNavList: ['安装','学习','演练场','治理','社区','博客'],
      navSelect: ['简体中文','正體中文','English'],
      whyTryBox: [
        {
          title: '高性能',
          contents:`Rust 速度惊人且内存利用率极高。
          由于没有运行时和垃圾回收， 它能够胜任对性能要求特别高的服务，
          可以在嵌入式设备上运行， 还能轻松和其他语言集成。`
        },
        {
          title: '可靠性',
          contents:`Rust 丰富的类型系统和所有权模型保证了内存安全和线程安全，让您在编译期就能够消除各种各样的错误。`
        },
        {
          title: '生产力',
          contents:`Rust 拥有出色的文档、友好的编译器和清晰的错误提示信息， 
          还集成了一流的工具——包管理器和构建工具， 智能地自动补全和类型检验的多编辑器支持， 
          以及自动格式化代码等等。`
        },
      ],
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

nav.rust-nav {
    display: flex;
    padding: 0 1rem;
}

.rust-logo {
    flex: 1 1 auto;
}

.rust-logo-img {
    width: 80px;
}

.rust-nav-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5rem 2rem;
}

.rust-nav-li {
    padding: 0.5rem 2rem;
}

.rust-nav-li-a {
    color: #2a3439;
    font-size: 1.125rem;
    line-height: 1.6rem;
}

.rust-nav-select {
    padding: 2rem 0;
}

#nav-select {
  font-size: 1.125rem;
  line-height: 1.6rem;
  width: 10rem;
}

.br-contains {
    // margin-top: 1rem;
    // margin-bottom: 8rem;
    padding: 0 1rem;
    max-width: 70rem;
    margin: 1rem auto 8rem;
}
.br-contains-layout {
  margin-top: 1rem;
  margin-bottom: 7rem;
  padding: 0 1rem;
  display: flex;
}

.br-co-welcom {
    flex: 0 70%;
}

.br-co-we-h1 {
    font-size: 6rem;
    margin: 0;
    line-height: 7rem;
    font-weight: 900;
}

.br-co-we-p {
    font-size: 2.275rem;
    margin-bottom: 0;
    font-weight: 200;
}
.br-gs-btn {
    width: 100%;
    display: inline-block;
    max-width: 96rem;
}

.br-co-get-start {
    flex: 0 28%;
}

.br-gs-btn {
  display: block;
  background-color: #ffc832;
  padding: 20px;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 600;
  color: black;
  border-radius: 0.275rem;
  text-decoration: none;
  margin-top: 1.25rem;
}

.br-gs-version {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    color: #4299bf;
    font-size: 1.5rem;
}

.why-try {
    background: #0b7261;
}

.why-try-contains {
    padding: 30px 0 60px 0;
    color: white;
    max-width: 70rem;
    margin: 0 auto;
}

.why-try-rust > p {
  margin: 0;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 2.25rem;
  font-weight: 600;
  width: 21rem;
  letter-spacing: 2px;
  border-bottom: 0.875rem solid #2e2459;
}

.why-try-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.why-try-list-item {
    margin-top: 1.5rem;
}

.wtli-h2 {
    font-size: 2.25rem;
    margin-top: 0;
}

.wtli-p {
    margin-top: 0;
    margin-bottom: 30px;
    padding-right: 3rem;
}

</style>
