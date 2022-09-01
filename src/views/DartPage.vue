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
  </main>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'dartPage',

  setup() {

    // let xhr = new XMLHttpRequest()


    return {
        navBox: ['Overview','Docs','Community','Try Dart','Get Dart']
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
</style>
