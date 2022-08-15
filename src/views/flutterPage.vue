<template>
    <header class="flutter-header" :class="{'fh-hidden': navHidden,'fh-show':navMiddleShow}">
        <section class="fh-s">
            <article class="fh-contains" :class="{'fh-middle-contains': navMiddleShow}">
                <div class="fh-logo">
                    <a href="" class="fh-logo-a">
                        <img 
                        src="https://files.flutter-io.cn/flutter-cn/landing/ec64036b4eacc9f3fd73.svg" 
                        alt="" 
                        class="fh-logo-img" 
                        v-show="!navMiddleShow"
                        />
                        <img 
                        src="https://files.flutter-io.cn/images/branding/flutterlogo/flutter-cn-logo.png" 
                        alt="" 
                        class="fh-logo-img fh-logo-middle-img" 
                        v-show="navMiddleShow" 
                        />
                    </a>
                </div>
                <div class="fh-list">
                    <ul class="fh-list-ul">
                        <li class="fh-list-li" v-for="(item,index) in headerBox" :key="index">
                            <a href="" class="fh-list-a" :class="{'fh-list-middle-a': navMiddleShow}">{{item.title}}</a>
                            <sub-nav :list="item.list" />
                        </li>
                    </ul>
                </div>
                <div class="fh-search">
                    <img src="../assets/search.svg" alt="" class="fh-search-img" v-show="navMiddleShow" />
                    <img src="../assets/search-white.svg" alt="" class="fh-search-img" v-show="!navMiddleShow" />
                </div>
                <div class="fh-start-to-use">
                    <a href="" class="fh-stu-a" :class="{'fh-stu-middle-a':navMiddleShow}">开始使用</a>
                </div>
            </article>
        </section>
    </header>

    <main class="flutter-main" v-sc="handleTopNav">
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

        <!-- 小喇叭 -->
        <section class="broadcast">
            <article class="b-contains">
                <div class="b-logo">
                    <img src="https://files.flutter-io.cn/flutter-cn/landing/a40ceb6e5d342207de7b.png" alt="" class="b-img" />
                </div>
                <div class="b-contents">
                    <a class="b-c-p">
                        回顾 Flutter 在本次 I/O 上的发布内容
                        <img src="../assets/arrow.svg" alt="" class="b-c-a">
                    </a>
                </div>
            </article>
        </section>

        <!-- bar 切换 -->
        <section class="switch" >
            <article class="switch-contains">
                <div class="switch-bar">
                    <h1 class="switch-bar-h1">Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用。</h1>
                    <ul class="sb-ul">
                        <li 
                        class="sb-li" 
                        :class="{'sb-active': action === barActive.Fast}"  
                        @click="handleActive($event,barActive.Fast)"
                        >
                        快速
                        </li>
                        <li 
                        class="sb-li" 
                        :class="{'sb-active': action === barActive.Productive}" 
                        @click="handleActive($event,barActive.Productive)"
                        >
                        高效
                        </li>
                        <li 
                        class="sb-li" 
                        :class="{'sb-active': action === barActive.Flexible}" 
                        @click="handleActive($event,barActive.Flexible)"
                        >
                        灵活
                        </li>
                    </ul>
                </div>

                <!-- video 播放 -->
                <div class="switch-content">
                    <div class="sc-box" v-for="(item, index) in barBox" :key="index" v-show="action === index">
                        <div class="sc-video">
                            <video muted autoplay loop class="sc-video-content" :src="item.src"></video>
                        </div>
                        <div class="sc-text">
                            <h1 class="sc-t-h1" :style="{color: item.color}">{{item.title}}</h1>
                            <p class="sc-t-p">
                                {{item.sub}}
                            </p>
                            <a href="" class="sc-btn-a">在 DartPad 中尝试</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <!-- 多平台 -->
        <section class="muti">
            <article class="muti-contains" :class="{'muti-c-re' : index === 1}" v-for="(item,index) in mutiBox" :key="index">
                <div class="muti-left" :class="{'muti-left-re' : index === 1}">
                    <p class="ml-color-p" :style="{color: item.color}">{{item.colorText}}</p>
                    <h1 class="ml-title">{{item.title}}</h1>
                    <p class="ml-sub">{{item.sub}}</p>
                    <a href="" class="ml-a">{{item.btn}}</a>
                </div>
                <div class="muti-right">
                    <img :src="item.src" alt="" class="mr-img">
                </div>
            </article>
        </section>

        <!-- 开发者故事 -->
        <section class="dev">
            <article class="dev-contains">
                <div class="dc-left">
                    <h2 class="dc-h2">开发者成功故事</h2>
                    <p class="dc-p">学习 GPay 团队如何使用 Flutter 改变移动支付格局</p>
                    <p class="dc-more">
                        <a href="" class="dc-more-a">
                            了解更多 
                            <img src="../assets/arrow-black.svg" alt="" class="b-c-a">
                        </a>
                    </p>
                </div>
                <div class="dc-right">
                    <img src="https://files.flutter-io.cn/flutter-cn/landing/17b428191082bb916954.png" alt="" class="dc-right-img">
                </div>
            </article>
        </section>

        <!-- 社区挂墙图 -->
        <section class="community">
            <article class="community-contains">
                <div class="cc-pic-layout">
                    <div class="cc-pic">
                        <div 
                        class="cc-item" :class="{
                            'cc-item-plus': index === 1 || index === 5,
                            'cc-item-div': index === 2 || index === 4,
                            'cc-item-middle': index === 3
                        }" 
                        v-for="(item,index) in communityPic" 
                        :key="index"
                        >
                            <div class="cc-item-box" v-for="(subItem,subIndex) in item" :key="subIndex">
                                <img :src="subItem" alt="" class="cc-item-box-img">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cc-text">
                    <p class="cc-text-tip-title">全球性的开源社区</p>
                    <h1 class="cc-text-title">
                        由 Google 支持
                        <br>
                        向所有人开放
                    </h1>
                    <p class="cc-text-sub-p">
                        Flutter 框架开源并公开协作，pub.dev 平台构建了统一和丰富的插件生态，来社区，一定能找到你想要的。
                    </p>
                    <a href="" class="cc-text-suc-a">成功故事</a>
                    <a href="" class="cc-text-join-a">
                        加入社区
                        <img src="../assets/arrow-black.svg" alt="" class="b-c-a" />
                    </a>
                </div>
            </article>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref, } from 'vue';
