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

    <section class="use-rust">
      <article class="ur-contains">
        <div class="use-rust-layout">
          <p class="use-rust-title">生产环境中的 Rust</p>
          <p class="use-rust-cn">
            全世界已有数百家公司在生产环境中使用 Rust，以达到快速、跨平台、低资源占用的目的。
            很多著名且受欢迎的软件，例如 Firefox、 Dropbox 和 Cloudflare 都在使用 Rust。
            <strong>从初创公司到大型企业，从嵌入式设备到可扩展的 Web 服务，Rust 都完全合适。</strong>
          </p>
        </div>
        <div class="ur-boast">
          <div class="ur-boast-quote">
            <blockquote class="ur-quote">
              对 Rust 最大的赞美，就是它让我太无聊了。这太令人惊叹了！
            </blockquote>
            <p class="ur-author">
              – Chris Dickinson，来自 npm 公司的工程师
            </p>
          </div>
          <div class="ur-logo">
            <img src="https://www.rust-lang.org/static/images/user-logos/npm.svg" alt="" class="ur-logo-img" />
          </div>
        </div>

        <hr />

        <div class="ur-boast-again">
          <div class="urba-layout">
            <div class="ur-logo-agin">
              <img src="https://www.rust-lang.org/static/images/user-logos/yelp.png" alt="" />
            </div>
            <div class="ur-boast-again">
              <blockquote class="ur-quote-again">
                文档、工具和社区都相当棒，足以帮助您顺利完成 Rust 项目！
              </blockquote>
              <p class="ur-author-again">
                – Antonio Verardi，基础设施工程师
              </p>
            </div>
          </div>
        </div>

        <a href="/rust" class="ur-more">了解更多</a>

      </article>
    </section>

    <section class="join-us">
      <article class="join-us-contains">
        <div class="join-us-layout">
          <p class="join-us-title">加入社区</p>
        </div>

        <div class="ju-list">
          <div class="ju-box" v-for="(item,index) in joinBox" :key="index">
            <h3 class="ju-box-h3">{{item.title}}</h3>
            <p class="ju-box-sub">{{item.sub}}</p>
            <a href="/rust" class="ju-a">{{item.btn}}</a>
          </div>
        </div>

        <div class="ju-code">
          <h3 class="ju-box-h3">贡献代码</h3>
          <p class="ju-box-sub">
            Rust 是真正由社区驱动的项目。我们欢迎您的帮助，无论您是业余爱好者还是生产级用户，
            也不管您是初来乍到的新手还是经验丰富的专家。让我们一起把 Rust 变得更好！
          </p>
          <a href="/rust" class="ju-a">阅读《贡献指南》</a>
        </div>
      </article>
    </section>


    <!-- 感谢 -->
    <section class="thank">
      <article class="thank-contains">
        <div class="use-rust-layout">
          <p class="thank-title">感谢</p>
          <p class="thank-cn">
            如果没有个人、公司慷慨无私地奉献出时间、劳动和资源，Rust 将不会存在。我们非常感谢您的支持！
          </p>
        </div>

        <div class="thank-list">
          <div class="thank-box" v-for="(item,index) in thankBox" :key="index">
            <h3 class="thank-h3">{{item.title}}</h3>
            <p class="thank-sub">{{item.sub}}</p>
            <a href="/rust" class="ju-a">{{item.btn}}</a>
          </div>
        </div>

      </article>
    </section>
  </main>

  <footer class="footer">

    <article class="footer-contains">
      <div class="footer-help">
        <h3 class="footer-help-h3">获得帮助！</h3>
        <ul class="fh-ul">
          <li class="fh-li" v-for="(item,index) in helpBox" :key="index">
            <a href="/rust" class="fh-a">{{item}}</a>
          </li>
          <li class="fh-li-select">
            <select name="NAV-SELECT" id="footer-select" aria-labelledby="select">
              <option :value="item" v-for="(item,index) in navSelect" :key="index">{{item}}</option>
            </select>
          </li>
        </ul>
      </div>
      <div class="footer-police">
        <h3 class="footer-help-h3">条款与政策</h3>
        <ul class="fh-ul">
          <li class="fh-li" v-for="(item,index) in policeBox" :key="index">
            <a href="/rust" class="fh-a">{{item}}</a>
          </li>
        </ul>
      </div>

      <div class="footer-social">
        <h3 class="footer-help-h3">社交</h3>
        <a href="/rust" class="fs-a">
          <img src="https://www.rust-lang.org/static/images/twitter.svg" alt="" class="fs-a-img" />
        </a>
        <a href="/rust" class="fs-a">
          <img src="https://www.rust-lang.org/static/images/youtube.svg" alt="" class="fs-a-img" />
        </a>
        <a href="/rust" class="fs-a">
          <img src="https://www.rust-lang.org/static/images/discord.svg" alt="" class="fs-a-img" />
        </a>
        <a href="/rust" class="fs-a">
          <img src="https://www.rust-lang.org/static/images/github.svg" alt="" class="fs-a-img" />
        </a>
      </div>

    </article>

  </footer>
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
        
      ],
      joinBox: [
        {
          title: '阅读',
          sub: '我们热爱文档！查看在线书籍，以及重要的博客文章和用户指南。',
          btn: '阅读学习资源',
        },
        {
          title: '观看',
          sub: 'Rust 社区有专门的 YouTube 频道，内含大量的演示文稿和教程。',
          btn: '观看学习视频',
        },
      ],
      thankBox: [
        {
          title: '个人',
          sub: 'Rust 是一个社区项目，非常感谢社区为它所做的贡献。',
          btn: '查看个人贡献者'
        },
        {
          title: '团体赞助者',
          sub: 'Rust 使用的基础设施来自于一些公司的捐赠。',
          btn: '查看赞助者'
        },
      ],
      helpBox: ['文档','Rust Forge (贡献者文档)','在用户论坛提问'],
      policeBox: ['行为准则','许可证','商标政策和媒体指南','安全问题公示','隐私声明']
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

