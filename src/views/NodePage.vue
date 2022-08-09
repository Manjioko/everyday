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
</style>
