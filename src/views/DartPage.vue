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
    position: sticky;
    top: 0;
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
</style>
