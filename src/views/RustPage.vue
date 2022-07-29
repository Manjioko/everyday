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

    <!-- 开始rust -->
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

    <!-- 选择rust -->
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

    <!-- 构建应用 -->
    <section class="build">
      <article class="build-contains">
        <div class="build-app">
          <p class="build-app-title">用rust构建应用</p>
          <p class="build-app-subcontents">2018 年，Rust 社区决定在几个不同的领域中提升编程体验
            （见 <a href="/ruts">2018 年路线图</a> ）。您可以找到许多高质量的 crates 和一些精彩的入门指南。
          </p>
        </div>
        <div class="build-list">
          <div class="build-list-box" v-for="(item,index) in buildBox" :key="index">
            <div class="build-list-logo">
              <img :src="item.url" alt="" class="build-list-img">
            </div>
            <h2 class="build-list-h2">{{item.title}}</h2>
            <p class="build-list-subcontents">
              {{item.sub}}
            </p>
            <a href="/rust" class="build-list-a">{{item.btn}}</a>
          </div>
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
      buildBox: [
        {
          url: 'https://www.rust-lang.org/static/images/cli.svg',
          title: '命令行',
          sub: '使用 Rust 强大的生态系统快速实现命令行工具。Rust 可助您放心维护，轻松分发应用程序',
          btn: '构建工具'
        },
        {
          url: 'https://www.rust-lang.org/static/images/webassembly.svg',
          title: 'WebAssembly',
          sub: '使用 Rust 来逐个增强您的 JavaScript 模块。发布到 npm，使用 webpack 打包，即可感受到惊人的速度提升',
          btn: '编写Web应用'
        },
        {
          url: 'https://www.rust-lang.org/static/images/networking.svg',
          title: '网络',
          sub: '可预见的性能，极小的资源占用，坚如磐石的可靠性。Rust 极其适合网络服务。',
          btn: '运作于服务器'
        },
        {
          url: 'https://www.rust-lang.org/static/images/embedded.svg',
          title: '嵌入式',
          sub: '针对资源匮乏的设备？需要底层控制而又不失上层抽象的便利？Rust 包您满意！',
          btn: '开启嵌入式'
        },
        
      ]
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
    padding: 2.5rem 0;
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

.build {
    background: #2e2459;
    color: white;
}

.build-contains {
    padding: 30px 0 60px 0;
    color: white;
    max-width: 70rem;
    margin: 0 auto;
}

.build-app-title {
    margin: 0;
    padding-top: 10px;
    margin-bottom: 30px;
    padding-left: 10px;
    font-size: 2.25rem;
    font-weight: 600;
    width: 21rem;
    letter-spacing: 2px;
    border-bottom: 0.875rem solid #a72145;
}

.build-app-subcontents {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 1.1rem;
    & > a {
      color: white;
    }
}

.build-list {
    display: grid;
    grid-template-columns: repeat(4,1fr);
}

.build-list-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.build-list-img {
    max-width: 6rem;
}

.build-list-h2 {
    padding-top: 1rem;
    margin-top: 0;
    font-size: 1.5rem;
}

.build-list-subcontents {
    line-height: 2rem;
    margin-top: 0;
    margin-bottom: 30px;
    padding: 0 1rem;
    flex-grow: 1;
}

.build-list-a {
    background: #a72145;
    text-decoration: none;
    color: white;
    width: 90%;
    text-align: center;
    padding: 0.8rem 0;
    border-radius: 0.25rem;
}

</style>
