<template>
  <header class="dart-header">
    <nav class="dh-nav">
        <div class="dh-nav-left">
            <a href="" class="dh-nav-logo">
                <img src="../assets/DartAssets/white.svg" alt="" class="dh-nav-logo-img" /> 
            </a>
        </div>
        <div class="dh-nav-list">
            <ul class="dhnl-ul">
                <li class="dhnl-li" v-for="(item, index) in navBox" :key="index">
                    <a href="" class="dhnl-a">{{item}}</a>
                </li>
                <li class="dhnl-search-li">
                    <a href="" class="nav-search">
                        <img src="../assets/search-white.svg" alt="">
                    </a>
                </li>
            </ul>
            
        </div>
    </nav>
  </header>

  <main class="dart-main">
    <!-- 招聘区 -->
    <aside class="dart-some-tip">
        <span class="dst-p">The Flutter and Dart teams are hiring. </span>
        <a href="" class="dst-learn-more">Learn more</a>
    </aside>

    <!-- 视频展示区 -->
    <section class="dart-video">
        <article class="dv-contains">
            <video muted autoplay loop class="dv-video">
                <source src="../assets/DartAssets/hotreload.webm">
            </video>
        </article>
    </section>

    <!-- 客户端优化 -->
    <section class="optimized">
        <article class="opt-contains">
            <div class="opt-title">Dart is a client-optimized language for fast apps on any platform</div>
            <div class="opt-watch-video">
                <div class="opt-cycle">
                    <div class="opt-tip"></div>
                </div>
                <p class="opt-w-v-p">Watch video</p>
            </div>
            <div class="opt-logo">
                <img src="../assets/DartAssets/supported_by_google.png" alt="" class="opt-logo-img">
            </div>
            <div class="opt-sub">
                <p class="opt-sub-p">Dart is free and open source</p>
                <span class="opt-sub-span">
                    <img src="../assets/github-light.svg" alt="" class="opt-sub-img">
                </span>
            </div>
        </article>
    </section>

    <!-- Feature -->
    <section class="feature">
        <article class="feature-contains">
            <div class="fc-box" v-for="(item, index) in featureBox" :key="index">
                <div class="fc-box-logo">
                    <img :src="item.url" alt="" class="fc-box-logo-img">
                </div>
                <h1 class="fc-box-h1">
                    {{item.title}}
                    <br>
                    {{item.titleNext}}
                </h1>
                <p class="fc-box-p">{{item.sub}}</p>
            </div>
        </article>
    </section>

    <!-- Descript -->
    <section class="descript">
        <article class="des-contains">
            <div class="des-left">
                <div class="left-box">
                    <img src="https://dart.dev/assets/dash/2x/multiplatform%20performance%20light%20op1@2x.png" alt="" class="des-left-img">
                    <h1 class="des-left-h1">Optimized for UI</h1>
                    <div class="des-left-btn">
                        <ul class="des-left-ul">
                            <li class="des-left-li" @mouseenter="colorListHandle">
                                <div class="des-left-btn-div"></div>
                                <p class="des-left-p">
                                    Mature and complete <a href="" class="des-left-a">async-await</a> for user interfaces containing event-driven code, 
                                    paired with <a href="" class="des-left-a">isolate-based concurrency</a>
                                </p>
                            </li>
                            <li class="des-left-li" @mouseenter="colorListHandle">
                                <div class="des-left-btn-div"></div>
                                <p class="des-left-p">
                                    A programming language optimized for building user interfaces with features such as <a href="" class="des-left-a">sound null safety</a>, 
                                    the <a href="" class="des-left-a">spread operator</a> for expanding collections, and <a href="" class="des-left-a">collection if</a> 
                                    for customizing UI for each platform
                                </p>
                            </li>
                            <li class="des-left-li" @mouseenter="colorListHandle">
                                <div class="des-left-btn-div"></div>
                                <p class="des-left-p">
                                    A programming language that is easy to learn, with a <a href="" class="des-left-a">familiar syntax</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="des-right">
                <img src="https://dart.dev/assets/dash/svg/1-3%20familiar%20syntax.svg" alt="" class="des-right-img">
            </div>
        </article>
    </section>

    <!-- code -->
    <section class="code">
        <article class="code-contains">
            <div class="code-title">
                <h1 class="code-title-h1">Try Dart in your browser</h1>
                <select name="code" id="select">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
            </div>
            <div class="code-layout">
                <div class="code-layout-nav">
                    <span class="code-layout-nav-left">Dart</span>
                    <div class="code-layout-nav-right">
                        <span class="clnr-btn">install SDK</span>
                        <span class="clnr-btn">Format</span>
                        <span class="clnr-btn">Reset</span>
                        <span class="clnr-click">
                            <div class="clnr-c-ret"></div>
                            Run
                        </span>
                        <div class="clnr-dot">
                            <span class="clnr-click-dot">.</span>
                            <span class="clnr-click-dot">.</span>
                            <span class="clnr-click-dot">.</span>
                        </div>
                    </div>
                </div>
                <div class="code-layout-content">
                    <div class="clc-left">
                        <pre class="pre">
                            <code class="code">
 <span class="clc-num">1</span> void<span class="mainColor"> main</span>() {
 <span class="clc-num">2</span>     <span class="mainColor">print</span>(<span class="stringColor">"hello world"</span>);
 <span class="clc-num">3</span> }
                            </code>
                        </pre>
                    </div>
                    <div class="clc-right">
                        <span class="clc-right-console">Console</span>
                        <span class="clc-right-issue">no issues</span>
                    </div>
                </div>
            </div>

            <div class="code-bottom-title">
                <h1 class="code-bottom-title">
                    Want more practice? 
                    <a href="" class="cbt-a">Try a codelab</a>.
                    Or <a href="" class="cbt-a">download Dart</a>.
                </h1>
            </div>
        </article>
    </section>
  </main>

  <footer class="footer">
    <section class="footer-sec">
        <article class="footer-contains">
            <div class="footer-logo">
                <div class="fl-logo">
                    <img src="https://dart.dev/assets/img/shared/dart/logo+text/horizontal/white.svg" alt="" class="fl-logo-img">
                    <!-- <p class="fl-logo-p">Dart</p> -->
                </div>
                <div class="fl-another-logo">
                    <ul class="fl-a-l-ul">
                        <li class="fl-a-l-li">
                            <img src="../assets/youtube.svg" alt="" class="fl-a-l-svg" />
                        </li>
                        <li class="fl-a-l-li">
                            <img src="../assets/github-light.svg" alt="" class="fl-a-l-svg" />
                        </li>
                        <li class="fl-a-l-li">
                            <img src="../assets/twitter.svg" alt="" class="fl-a-l-svg" />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-sub">
                <p class="footer-sub-p">
                    Except as otherwise noted, this site is licensed under a Creative 
                    Commons Attribution 4.0 International License, and code samples 
                    are licensed under the 3-Clause BSD License.
                </p>
                <ul class="footer-sub-ul">
                    <li class="footer-sub-li">Terms</li>
                    <li class="footer-sub-li">Privacy</li>
                    <li class="footer-sub-li">Security</li>
                </ul>
            </div>
        </article>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'dartPage',

  setup() {

    function colorListHandle(e:MouseEvent) {
                        
        const target = e.target as Element;
        const parentList = target.parentElement?.children;

        if(parentList?.length) {
            for(let item of parentList) {
                if(target !== item) {
                    item.classList.remove("active")
                } else {
                    item.classList.add("active")
                }
            }
        }
    }


    return {
        navBox: ['Overview','Docs','Community','Try Dart','Get Dart'],
        featureBox: [
            { 
                title: 'Optimized',
                titleNext: 'for UI',
                url: 'https://dart.dev/assets/dash/2x/multiplatform%20performance%20light%20op1@2x.png',
                sub: 'Develop with a programming language specialized around the needs of user interface creation'
            },
            { 
                title: 'Productive',
                titleNext: 'development',
                url: 'https://dart.dev/assets/dash/2x/client%20optimised%20light%20op1@2x.png',
                sub: 'Make changes iteratively: use hot reload to see the result instantly in your running app'
            },
            { 
                title: 'Fast on all',
                titleNext: 'platforms',
                url: 'https://dart.dev/assets/dash/2x/productive%20dev%20light%20op1@2x.png',
                sub: 'Compile to ARM & x64 machine code for mobile, desktop, and backend. Or compile to JavaScript for the web'
            },
        ],
        colorListHandle
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.dh-nav {
    display: flex;
    background-color: #1C2834;
    color: #FFF;
    align-items: center;
    // position: sticky;
    // top: 0;
}

.dart-header {
    position: sticky;
    top: 0;
    z-index: 999;
}

.dh-nav-left {
    flex: 1;
}

.dh-nav-logo {
    width: 85px;
    margin: 0 20px;
    display: inline-block;
}

.dh-nav-logo-img {
    width: 100%;
    height: 50px;
    line-height: 50px;
}

.dh-nav-list {
    flex: 0 70%;
}

.dhnl-ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
}

.dhnl-li {
    padding: 0 12px;
}

.dhnl-a {
    text-decoration: none;
    color: #fff;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 400;

    &:hover {
        color: #40c4ff;
    }
}

.dhnl-search-li {
    margin: 0 2rem;
}

.nav-search {
    & > img {
        width: 16px;
    }
    
}

.dart-some-tip {
    background-color: #121a26;
    color: #fff;
    padding: 12px 0;
    text-align: center;
}
.dst-learn-more {
    text-decoration: none;
    color: #40c4ff;
}

.dv-contains {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #17212f;
    mix-blend-mode: darken;
}

.dv-video {
    max-width: 1330px;
}

.opt-contains {
    text-align: center;
    padding: 64px 0;
    background-color: #121a26;
}

.opt-title {
    font-size: 28px;
    color: #fff;
}

.opt-watch-video {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    width: 150px;
    margin: 0 auto;
    cursor: pointer;
}

.opt-watch-video:hover {

    & > div {
       background-color: #168fc5;
       transition: background-color 0.3s ease;
    }

    & > p {
       color: #168fc5;
       transition: color 0.3s ease;
    }
}

.opt-cycle {
    background-color: #40c4ff;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
}

.opt-tip {
    width: 0;
    height: 0;
    border-bottom: 5px solid transparent;
    border-right: 6px solid transparent;
    border-left: 6px solid #000;
    border-top: 5px solid transparent;
    margin-left: 9px;
}

.opt-w-v-p {
    margin: 0;
    padding-left: 10px;
    color: #40c4ff;
    line-height: 27px;
    height: 24px;
}

.opt-logo {
    padding-top: 30px;
}

.opt-logo-img {
    width: 180px;
    opacity: 0.5;
}

.opt-sub {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 20px;
    color: #82878c;
    margin-top: 16px;
}

.opt-sub-p {
    margin: 0;
}

.opt-sub-span {
    margin-left: 10px;
    height: 20px;
}

.opt-sub-img {
    width: 1rem;
    opacity: 0.5;
    cursor: pointer;
}

.opt-sub-img:hover {
    opacity: 1;
    transition: opacity 0.3 ease;
}

.feature-contains {
    // background-color: #0d1520;
    padding-top: 50px;
    padding-bottom: 80px;
    display: flex;
    color: #fff;
    justify-content: space-around;
    max-width: 100%;
    width: 1280px;
    margin: 0 auto;
}

.fc-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 325px;
    flex-shrink: 0;
}

