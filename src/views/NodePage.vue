<template>
    <header class="node-header">
        <section class="nh-s">
            <article class="nh-contains">
                <div class="nh-logo">
                    <img src="https://nodejs.org/static/images/logo.svg" alt="" class="nh-logo-img">
                </div>
                <div class="nh-nav">
                    <ul class="nh-nav-ul">
                        <li class="nh-nav-li" v-for="(item, index) in navBox" :key="index">
                            <a href="" class="nh-nav-a">{{item}}</a>
                        </li>
                    </ul>
                </div>
                <div class="nh-trans">
                    <div class="nh-night"></div>
                    <div class="nh-t"></div>
                </div>
            </article>
        </section>
    </header>

    <main class="node-main">
        <section class="nm-s">
            <article class="nm-contains">
                <h3 class="nm-h3">Node.js® 是一个基于 <a href="" class="nm-a">Chrome V8 引擎</a> 的 JavaScript 运行时环境。</h3>
                <p class="nm-patch-p"><a href="" class="nm-patch-a">Node.js 14，16 和 18 版本的安全补丁已发布</a></p>
                <h1 class="nm-h1">下载平台为： Windows (x64)</h1>

                <div class="nm-list">
                    <div class="nm-box" v-for="(item,index) in greenBox" :key="index">
                        <div class="nm-green-sub">
                            <h1 class="nm-g-s-h1">{{item.title}}</h1>
                            <p class="nm-g-s-p">{{item.sub}}</p>
                        </div>
                        <ul class="nm-g-bottom-ul">
                            <li class="nm-g-bottom-li" v-for="(subItem,subIndex) in item.list" :key="subIndex">
                                <a href="" class="nm-g-b-a">{{subItem}}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <h2 class="nm-tip">可参考 <a href="" class="nm-tip-a"> 长期维护版（LTS）日程</a></h2>

                
            </article>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
    name: 'NodePage',

    setup() {


        return {
            navBox: [
                '首页', '关于', '下载', '文档', '加入我们', '安全', '相关认证', '新闻'
            ],
            greenBox: [
                {title:'16.16.0 长期维护版',sub:'推荐多数用户使用',list:['其它下载','更新日志','API 文档']},
                {title:'18.7.0 最新尝鲜版',sub:'含最新功能',list:['其它下载','更新日志','API 文档']},
            ]
        }
    }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.nh-s {
    background-color: #333;
    position: relative;
}

.nh-contains {
    text-align: center;
    max-width: 980px;
    margin: 0 auto;
}

.nh-logo-img {
    width: 122px;
}

.nh-nav-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1;
    justify-content: center;
}

.nh-nav-li {
    display: inline-block;
    padding-bottom: 12px;
    position: relative;
}

.nh-nav-li:not(:first-child)::before {
    content: "|";
    color: #999;
    padding: 0 0.3em 0 0.1em;
}

.nh-nav-li:first-child::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 13px solid #333;
    border-right: 13px solid transparent;
    border-left: 13px solid transparent;
    position: absolute;
    bottom: -13px;
    left: 25%;
}

.nh-nav-a {
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    line-height: 20px;
    padding: 0 8px;
}

.nh-trans {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
}

.nh-night {
    background: transparent url(https://nodejs.org/static/images/dark-mode.svg) no-repeat;
    padding: 12px;
    align-self: center;
}

.nh-t {
    background: transparent url(../assets/translation.svg) no-repeat;
    padding: 15px;
    margin: 12px;
}

.nm-contains {
    max-width: 735px;
    margin: 0 auto;
    text-align: center;
    padding: 30px 20px;
}

.nm-h3 {
    font-size: 1rem;
    color: #333;
}

.nm-patch-p {
    font-size: 130%;
    padding: 5px 15px;
    background-color: #eaf5e9;
}

.nm-a:hover {
    background: #43853d;
    color: #fff;
}

.nm-a {
    text-decoration: none;
    color: #43853d;
    border-radius: 2px;
}

.nm-patch-a {
    text-decoration: none;
    color: #026e00;
    padding: 2px;
}

.nm-patch-a:hover {
    color: #fff;
    background: #026e00;
    border-radius: 2px;
}

.nm-h1 {
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 400;
}

.nm-list {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 26px;
}
.nm-green-sub {
    background-color: #026e00;
    margin: 10px 4px;
    padding: 0.2rem 0.6rem;
    border-radius: 2px;
    color: #fff;
}

.nm-g-s-h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 400;
}

.nm-g-s-p {
    margin: 5px;
}

.nm-g-bottom-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

.nm-g-bottom-li {
    display: inline-block;
    font-size: 0.9rem;
}

.nm-g-bottom-li:not(:first-child)::before {
    content: "|";
    padding: 10px;
}


.nm-tip {
    font-weight: 500;
    font-size: 1.5rem;
}

.nm-tip-a {
    color: #43853d;
    text-decoration: none;
}

.nm-g-b-a {
    color: #51744e;
    text-decoration: none;
}
</style>