.use-rust-cn,.thank-cn {
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 1.725rem;
  font-weight: 400;
}

.ur-boast {
    display: flex;
}

.ur-boast-quote {
    flex: 1;
}

.ur-quote {
    font-size: 1.7rem;
    border-bottom: 1px dotted #2a3439;
    position: relative;
}

.ur-author {
    text-align: end;
    font-size: 1.5rem;
    font-weight: 500;
}

.ur-quote::before {
    content: "“";
    color: #2a3439;
    font-size: 4rem;
    position: absolute;
    left: -50px;
    top: 20px;
}

.ur-logo {
    width: 30%;
    text-align: center;
}

.ur-logo-img {
    width: 60%;
    padding: 10px;
}
.ur-contains {
  padding: 30px 0 60px 0;
  // color: white;
  max-width: 70rem;
  margin: 0 auto;
}

.use-rust-title {
  @extend .build-app-title;
  border-bottom: 0.875rem solid #ffc832;
  width: 24rem;
  
}

.thank-title {
  @extend .use-rust-title;
  width: 6rem;
}

.urba-layout {
  display: flex;
}

.ur-logo-agin {
    width: 30%;
    text-align: center;
    & > img {
      width: 60%;
    }
}

.ur-quote-again {
    font-size: 1.7rem;
    border-bottom: 1px dotted #2a3439;
    position: relative;
}

.ur-quote-again::before {
  content: "“";
  color: #2a3439;
  font-size: 4rem;
  position: absolute;
  left: -50px;
  top: 20px;
}

.ur-author-again {
    text-align: end;
    font-weight: 500;
    font-size: 1.5rem;
}

.ur-more {
    width: 100%;
    display: block;
    text-align: center;
    background: #ffc832;
    padding: 8px 0;
    text-decoration: none;
    color: #2a3439;
    font-weight: bold;
    margin-top: 30px;
    border-radius: 0.25rem;
}

.join-us {
    background: #a72145;
}

.join-us-contains {
    padding: 30px 0 60px 0;
    max-width: 70rem;
    margin: 0 auto;
    color: white;
}

.join-us-title {
    margin: 0;
    padding-top: 10px;
    margin-bottom: 30px;
    padding-left: 10px;
    font-size: 2.25rem;
    font-weight: 600;
    width: 11rem;
    letter-spacing: 2px;
    border-bottom: 0.875rem solid #2e2459;
}

.ju-list {
    display: flex;
}

.thank-list {
  @extend .ju-list;
}

.ju-box {
    display: flex;
    flex-direction: column;
    margin: 0 0.875rem;
}

.thank-box {
  @extend .ju-box;
}

.ju-box-h3 {
    margin-top: 0;
    font-size: 1.6rem;
}

.thank-h3 {
  @extend .ju-box-h3;
}

.ju-box-sub {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 1.12rem;
}

.thank-sub {
  @extend .ju-box-sub;
}

.ju-a {
  text-decoration: none;
  color: white;
  background: #2e2459;
  text-align: center;
  padding: 8px 0;
  border-radius: 0.25rem;
}

.ju-code {
    margin: 0 0.875rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
}

.thank-contains {
  padding: 30px 0 60px 0;
  max-width: 70rem;
  margin: 0 auto;
}

.footer {
    padding: 30px 0;
    background-color: #2a3439;
    color: white;
}

.footer-contains {
    width: 70rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
}

.footer-help-h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1.6rem;
}

.fh-ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.fh-li {
    margin-bottom: 1rem;
}

#footer-select {
    width: 10rem;
    height: 1.3rem;
    margin-bottom: 0;

}

.fh-li-select {
  margin-bottom: 0;
}

.fh-a {
    text-decoration: none;
    color: #ffc832;
}

.fs-a-img {
    width: 40px;
    padding: 0 10px;
}
</style>