import subNav from '../components/FlutterPageComponent/subNav.vue'

export default defineComponent({
  name: 'flutterApge',
  components: {
    subNav,
  },
  setup() {


    // bar 切换时样式更改
    enum barActive {
        Fast,
        Productive,
        Flexible,
    }
    // 初始化action值
    let action = ref<barActive>(barActive.Fast);
    function handleActive(e:Event,en: barActive) {
        switch(en) {
            case barActive.Fast:
                action.value = barActive.Fast;
                break;
            case barActive.Productive:
                action.value = barActive.Productive;
                break;
            case barActive.Flexible:
                action.value = barActive.Flexible;
                break;
        }
    }


    // 处理导航栏显示或隐藏
    let navHidden = ref(false);
    let navMiddleShow = ref(false);
    function handleTopNav(event: Element) {

        let top = event.getBoundingClientRect().top;
        // console.log(top)
        if(top < -85 && navHidden.value === false) {
            navHidden.value = true;
        }
        if(top > -85 && navHidden.value === true) {
            navHidden.value = false;
        }

        // 内容区导航栏
        if(top < -1500 && navMiddleShow.value === false) {
            navMiddleShow.value = true
        }

        if(top > -1500 && navMiddleShow.value === true) {
            navMiddleShow.value = false
        }
    }


    return {
        headerBox: [
            {title: '平台',list: ['移动平台','Web 平台','桌面平台','嵌入式平台']},
            {title: '生态',list: ['学习资源','Flutter Favorite 项目','使用 Package','盈利方式','游戏开发']},
            {title: '案例',list: ['社区','活动','文化']},
            {title: '文档',list: ['官方博文','IDE 集成','热重载','性能优化','安装 Flutter','开发者工具','实用教程','社区教程']}
            ],

        barBox:[
            {
                title: '快速', 
                color: '#14c2ad', 
                src:'https://files.flutter-io.cn/flutter-cn/landing/029113ae2cbbcf9493fe.mp4', 
                sub: 'Flutter 代码可以直接编译成 ARM 或 Intel 平台的机器代码，以及 JavaScript 代码，确保了 Flutter 应用能够拥有原生平台的性能表现。',
            },
            {
                title: '高效', 
                color: '#833ef2',
                src: 'https://files.flutter-io.cn/flutter-cn/landing/31e54d4c95600ffb3a77.mp4',
                sub: '使用热重载 (Hot Reload) 快速构建和迭代你的产品，更新代码后即刻看到变化，也不会丢失应用状态。',
            },
            {
                title: '灵活', 
                color: '#f25d50',
                src: 'https://files.flutter-io.cn/flutter-cn/landing/80b7a7ee6bbad2d2d7f8.mp4',
                sub: '屏幕上的每个像素都由你来把握，尽情去创造不被定义、不受局限、彰显品牌的完美体验吧，这个舞台专属于你。'
            },
        ],
        mutiBox: [
            {
                colorText: '多平台支持',
                title: '触达每个屏幕前的你的用户',
                sub: '部署到多种设备，只需要一份代码库，支持移动、网页、桌面和嵌入式设备。',
                src: 'https://files.flutter-io.cn/flutter-cn/landing/ed2e069ee37807f5975a.jpg',
                color: '#13b9fd',
                btn: '查看支持的设备平台'
            },
            {
                colorText: '开发体验',
                title: '革新性的转变',
                sub: '在工程中可以使用插件、自动化测试、开发者工具以及任何可以用来帮助构建高质量应用的工具。',
                src: 'https://files.flutter-io.cn/flutter-cn/landing/75c5b74c32dfd7b7e8f3.jpg',
                color: '#14c2ad',
                btn: '使用 Flutter 开发应用'
            },
            {
                colorText: '稳定可依赖',
                title: '被多数人信赖',
                sub: 'Flutter 由 Google 支持被并广泛使用，全球性的开发者社区广泛参与和维护，并得到众多世界知名品牌的信任。',
                src: '	https://files.flutter-io.cn/flutter-cn/landing/3461c6a5b33c339001c5.jpg',
                color: '#f25d50',
                btn: '探索 Flutter 生态'
            },
        ],

        communityPic: [
            [
                'https://files.flutter-io.cn/flutter-cn/landing/026e9dc31ddab22dde07.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/c1000ff9421405743627.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/65e30624efb7a782550a.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/f777219d6581e15d8eeb.svg',
            ],
            [
                'https://files.flutter-io.cn/flutter-cn/landing/def11a7e7d20e91d5ef9.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/8e2858e92284b9d64bc9.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/d10d50462c35626a2ed8.svg',
            ],
            [
                'https://files.flutter-io.cn/flutter-cn/landing/82de7f0e24cb515bda86.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/f3e315ddcd534a574bb5.svg',
            ],
            [
                'https://files.flutter-io.cn/flutter-cn/landing/0b591100c77c7f332b7f.svg',
            ],
            [
                'https://files.flutter-io.cn/flutter-cn/landing/0935a9aa643a1a19b3cd.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/6769550706195145726c.svg',
            ],
            [
                'https://files.flutter-io.cn/flutter-cn/landing/a95814af82f794458f82.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/b69d05d69cd668df2f8c.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/755432d87de85ced1687.svg',
            ],
            [
                'https://files.flutter-io.cn/flutter-cn/landing/3d2c4bdcf7c2b402aaf8.png',
                'https://files.flutter-io.cn/flutter-cn/landing/05719422f9c40930b2e6.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/b2f75154dc7faecd4e47.svg',
                'https://files.flutter-io.cn/flutter-cn/landing/d67e0d9ef41c618324b3.svg'
            ]
        ],
        // 处理导航栏显示或隐藏
        handleTopNav,
        navHidden,
        navMiddleShow,
        handleActive,
        barActive,
        action,
        // actionObject,
        // barBox,
    }
  },
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.flutter-header {
    position: fixed;
    width: 100%;
    transition: transform 0.3s;


    // 在同级别中的三大元素里面（header main footer），我们设置header的层级最高
    // 这样可以保证二级下拉菜单不会被后面的内容区和尾部区内容覆盖遮挡住
    z-index: 1;
}

.fh-contains {
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 86px;
}
.fh-middle-contains {
    box-shadow: 0 0 6px #ccc;
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
    padding: 10px 22px;
    margin-left: 8px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 24px;
    position: relative;
    & > :not(a) {
        display: none;
    }
}

.fh-list-li:hover {
    background-color: #fafafa26;
    & > :not(a) {
        display: block;
    }
}

.fh-list-a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
}
.fh-list-middle-a {
    color: #4a4a4a
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

.fh-stu-middle-a {
    background-color: #0468d7;
    color: #fff;
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
    animation: left-animate 0.9s ease-in-out;
}

@keyframes left-animate {
    0% {top: 600px; opacity: 0;}
    100% {top: 100px; opacity: 1;}
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
    animation: middle-animate 0.6s ease-in-out;
}

@keyframes middle-animate {
    0% {transform: translateY(600px); opacity: 0;}
    100% {transform: translateY(0); opacity: 1;}
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
    animation: right-animate 1s ease-in-out;
}

@keyframes right-animate {
    0% {top: 600px; opacity: 0;}
    100% {top: 100px; opacity: 1;}
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

.fm-cc-title {
    position: relative;
    animation: title-animate 0.3s ease-in-out;
}

@keyframes title-animate {
    0% {top: 20px; opacity: 0;}
    100% {top: 0; opacity: 1;}
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

.fh-hidden {
    transform: translateY(-86px);
    transition: transform 0.3s;
}
.fh-show {
    transform: translateY(0);
    transition: transform 0.3s;
    background: #fff;
    color: #4a4a4a;
}


.broadcast {
    display: inline-block;
    width: 100%;
}

.b-contains {
    background: #0468d7;
    max-width: 70vw;
    margin: 50px auto 70px;
    padding: 24px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 5px #ccc;
}

.b-img {
    width: 50px;
    margin-right: 24px;
}

.b-contents {
    cursor: pointer;
}

.b-c-a {
    height: 12px;
}

.switch-bar {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.sb-ul {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 24px;
    background: #f8f9fa;
    margin-bottom: 30px;
}

.sb-li {
    display: inline-block;
    width: 165px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: #0468d7;
    cursor: pointer;
}

.sb-li:hover {
    background-color: #e8eaed;
    color: #4a4a4a;
    border-radius: 24px;
}

.sb-li:active {
    background: #0468d7;
    border-radius: 24px;
}

.sb-active {
    background-color: #0468d7 !important;
    border-radius: 24px;
    color: #fff !important;
    transition: all 0.5s;
}

.sc-box {
    display: grid;
    grid-template-columns: 1fr 394px;
    position: relative;
    animation: sc-box-animate 0.3s ease-in-out;
}

@keyframes sc-box-animate {
    0% {top: 100px; opacity: 0;}
    100% {top: 0; opacity: 1;}
}
.sc-video {
    position: relative;
    left: -60px;
}


.sc-video-content {
    width: 125%;
    mix-blend-mode: darken;
}

.sc-text {
    position: relative;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sc-t-h1 {
    font-size: 36px;
    color: #14c2ad;
    margin-top: 0;
    margin-bottom: 24px;
}

.sc-t-p {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 40px;
}

.sc-btn-a {
    border: 1px solid #0468d7;
    display: inline-block;
    align-self: start;
    padding: 0 32px;
    height: 40px;
    line-height: 40px;
    border-radius: 24px;
    color: #0468d7;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
}

.fh-logo-middle-img {
    width: 126px;  
}

.switch-bar-h1 {
    font-size: 32px;
    font-weight: 400;
    margin-top: 0;
}

.switch-contains {
    width: 70vw;
    margin: 0 auto;
}

.muti-contains {
    width: 70vw;
    padding: 50px 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 40%;
    align-items: center;
}

.muti-left {
    padding: 0 140px 0 50px;
}

.ml-color-p {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 20px;
    color: #13b9fd;
}

.ml-title {
    font-size: 60px;
    line-height: 1;
    margin: 0;
    margin-bottom: 32px;
}

.ml-sub {
    margin-bottom: 32px;
    margin-top: 0;
    font-size: 20px;
    line-height: 1.4;
    color: #4a4a4a;
}

.ml-a {
    height: 40px;
    padding: 0 32px;
    display: inline-block;
    line-height: 40px;
    text-decoration: none;
    color: #0468d7;
    border: 1px solid #0468d7;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 700;
}

.mr-img {
    max-width: 600px;
    width: 100%;
}

.muti-c-re {
    grid-template-columns: 40% 1fr;
}

.muti-left-re {
    grid-row: 1/2;
    grid-column: 2/3;
    padding: 0 50px 0 140px;
}

.dev-contains {
    width: 70vw;
    margin: 70px auto;
    background: linear-gradient(45deg, #ff8485, #f9eac6);
    min-height: 315px;
    border-radius: 40px;
    display: grid;
    grid-template-columns: 1fr minmax(0,441px);
    position: relative;
}

.dc-left {
    padding: 64px 0 64px 64px;
}

.dc-p {
    font-size: 36px;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 24px;
    color: #000;
}

.dc-more-a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    font-weight: 700;
}


.dc-right-img {
    height: 385px;
    position: absolute;
    right: 0;
    bottom: 0;
}

.dc-h2 {
    margin: 0;
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 700;
    color: #000;
    line-height: 1.2;
    letter-spacing: -.005rem;
}


.community-contains {
    width: 70vw;
    height: 900px;
    margin: 0 auto;
    padding-top: 98px;
}

.cc-pic-layout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cc-pic {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 356px 1fr 1fr 1fr;
    gap: 24px;
    position: relative;
}

.cc-item {
    position: relative;
}


.cc-item-box {
    width: 163px;
    height: 163px;
    padding: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 16px #0000001a;
    margin-bottom: 24px;
    box-sizing: border-box;
    border-radius: 8px;
}


.cc-item-box-img {
    height: auto;
    max-width: 100%;
}

.cc-item-plus {
    top: -48px;
}

.cc-item-div {
    top: 60px;
}
.cc-item-middle {
    & > div {
        width: 356px;
        height: 356px;
    }
}

.cc-text {
    text-align: center;
    position: relative;
    top: -195px;
}

.cc-text-tip-title {
    font-size: 20px;
    margin: 0;
    margin-bottom: 20px;
    color: #4a4a4a;
    font-weight: 700;
    letter-spacing: -.005rem;
    line-height: 1.2;
}

.cc-text-title {
    font-size: 60px;
    line-height: 1;
    color: #000;
    letter-spacing: -.005rem;
    margin: 0;
    margin-bottom: 40px;
}

.cc-text-sub-p {
    font-size: 20px;
    max-width: 500px;
    margin: 0 auto 30px;
    color: #4a4a4a;
    line-height: 1.4;
}


.cc-text-suc-a {
    height: 40px;
    padding: 0 32px;
    display: inline-block;
    line-height: 40px;
    text-decoration: none;
    color: #0468d7;
    border: 1px solid #0468d7;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 700;
}

.cc-text-join-a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    margin-left: 24px;
}

</style>
