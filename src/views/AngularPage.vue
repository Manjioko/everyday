<template>
    <header class="ang-header">
        <!-- 头部导航栏和背景 -->
        <section class="ang-sec">
            <div class="ang-background"></div>
            <article class="ang-contains">
                
                <!-- 头部左边 -->
                <div class="ah-left">
                    <a href="" class="ang-logo">
                        <img src="https://angular.cn/assets/images/logos/angular/logo-nav@2x.png" alt="" class="ang-logo-img" />
                    </a>
                    <ul class="ah-ul">
                        <li class="ah-li" v-for="(item,index) in headerBox" :key="index">
                            <a href="" class="ah-li-a">{{item}}</a>
                        </li>
                    </ul>
                </div>

                <div class="ah-middle">
                    <input type="text" placeholder="搜索" class="ah-middle-input" />
                </div>
                <!-- 头部右边 -->
                <div class="ah-right">
                    
                    <a href="" class="ah-light-or-dark"><img src="../assets/night0.svg" alt="" class="ah-lod-svg"/></a>

                    <a href="" class="ah-right-link"><img src="../assets/twitter.svg" alt="" class="ah-rl-svg"/></a>
                    <a href="" class="ah-right-link"><img src="../assets/github-light.svg" alt="" class="ah-rl-svg"/></a>
                    <a href="" class="ah-right-link"><img src="../assets/youtube.svg" alt="" class="ah-rl-svg"/></a>
                </div>
            </article>
        </section>

        <!-- 快速上手 -->
        <section class="ang-header-start">
            <article class="ahs-contains">
                <div class="ahs-big-logo">
                    <img src="https://angular.cn/assets/images/logos/angular/angular.svg" alt="" class="ahs-bl-img" />
                </div>
                <div class="ahs-bl-content">
                    <h2 class="ahs-bl-c-h2">现代 Web 开发平台</h2>
                    <a href="" class="ahs-bl-c-btn">快速上手</a>
                </div>
            </article>
        </section>
    </header>

    <main class="ang-main">
        <section class="ang-content-one">
            <article class="ang-c-contains">
                <div class="acc-pic">
                    <img src="https://angular.cn/generated/images/marketing/home/responsive-framework.svg" alt="" class="acc-pic-img" />
                </div>
                <div class="acc-text">
                    <h3 class="acc-text-h3">横跨多种平台</h3>
                    <p class="acc-text-p">
                        学会用 Angular 构建应用，然后把这些代码和能力复用在多种多种不同平台的应用上
                         —— Web、移动 Web、移动应用、原生应用和桌面原生应用。
                    </p>
                </div>
            </article>
            <hr class="acc-hr" />
        </section>

        <section class="ang-content-one">
            <article class="ang-c-contains">
                
                <div class="acc-text">
                    <h3 class="acc-text-h3">速度与性能</h3>
                    <p class="acc-text-p">
                        通过 Web Worker 和服务端渲染，达到在如今(以及未来）的 Web 平台上所能达到的最高速度。

                        Angular 让你有效掌控可伸缩性。基于 RxJS、Immutable.js 和其它推送模型，能适应海量数据需求。
                    </p>
                </div>

                <div class="acc-pic">
                    <img src="https://angular.cn/generated/images/marketing/home/speed-performance.svg" alt="" class="acc-pic-img" />
                </div>
            </article>
            <hr class="acc-hr" />
        </section>

        <section class="ang-content-one">
            <article class="ang-c-contains">
                <div class="acc-pic acc-cmd">
                    <img src="https://angular.cn/generated/images/marketing/home/joyful-development.svg" alt="" class="acc-pic-img" />
                </div>
                <div class="acc-text">
                    <h3 class="acc-text-h3">美妙的工具</h3>
                    <p class="acc-text-p">
                        使用简单的声明式模板，快速实现各种特性。使用自定义组件和大量现有组件，扩展模板语言。
                        在几乎所有的 IDE 中获得针对 Angular 的即时帮助和反馈。
                        所有这一切，都是为了帮助你编写漂亮的应用，而不是绞尽脑汁的让代码“能用”。
                    </p>
                </div>
            </article>
            <hr class="acc-hr" />
        </section>

        <section class="ang-content-one">
            <article class="ang-c-contains">
                <div class="acc-text">
                    <h3 class="acc-text-h3">百万粉丝热捧</h3>
                    <p class="acc-text-p">
                        从原型到全球部署，Angular 都能带给你支撑 Google 大型应用的那些高延展性基础设施与技术。
                    </p>
                </div>
                <div class="acc-pic acc-map">
                    <img src="https://angular.cn/generated/images/marketing/home/loved-by-millions.svg" alt="" class="acc-pic-img" />
                </div>
            </article>
            <!-- <hr class="acc-hr" /> -->
        </section>

        <section class="ang-content-two">
            <article class="act-contains">
                <div class="act-box">
                    <div class="act-logo">
                        <img src="https://angular.cn/generated/images/marketing/home/code-icon.svg" alt="" class="act-l-img">
                    </div>
                    <div class="act-contents">
                        <h2 class="act-h2">立即试用</h2>
                        <p class="act-p">通过一个现成的范例应用来探索 Angular 的能力。不用安装任何东西。</p>
                    </div>
                </div>
            </article>
        </section>

    </main>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'AngularPage',

  setup() {


    return {
        headerBox: ['特性','文档','资源','活动','译者博客','关于中文版'],
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ang-background {
    background: linear-gradient(142deg, red, #42a5f5);
    width: 100%;
    min-height: 480px;
    height: 63vh;
    position: absolute;
    z-index: -1;
    transform: skewY(8deg);
    transform-origin: 100%;
}

.ang-contains {
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
    padding-right: 16px;
    box-sizing: border-box;
}

.ah-left {
    flex: 1;
    display: flex;
}

.ang-logo {
    display: inline-block;
    margin-right: 15px;
}

.ang-logo-img {
    width: 150px;
}

.ah-ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
}

.ah-middle-input {
    display: inline-block;
    vertical-align: middle;
    padding: 5px 30px 5px 16px;
    border-radius: 100px;
    border: none;
    width: 140px;
    max-width: 240px;
    margin-left: 8px;
    outline: none;
    font-size: 16px;
}

.ah-middle-input:focus {
    width: 80%;
    transition: width 0.4s ease;
}


.ah-right-link {
    display: inline-block;
    margin: 0 9px;
    vertical-align: middle;
}

.ah-rl-svg {
    width: 24px;
    height: 24px;
}

.ah-li-a {
    text-decoration: none;
    color: white;
    padding: 8px clamp(5px,0.7vw,16px);
}

.ah-light-or-dark {
    display: inline-block;
    margin-left: 20px;
    padding: 0 10px;
    border-right: 1px solid white;
    width: 40px;
    height: 40px;
    vertical-align: middle;
}

.ah-lod-svg {
    width: 21px;
    display: block;
    margin: 9px auto;
    line-height: 40px;
}

.ahs-contains {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    max-width: 900px;
    height: 480px;
    margin: 0 auto;
}

.ahs-bl-img {
    height: 400px;
}

.ahs-bl-content {
    padding-top: 100px;
}

.ahs-bl-c-h2 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3rem;
}

.ahs-bl-c-btn {
    text-decoration: none;
    color: #1976d2;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 24px;
    background: white;
    border-radius: 48px;
    box-sizing: border-box;
    box-shadow: 0 2px 5px #00000042;
}

.ah-middle {
    display: flex;
    justify-content: flex-end;
}

.ang-c-contains {
    max-width: 920px;
    margin: 32px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.acc-pic {
    width: 340px;
}

.acc-pic-img {
    aspect-ratio: auto 340/222;
    max-width: 90% !important;
}

.acc-text {
    padding-right: 15%;
    flex: 1;
}

.acc-text-h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #1976d2;
    margin-bottom: 0;
}

.acc-text-p {
    color: #444;
    line-height: 2rem;
}

.acc-hr {
    background: #dbdbdb;
    height: 1px;
    border: none;
}

.ang-main {
    padding: 30px;
    padding-top: 0;
}

.acc-cmd,.acc-map {
    width: 450px;
}

.act-contains {
    max-width: 980px;
    margin: 32px auto;
    display: flex;
    justify-content: center;
}

.act-box {
    padding: 24px;
    width: 70%;
    display: flex;
    align-items: center;
    box-shadow: 0 6px 6px #0a101426, 0 0 52px #0a10141f;
    border-radius: 4px;
    box-sizing: border-box;
    min-width: 350px;
}

.act-l-img {
    height: 70px;
    margin: 16px;
}

.act-h2 {
    margin: 0;
    color: #1976d2;
    font-size: 1.6rem;
    font-weight: 500;
}

.act-p {
    color: #444;
    text-align: left;
    margin: 0;
    padding: 8px 0;
}


</style>