.fc-box-logo-img {
    width: 80px;
    height: 80px;
}

.fc-box-h1 {
    font-size: 28px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 20px;
    color: #f8f9fa;
    font-weight: 300;
    line-height: 33px;
}

.fc-box-p {
    text-align: center;
    font-size: 16px;
    color: #82878c;
    line-height: 20px;
}


.feature {
    background-color: #0d1520;
}

.des-contains {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    background-color: #0d1520;
}

.des-left {
    display: flex;
    align-items: center;
    padding: 0 25px;
    box-sizing: border-box;
    background-color: #fff;
}

.left-box {
    padding: 24px;
    max-width: 512px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: 0;
}

.des-left-img {
    width: 68px;
}

.des-left-h1 {
    font-size: 43px;
    margin-top: 18px;
    margin-bottom: 34px;
    line-height: 1.2;
    color: #4a4a4a;
}

.des-left-ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.des-left-li {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
    font-size: 17px;
    // cursor: pointer;
}

.active {
    color: #1967d2;
    & > .des-left-btn-div{
        background-color: #1967d2;
        height: 25px;
        transition: height .6s ease
    };

    & a {
        color: #1967d2;
    };
}

.des-left-btn-div {
    width: 5px;
    height: 10px;
    background-color: #0d1520;
    flex-shrink: 0;
    margin-top: 5px;
}

