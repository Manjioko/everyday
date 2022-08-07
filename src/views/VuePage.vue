<template>

    <!-- 头部 -->
    <header class="vue-header">
        <section class="vue-header-tip">
            <p class="vht-p">
                您在浏览的是 v2.x 及更早版本的文档。v3.x 的文档<a href=""><strong>在这里。</strong></a>
            </p>
        </section>
        <section class="vue-header-nav">
            <article class="vhn-contains">
                <div class="vhn-logo-text">
                    <a href="" class="vhnlt-a">Vue.js</a>
                </div>
                <div class="vhn-search">
                    <input type="text" class="vhn-search-input" />
                    <ul class="vhns-ul">
                        <li class="vhns-li" v-for="(item, index) in navBox" :key="index">
                            <a href="" class="vhnsl-a" :class="{ 'vhnsl-a-not-child': (!item.child) }">{{ item.name }}</a>
                            <!-- 黑色小三角 -->
                            <span class="vhnsl-t" v-show="item.child"></span>
                            <div class="vhns-child" v-show="item.child">
                                <!-- 这部分是有二级菜单的 -->
                                <div class="vhns-has-list" v-if="item.list">
                                    <div class="vhns-child-box" v-for="(subItem, subIndex) in item.child"
                                        :key="subIndex">
                                        <span class="vhns-child-box-title" v-show="subItem.list">{{ subItem.name }}</span>
                                        <ul class="vhns-child-ul">
                                            <li class="vhns-child-li" v-for="(threeItem, threeIndex) in subItem.list"
                                                :key="threeIndex">
                                                <a href="">{{ threeItem }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- 这部分只有一级菜单 -->
                                <div class="vhns-not-list" v-if="!item.list">
                                    <ul class="vhns-not-list-ul">
                                        <li class="vhns-not-list-li" v-for="(subItem, subIndex) in item.child"
                                            :key="subIndex">
                                            <a href="">{{ subItem.name }}</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    </header>

    <!-- 内容区 -->
    <main>
        <section class="frame">
            <article class="frame-contains">
                <div class="frame-logo">
                    <img src="https://cn.vuejs.org/images/logo.svg" alt="" class="fl-img">
                </div>
                <div class="frame-script">
                    <h1 class="frame-script-h1">渐进式<br />JavaScript 框架</h1>
                    <p class="frame-script-p">
                        <a href="" class="frame-script-a-why">
                            <img src="../assets/vue_why.svg" alt="" class="fsaw-img">
                            why vue.js?
                        </a>
                        <a href="" class="frame-script-a-start">起步</a>
                        <a href="" class="frame-script-a-github">
                            <img src="../assets/github.svg" alt="" class="fsag-img">
                            github
                        </a>
                    </p>
                </div>
            </article>
        </section>

        <!-- help -->
        <section class="help">
            <article class="help-contains">
                <p class="help-title">特别赞助</p>
                <div class="help-company">
                    <a href="" class="hc-h">
                        <img src="https://cn.vuejs.org/images/dcloud1.png" alt="" class="hc-h-img" />
                    </a>
                    <a href="" class="hc-x">
                        <img src="https://sponsors.vuejs.org/images/xitujuejinjishushequ.png" alt="" class="hc-x-img" />
                    </a>
                </div>

            </article>
        </section>

        <!-- descript -->
        <section class="descript">
            <article class="descript-contains">
                <div class="descript-box" v-for="(item, index) in descriptBox" :key="index">
                    <h3 class="db-title">{{ item.title }}</h3>
                    <p class="db-sub">{{ item.sub }}</p>
                </div>
            </article>
        </section>

        <!-- 赞助商 -->
        <section class="company" v-sc="cphandle" >
            <article class="company-contains">
                <div class="cc-all">
                    <h3 class="cc-title">Patreon 赞助商</h3>
                    <ul class="cc-ul">
                        <li class="cc-li" v-for="(item,index) in cpBox" :key="index">
                            <a href="" class="cc-a"><img :src="item" alt="" class="cc-img" :class="{'cc-gray-img':isGray}" /></a>
                        </li>
                    </ul>
                    <a href="" class="cc-be">成为赞助者</a>
                    <p class="cc-p">中国区视频托管赞助商</p>
                    <a href="" class="cc-youku">
                        <img src="https://cn.vuejs.org/images/youku.png" alt="" class="cc-youku-img" />
                    </a>
                </div>
            </article>
        </section>

        <!-- 订阅 -->
        <section class="subscribe">
            <article class="subscribe-contains">
                <h2 class="sc-title">订阅我们的周刊（英文）</h2>
                <div class="sc-input-list">
                    <input type="text" class="sc-input" placeholder="邮件地址">
                    <input type="submit" class="sc-submit" value="订阅">
                </div>
                <p class="sc-sub">你可以在 <a href="" class="sc-sub-a">news.vuejs.org</a> 翻阅往期的 issue,也可以收听 podcast。</p>
            </article>
        </section>
    </main>

    <footer>
        <section class="vue-footer">
            <article class="vf-contains">
                <div class="vf-logo">
                    <a href="" class="vf-logo-a">
                        <img src="../assets/github-light.svg" alt="" class="vf-logo-img" />
                    </a>
                    <a href="" class="vf-logo-a">
                        <img src="../assets/twitter.svg" alt="" class="vf-logo-img" />
                    </a>
                    <a href="" class="vf-logo-a">
                        <img src="../assets/mit.svg" alt="" class="vf-logo-img" />
                    </a>
                </div>
                <p class="vf-protocol">遵循 MIT 开源协议</p>
                <p class="vf-version">Copyright © 2014-2022 Evan You</p>
            </article>
        </section>
    </footer>
</template>

<script lang="ts">
import { defineComponent, ref, } from 'vue';

export default defineComponent({
    name: 'VuePage',


    setup() {


        // 赞助商变色
        let isGray = ref(false)
        function cphandle(e:Element) {
            let top = e.getBoundingClientRect().top
            if(top < 181) {
                isGray.value = true
            } else {
                isGray.value = false
            }

        }

        return {

            navBox: [
                {
                    name: '学习',
                    child: [
                        { name: '文档', list: ['教程', 'API', '风格指南', '示例', 'Cookbook'] },
                        { name: '视频教程', list: ['Vue Mastery(英文)', 'Vue School(英文)', 'DCloud教程'] },
                    ],
                    list: true,
                },
                {
                    name: '生态系统',
                    child: [
                        { name: '帮助', list: ['论坛', '聊天室', '聚会'] },
                        { name: '工具', list: ['Devtools', 'Vue CLI', 'Vue Loader'] },
                        { name: '核心插件', list: ['Vue Router', 'Vuex', 'Vue 服务端渲染'] },
                        { name: '信息', list: ['周刊', 'Roadmap', '活动', 'Twitter', '博客', '工作', 'DEV 社区'] }
                    ],
                    list: true,
                },
                {
                    name: '团队',
                    child: null,
                    list: false,
                },
                {
                    name: '资源列表',
                    child: [
                        { name: '合作伙伴', list: null },
                        { name: '主题', list: null },
                        { name: 'Awesome Vue', list: null },
                        { name: '浏览和 Vue 相关的包', list: null }
                    ],
                    list: false,
                },
                {
                    name: '支持Vue',
                    child: [
                        { name: '一次性赞助', list: null },
                        { name: '周期性赞助', list: null },
                        { name: '贴纸', list: null },
                        { name: '周边', list: null },
                        { name: 'T 恤商店', list: null }
                    ],
                    list: false,
                },

                {
                    name: '多语言',
                    child: [
                        { name: 'English', list: null },
                        { name: '日本語', list: null },
                        { name: 'Русский', list: null },
                        { name: '한국어', list: null },
                        { name: 'Português', list: null },
                        { name: 'Français', list: null },
                        { name: 'Tiếng Việt', list: null },
                        { name: 'Español', list: null },
                        { name: 'Bahasa Indonesia', list: null },
                    ],
                    list: false,
                },
                {
                    name: '参与翻译',
                    child: null,
                    list: false
                },
            ],

            descriptBox: [
                { title: '易用', sub: '已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！' },
                { title: '灵活', sub: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。' },
                { title: '高效', sub: '20kB min+gzip 运行大小超快虚拟 DOM最省心的优化' },
            ],
            cpBox: [
                'https://sponsors.vuejs.org/images/vuemastery.png',
                'https://sponsors.vuejs.org/images/vueschool.png',
                'https://sponsors.vuejs.org/images/vehikl.png',
                'https://sponsors.vuejs.org/images/passionate_people.png',
                'https://sponsors.vuejs.org/images/storyblok.png',
                'https://sponsors.vuejs.org/images/ionic.png?v2',
                'https://sponsors.vuejs.org/images/nuxt.png',
                'https://sponsors.vuejs.org/images/refurbed.png',
                'https://sponsors.vuejs.org/images/buttercms.svg',
                'https://sponsors.vuejs.org/images/sanofi.png',
                'https://sponsors.vuejs.org/images/codedict.svg',
                'https://sponsors.vuejs.org/images/vuejs_de_conf.svg',
                'https://sponsors.vuejs.org/images/laravel.png',
                'https://sponsors.vuejs.org/images/html_burger.png',
                'https://sponsors.vuejs.org/images/tidelift.png',
                'https://sponsors.vuejs.org/images/intygrate.png',
                'https://sponsors.vuejs.org/images/bacancy_technology.png',
                'https://sponsors.vuejs.org/images/y8.png',
                'https://sponsors.vuejs.org/images/devexpress.png',
                'https://sponsors.vuejs.org/images/fastcoding_inc.svg',
                'https://sponsors.vuejs.org/images/vpsserver_com.png',
                'https://sponsors.vuejs.org/images/line_corporation.png',
                'https://sponsors.vuejs.org/images/plaid__inc_.svg',
                'https://sponsors.vuejs.org/images/emq.png',
                'https://sponsors.vuejs.org/images/onyx_gaming_limited.svg',
                'https://sponsors.vuejs.org/images/lendio.png',
                'https://sponsors.vuejs.org/images/fen_tre_online_solutions.svg',
                'https://sponsors.vuejs.org/images/myetherwallet_inc.png',
                'https://sponsors.vuejs.org/images/barrage.png',
                'https://sponsors.vuejs.org/images/ant_design_vue.png',
                'https://sponsors.vuejs.org/images/lemon_law.png',
                'https://sponsors.vuejs.org/images/mqtt_x.png',
                'https://sponsors.vuejs.org/images/crisp.png',
                'https://sponsors.vuejs.org/images/cypress_io.svg',
                'https://sponsors.vuejs.org/images/handsontable___javascript_data_grid.svg',
                'https://sponsors.vuejs.org/images/1tool.png',
                'https://sponsors.vuejs.org/images/learnvue.png',
                'https://sponsors.vuejs.org/images/quickbooks_tool_hub.png',
            ],

            isGray,
            cphandle,
        }
    },

    directives: {
        sc: {
            mounted: (el,binding) => {
                if(typeof binding.value === 'function') {
                    let callback = binding.value.bind(null,el)
                    document.addEventListener('scroll',callback)
                }
            },
            unmounted:(el,binding) => {
                let callback = binding.value.bind(null,el)
                document.removeEventListener('scroll',callback)
            }
        }
    }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vue-header-tip {
    background-color: #42b983;
    text-align: center;
    font-size: 1rem;
}

.vht-p {
    padding: 10px 60px;
    margin: 0;
    display: inline-block;
    color: #d6ffec;
}

.vht-p>a {
    text-decoration: none;
    color: white;
}


.vhn-contains {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 10px 60px;
    box-sizing: border-box;
}

.vhnlt-a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #273849;
    line-height: 40px;
    font-weight: 500;
}

.vhn-search {
    display: flex;
    align-items: center;
}

.vhn-search-input {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    border-radius: 15px;
    border: 1px solid #e3e3e3;
    outline: none;
    padding: 0 15px 0 30px;
    background: #fff url(https://cn.vuejs.org/images/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle;
}

.vhns-ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: 1.5rem;
    z-index: 1;
}

.vhnsl-a {
    text-decoration: none;
    font-size: 1rem;
    color: #304455;
}

.vhnsl-a-not-child:hover {
    border-bottom: 3px solid #42b983;
}

.vhnsl-t {
    display: inline-block;
    margin: 0 8px;
    width: 0;
    height: 0;
    border-top: 4px solid black;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    vertical-align: middle;
}

.vhns-li:hover {
    &>.vhns-child {
        display: block;
    }
}

.vhns-li {
    margin: 0 0.6rem;
    position: relative;
}

.vhns-child {
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: #ccc;
    border-radius: 4px;
    box-shadow: 0px 0px 2px #ccc;
    position: absolute;
    right: 0;
    display: none;
    white-space: nowrap;
}

.vhns-child-box {
    padding: 0.45rem 1.2rem;
    border-bottom: 1px solid #eee;
}

.vhns-child-notborder {
    border-bottom: none;
    padding: 0.45rem 1.2rem 0;
}

.vhns-child-box-title {
    color: #273849;
    font-weight: 600;
    margin: 0.45rem 0 0;
    line-height: 1.8rem;
}

.vhns-title-notlist {
    font-weight: 500;
}

.vhns-child-ul {
    list-style: none;
    padding: 0;
}

.vhns-child-li {
    line-height: 1.8rem;

    &>a {
        color: #354c63;
        text-decoration: none;
    }
}

.vhns-not-list {
    padding: 0.45rem 1.2rem;
}

.vhns-not-list-ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.vhns-not-list-li {
    line-height: 1.8rem;
}

.vhns-not-list-li>a {
    color: #354c63;
    text-decoration: none;
}

.fl-img {
    width: 215px;
    height: 215px;

    float: right;
    margin-right: 60px;
}

.frame-script-a-why {
    background-color: #4fc08d;
    padding: 0.75rem 2rem;
    position: relative;
    text-indent: 1.4rem;
    display: inline-block;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    border-radius: 2rem;
    margin: 1rem 0;
    letter-spacing: 0.1rem;
}

.fsaw-img {
    width: 2rem;
    position: absolute;
    top: 0.35rem;
    left: 0.4rem;
}

.frame-script-a-start {
    padding: 0.75rem 2rem;
    color: #42b983;
    text-decoration: none;
    border: 1px solid #4fc08d;
    border-radius: 2rem;
    box-sizing: border-box;
    background-color: #fff;
    display: inline-block;
    min-width: 8rem;
    text-align: center;
    margin: 1rem 1%;
}

.frame-script-a-github {
    background-color: #f6f6f6;
    padding: 0.75rem 2rem;
    position: relative;
    letter-spacing: 0.1rem;
    min-width: 8rem;
    color: #4f5959;
    border-radius: 2rem;
    border-color: #f6f6f6;
    font-size: 1.5rem;
    text-decoration: none;
    text-indent: 1.4rem;
    display: inline-block;
    margin: 1rem 0;
}

.fsag-img {
    width: 2rem;
    position: absolute;
    top: 0.6rem;
    left: 0.4rem;
}

.frame-logo {
    display: inline-block;
    width: 39%;
    vertical-align: top;
}

.frame-script {
    display: inline-block;
    width: 61%;
    vertical-align: top;
}

.frame-script-h1 {
    margin: 0;
    font-size: 3.2rem;
    font-weight: 300;
    color: #273849;
}

.frame-contains {
    padding: 40px 40px 30px;
}

.help-contains {
    text-align: center;
    padding-bottom: 30px;
}

.help-title {
    margin: 0;
    font-weight: 600;
}

.hc-h {
    display: inline-block;
    margin: 10px 15px 0;
    vertical-align: middle;
}

.hc-h-img {
    height: 70px;
}

.hc-x {
    display: inline-block;
    margin: 10px 15px 0;
    vertical-align: middle;
}

.hc-x-img {
    height: 55px;
}

.descript-contains {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.descript-box {
    text-align: center;
    padding: 0 2rem;
}

.db-title {
    margin: 0;
    font-size: 1.5rem;
    color: #42b983;
    padding: 0.5rem 0;
}

.db-sub {
    color: #4f5959;
}
.cc-img {
    width: 160px;
    max-height: 60px;
    object-fit: contain;
    transition: all 0.3s ease;
    filter: grayscale(100%);
    opacity: 0.66;
}

.cc-gray-img {
    filter: none;
    opacity: 1;
}

.company-contains {
    background-color: #f6f6f6;
    padding: 35px 40px 45px;
    text-align: center;
}

.cc-all {
    max-width: 700px;
    margin: 0 auto;
}
.cc-title {
    color: #999;
    margin: 0 0 10px;
}

.cc-ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.cc-a {
    display: inline-block;
    margin: 20px 15px 0;
    width: 160px;
}

.cc-be {
    margin-top: 40px;
    text-decoration: none;
    color: #42b983;
    font-size: 0.9rem;
    font-weight: 700;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
    padding: 0.75rem 2rem;
    border-radius: 2rem;
}

.cc-p {
    margin: 2.5rem 0 10px;
    font-weight: 600;
    color: #999;
    font-size: 1.17rem;
}

.cc-youku {
    margin: 20px 15px 0;
    display: inline-block;
}

.cc-youku-img {
    width: 120px;
}

.subscribe-contains {
    padding: 40px 20px 70px;
    text-align: center;
}

.sc-title {
    font-size: 1.17rem;
    font-weight: 600;
    color: #273849;
}

.sc-input-list {
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    box-sizing: border-box;
}

.sc-input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 80px 10px 20px;
    border: 1px solid #ccc;
    font-size: 16px;
    border-radius: 50px;
}

.sc-submit {
    position: absolute;
    padding: 4px 20px;
    height: calc(100% - 8px);
    right: 4px;
    top: 4px;
    cursor: pointer;
    background-color: #4fc08d;
    border: 1px solid #4fc08d;
    display: inline-block;
    color: #fff;
    font-size: 1.05rem;
    letter-spacing: 0.1rem;
    min-width: 8rem;
    border-radius: 2rem;
}

.subscribe-contains {
    padding: 40px 20px 70px;
    text-align: center;
}

.sc-sub {
    margin-top: 10px;
    word-spacing: 0.05rem;
}

.vf-contains {
    background-color: #475050;
    padding: 40px;
    text-align: center;
    color: #fff;
}

.vf-logo-a {
    margin: 1rem 5px;
    display: inline-block;
}

.vf-logo-img {
    width: 18px;
    height: 18px;
}

.vf-protocol {
    margin-bottom: 0;
}

.vf-version {
    margin-top: 5px;
}
</style>
