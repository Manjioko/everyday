<template>
    <header class="ruby-header">
        <section class="logo-search">
            <article class="header-contains">
                <div class="header-logo">
                    <a href="/ruby" class="header-logo">
                        <img src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="" class="header-img">
                    </a>
                    <a href="/ruby" class="hl-a">
                        <h1 class="hl-h1">Ruby</h1>
                        <h2 class="hl-h2">程序员最好的朋友</h2>
                    </a>
                </div>
                <div class="header-search">
                    <input type="text" class="hs-input" />
                    <a href="/rust" class="hs-btn">搜索</a>
                </div>
            </article>
            <article class="header-nav">
                <div class="hn-list">
                    <ul class="hn-ul">
                        <li class="hn-li" v-for="(item,index) in navBox" :key="index">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    </header>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'RubyView',

  setup() {

    return {
        navBox: ['下载','文档','代码库','社区','新闻','安全','关于 Ruby'],
    }
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.logo-search {
    max-width: 980px;
    margin: 0 auto;
    padding: 30px 24px 24px 24px;
}

.header-contains {
    display: flex;
    justify-content: space-between;
}

.hl-a {
    display: inline-block;
    text-decoration: none;
    color: black;
    margin-left: 12px;
}

.hl-h1 {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
    line-height: 28px;
}

.hl-h2 {
    margin: 5px 0 0;
    font-size: 14px;
    color: #585450;
    font-weight: 500;
    letter-spacing: 0.1rem;
}

.hs-input {
    width: 180px;
    padding: 6px;
    border: 1px solid #b0b0a4;
    border-radius: 0.25rem;
    background: url(https://www.google.com/coop/intl/zh_cn/images/google_custom_search_watermark.gif) left no-repeat;
}

.hs-btn {
    text-decoration: none;
    background: #ebebe4;
    padding: 7px 12px;
    margin-left: 6px;
    border-radius: 0.25rem;
    font-size: 13px;
    line-height: 13px;
    color: #585450;
    box-shadow: 0 2px 0 #c2c2b8;
}

.hn-ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 10px;
    background: #585450;
    border-top: 5px solid #CC342D;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
}

.hn-li {
    padding: 0 10px;
    color: white;
    cursor: pointer;
}

.header-search {
    display: flex;
    align-items: center;
}

.header-logo {
    display: inline-block;
    padding: 8px 0;
}

</style>