.des-left-p {
    margin: 0;
    margin-left: 20px;
}

.des-left-a {
    color: #4a4a4a;
    font-weight: 600;
}

.des-right {
    display: flex;
    align-items: center;
}

.des-right {
    display: flex;
    align-items: center;
}

.des-right-img {
    max-height: 640px;
    display: block;
}

.code-contains {
    text-align: center;
    background-color: #121a26;
    padding: 32px;
}
.code-title {
    color: #fff;
}

.code-layout {
    border: 1px solid #293542;
    box-shadow: 0 0 3px #293542;
    // max-width: 90vw;
    // margin: 0 auto;
}
.code-layout-nav {
    display: flex;
    justify-content: space-between;
    background-color: rgb(14, 22, 31);
    color: rgb(248, 249, 250);
    align-items: center;
    height: 50px;
    box-sizing: border-box;
}

.code-layout-nav-left {
    box-sizing: border-box;
    padding-left: 5px;
    width: 90px;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px solid #fff;
}

.code-layout-nav-right {
    display: flex;
    align-items: center;
}

.clnr-btn {
    padding: 0 15px;
    cursor: pointer;
}

.clnr-click {
    background-color: #168afd;
    width: 100px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    border-radius: 4px;
    margin-right: 20px;
    margin-left: 15px;
    user-select: none;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.clnr-c-ret {
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 9px solid #000;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
    margin-right: 8px;
}

.clnr-dot {
    display: flex;
    flex-direction: column;
    margin-right: 35px;
    cursor: pointer;
    opacity: 0.5;
}

.clnr-click-dot {
    width: 10px;
    height: 6px;
    line-height: 0;
    transform: scale(2);
}

.code-title-h1 {
    font-size: 43px;
    margin: 2rem 0;
    font-weight: 500;
}

#select {
    width: 170px;
    height: 25px;
    margin-bottom: 20px;
    outline: none;
}


