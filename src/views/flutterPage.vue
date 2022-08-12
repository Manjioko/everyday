<template>
    <header class="flutter-header">
        <section class="fh-s">
            <article class="fh-contains">
                <div class="fh-logo">
                    <a href="" class="fh-logo-a">
                        <img src="https://files.flutter-io.cn/flutter-cn/landing/ec64036b4eacc9f3fd73.svg" alt="" class="fh-logo-img" />
                    </a>
                </div>
                <div class="fh-list">
                    <ul class="fh-list-ul">
                        <li class="fh-list-li" v-for="(item,index) in headerBox" :key="index">
                            <a href="" class="fh-list-a">{{item}}</a>
                        </li>
                    </ul>
                </div>
                <div class="fh-search">
                    <img src="../assets/search.svg" alt="" class="fh-search-img" />
                </div>
                <div class="fh-start-to-use">
                    <a href="" class="fh-stu-a">开始使用</a>
                </div>
            </article>
        </section>
    </header>

    <main class="flutter-main">
        <section class="fm-create">
            <article class="fm-create-contains">
                <div class="fm-cc-title">
                    <h1 class="fm-cc-title-h1">为所有屏幕创造精彩</h1>
                </div>
                <div class="fm-cc-gallery">
                    <div class="fm-cc-left-cards">
                        <div class="fm-left-cards-top-card"></div>
                        <div class="fm-left-cards-right-card"></div>
                        <div class="fm-left-cards-bottom-card"></div>
                    </div>

                    <div class="ff-cc-middle-cards">
                        <div class="ff-cc-cards-card"></div>
                    </div>


                    <div class="fm-cc-right-cards">
                        <div class="fm-right-cards-top-card"></div>
                        <div class="fm-right-cards-right-card"></div>
                        <div class="fm-right-cards-bottom-card"></div>
                        <div class="fm-right-cards-last-card"></div>
                    </div>
                    
                </div>

                <div class="fm-cc-sub">
                    <h1 class="fm-cc-sub-h1">
                        Flutter 为软件开发行业带来了革新：只要一套代码库，即可构建、测试和发布适用于移动、Web、桌面和嵌入式平台的精美应用。
                    </h1>
                    <div href="" class="fm-cc-sub-start">
                        <a href="" class="fm-cc-sub-start-a">开始使用</a>
                    </div>
                </div>
            </article>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'flutterApge',

  setup() {
    return {
        headerBox: ['平台','生态','案例','文档'],

    }
  }
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.flutter-header {
    position: fixed;
    width: 100%;
}

.fh-contains {
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 86px;
}

.fh-logo {
    flex: 1;
}

.fh-list-ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.fh-list-li {
    display: inline-block;
    padding: 13px 16px;
    margin-left: 8px;
    font-size: 14px;
    font-weight: 700;
}

.fh-list-a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
}

.fh-search {
    padding: 0 24px;
}

.fh-search-img {
    height: 1rem;
}

.fh-stu-a {
    text-decoration: none;
    color: #0468d7;
    background: #fff;
    height: 40px;
    display: inline-block;
    padding: 0 32px;
    text-align: center;
    line-height: 40px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: bold;
}


.fm-create {
    background-color: #1a68d3;
    background-image: radial-gradient(ellipse at bottom,#1a68d3 5%,transparent 60%),linear-gradient(136deg,transparent,#71c7ee 290%),linear-gradient(115deg,#9d9af1,transparent 40%),linear-gradient(180deg,transparent 0,#1a68d3 70%),radial-gradient(ellipse at -70% -180%,transparent 80%,#71c7ee 0),radial-gradient(ellipse at bottom,#1a68d3 40%,transparent 80%),radial-gradient(ellipse at 5% 340%,transparent 80%,#bfc2f4 0);
    padding-top: 168px;
    display: inline-block;
    width: 100%;
    padding-bottom: 112px;
}

.fm-cc-gallery {
    display: grid;
    grid-template-columns: 1fr 0.7fr 1fr;
}

.fm-cc-left-cards {
    position: relative;
    top: 100px;
}

.fm-left-cards-top-card {
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/5932d4e90754eb6996bb.jpg);
    width: 525px;
    height: 296px;
    background-position: 23%;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 10px;
}


.fm-left-cards-right-card {
    width: 201px;
    height: 296px;
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/26f33d7afbfcafacaa73.jpg);
    background-size: cover;
    position: absolute;
    right: 0;
    top: 318px;
    border-radius: 10px;
}

.fm-left-cards-bottom-card {
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/42b50a45c3cfd815e2aa.png);
    width: 201px;
    height: 269px;
    background-size: cover;
    position: absolute;
    top: 430px;
    right: 218px;
    border-radius: 10px;
}

.ff-cc-middle-cards {
    padding: 0 32px;
    height: 900px;
}

.ff-cc-cards-card {
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/90e34daecca082eb9b28.png);
    width: 368px;
    height: 764px;
    background-size: cover;
}


.fm-cc-right-cards {
    position: relative;
    top: 100px;
    overflow: hidden;
}


.fm-right-cards-top-card {
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/7c827ed46aa7efe0109b.png);
    width: 201px;
    height: 296px;
    border-radius: 10px;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
}


.fm-right-cards-right-card {
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/4e15fea30ba9d8a14208.png);
    width: 482px;
    height: 296px;
    background-size: cover;
    position: absolute;
    top: 124px;
    left: 216px;
    border-radius: 10px;
}


.fm-right-cards-bottom-card {
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/b8bd15d096f0557123b1.jpg);
    width: 201px;
    height: 296px;
    border-radius: 10px;
    background-size: cover;
    position: absolute;
    top: 316px;
    left: 0;
}

.fm-right-cards-last-card {
    background-image: url(https://files.flutter-io.cn/flutter-cn/landing/389ff8f9e4d6becae73a.png);
    width: 201px;
    height: 296px;
    border-radius: 10px;
    background-size: cover;
    position: absolute;
    top: 440px;
    left: 216px;
}

.fm-cc-title-h1 {
    margin-top: 0;
    margin-bottom: 80px;
    font-size: 60px;
    text-align: center;
    color: #fff;
}

.fm-cc-sub-h1 {
    text-align: center;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    margin: 0 auto 40px;
    max-width: 880px;
}


.fm-cc-sub-start {
    text-align: center;
}

.fm-cc-sub-start-a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: #0468d7;
    background-color: #fff;
    padding: 0 32px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    border-radius: 24px;
}

</style>