.code-layout-content {
    display: flex;
    border-top: 3px solid #293542;
}

.clc-left {
    width: 65%;
    height: 500px;
    background: #0e161f;
    border-right: 5px solid #293542;
    text-align: start;
    color: #fff;
}

.clc-right {
    // height: 200px;
    background: #0e161f;
    flex-grow: 1;
    text-align: start;
    position: relative;
}

.clc-num {
    font-size: 18px;
    opacity: 0.5;
}

.mainColor {
    color: rgb(0, 210, 250);
}

.code {
    font-size: 17px;
}

.pre {
    margin: 0;
    // line-height: 1.6rem;
}

.stringColor {
    color: #f16767;
}

.clc-right-console {
    color: #fff;
    font-size: 14px;
    display: inline-block;
    padding: 7px;
    opacity: 0.5;
}

.clc-right-issue {
    color: #fff;
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-weight: 500;
    font-size: 15px;
}

.code-bottom-title {
    margin-bottom: 48px;
}

.code-bottom-title {
    color: #fff;
    font-size: 21px;
    margin-top: 32px;
}

.cbt-a {
    color: #40C4FF;
}


.footer-contains {
    background-color: #1C2834;
    padding: 32px;
    box-sizing: border-box;
}

.footer-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid #82878c;
}

.fl-logo-img {
    width: 164px;
}

.fl-a-l-ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.fl-a-l-svg {
    width: 32px;
    margin-left: 32px;
}

.footer-sub {
    display: flex;
    color: #fff;
    font-size: 14px;
    justify-content: space-between;
}

.footer-sub-p {
    width: 60%;
}

.footer-sub-ul {
    list-style: none;
    display: flex;
    padding: 0;
}

.footer-sub-li {
    margin-left: 24px;
    cursor: pointer;
}

</style>
