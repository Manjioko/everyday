<template>

    <!-- 头部 -->
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

    <!-- 内容区 -->
    <main>
        <!-- 啥是ruby -->
        <section class="ruby-is">
            <article class="ruby-is-contains">
                <div class="ruby-is-left">
                    <div class="ruby-is-title">
                        <h1 class="ruby-is-h1">Ruby 是...</h1>
                        <p class="ruby-is-p">一门开源的动态编程语言，注重简洁和效率。Ruby 的句法优雅，读起来自然，写起来舒适。</p>
                    </div>
                    <div class="ruby-is-sub">
                        <a href="/ruby" class="ruby-is-download">下载 Ruby</a>
                        <span class="ruby-is-or">或</span>
                        <a href="/ruby" class="ruby-is-learn-more">了解更多</a>
                    </div>
                </div>
                <div class="ruby-is-right">
                    <figure class="ruby-is-figure">
                        <pre class="ruby-is-pre">
                            <code class="ruby-is-code">
    <span class="ruby-is-code-content"># The famous Hello World</span>
    <span class="ruby-is-code-content"># Program is trivial in</span>
    <span class="ruby-is-code-content"># Ruby. Superfluous:</span>
    <span class="ruby-is-code-content">#</span>
    <span class="ruby-is-code-content"># * A "main" method</span>
    <span class="ruby-is-code-content"># * Newline</span>
    <span class="ruby-is-code-content"># * Semicolons</span>
    <span class="ruby-is-code-content">#</span>
    <span class="ruby-is-code-var">puts </span><span class="ruby-is-code-str">"Hello World!"</span>
                            </code>
                        </pre>
                    </figure>
                </div>
            </article>
        </section>

        <!-- 版本 -->
        <section class="ruby-version">
            <article class="rv-contains">
                <div class="rv-left">
                    <div class="rv-left-box" v-for="(item,index)  in versionBox" :key="index">
                        <h3 class="rvlb-title">{{item.title}}</h3>
                        <h3 class="rvlb-sub">{{item.title}}。</h3>
                        <a href="" class="rvlb-read">阅读全文...</a>
                        <p class="rvlb-footer">{{item.sub}}</p>
                    </div>
                    <div class="rv-left-other">
                        <h3 class="rlo-title">其它新闻</h3>
                        <ul class="rlo-ul">
                            <li class="rlo-li" v-for="(item,index) in newBox" :key="index">
                                <a href="/ruby" class="rlo-a">{{item.title}}</a>
                                <p class="rvlb-footer">{{item.sub}}</p>
                            </li>
                        </ul>
                        <a href="/ruby" class="rlo-more-new">更多新闻...</a>
                    </div>
                </div>

                <div class="rv-right">
                    <div class="rvr-try">
                        <p class="rvr-try-p"><strong>试用，</strong>其实很简单！</p>
                        <a href="" class="rvr-try-a">在浏览器中试用Ruby(英文)</a>
                        <a href="" class="rvr-try-a">20分钟试用Ruby</a>
                        <a href="" class="rvr-try-a">从其它语言转到Ruby</a>
                    </div>
                    <div class="rvr-explore">
                        <p class="rvr-explore-p"><strong>探索</strong>新的世界</p>
                        <a href="" class="rvr-explore-a">文档</a>
                        <a href="" class="rvr-explore-a">学术研究</a>
                        <a href="" class="rvr-explore-a">代码库</a>
                        <a href="" class="rvr-explore-a">成功案例</a>
                    </div>
                    <div class="rvr-join">
                        <p class="rvr-join-title"><strong>加入</strong>友善及日益壮大的社区</p>
                        <p class="rvr-join-p"><a href="" class="rvrj-a">邮件列表：</a>联系喜爱Ruby的朋友</p>
                        <p class="rvr-join-p"><a href="" class="rvrj-a">用户组：</a>参与Ruby爱好者活动</p>
                        <p class="rvr-join-p"><a href="" class="rvrj-a">博客：</a>阅读Ruby相关的博客</p>
                        <p class="rvr-join-p"><a href="" class="rvrj-a">Ruby核心：</a>帮助开发Ruby语言</p>
                        <p class="rvr-join-p"><a href="" class="rvrj-a">问题跟踪：</a>报告或帮助解决Ruby的问题</p>
                    </div>
                    <div class="rvr-subscribe">
                        <p class="rvr-subscribe-p">订阅</p>
                        <a href="" class="rvrs-new">最新消息（RSS）</a>
                    </div>
                </div>
            </article>
        </section>
    </main>

    <!-- 尾部 -->
    <footer class="ruby-footer">
        <article class="ruby-footer-contains">
            <div class="rfc-nav">
                <ul class="rfc-nav-ul">
                    <li class="rfc-nav-li" v-for="(item, index) in footerNavBox" :key="index">
                        <a href="" class="rfc-nav-a">{{item}}</a>
                    </li>
                </ul>
            </div>
            <div class="rfc-lang">
                <span>本站其他语言版本：</span>
                <a href="" class="rfc-lang-list" v-for="(item, index) in langBox" :key="index">{{item}}</a>
                <p class="rfc-lang-end"><a class="rfc-lang-end-a" href="">本站</a>由 Ruby 社区的成员共同维护。</p>
            </div>
        </article>
    </footer>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'RubyView',

  setup() {

    return {
        navBox: ['下载','文档','代码库','社区','新闻','安全','关于 Ruby'],
        versionBox: [
            {title: 'Ruby 3.1.2 已发布',sub:'由 naruse and mame 发表于 2022-04-12'},
            {title: 'Ruby 3.0.4 已发布',sub:'由 nagachika and mame 发表于 2022-04-12'},
            {title: 'Ruby 2.7.6 已发布',sub:'由 usa and mame 发表于 2022-04-12'},
            {title: 'Ruby 2.6.10 已发布',sub:'由 usa and mame 发表于 2022-04-12'},
        ],
        newBox: [
            {
                title: 'CVE-2022-28738: Regexp 编译中的双重释放（double free）',
                sub:'由 mame 发表于 2022-04-12'
            },
            {
                title: 'CVE-2022-28739: String 到 Float 转换中的缓冲区溢出',
                sub:'由 mame 发表于 2022-04-12'
            },
            {
                title: 'Ruby 3.2.0 Preview 1 已发布',
                sub:'由 naruse 发表于 2022-04-03'
            },
            {
                title: 'Ruby 3.1.1 已发布',
                sub:'由 naruse 发表于 2022-02-18'
            },
            {
                title: 'Ruby 3.1.0 已发布',
                sub:'由 naruse 发表于 2021-12-25'
            },
            {
                title: 'Ruby 3.0.0 现已发布',
                sub:'由 naruse 发表于 2020-12-25'
            },
        ],
        footerNavBox: [
            '下载','文档','代码库','社区','新闻','安全','关于 Ruby'
        ],
        langBox: [ 
            'Български,', 'Deutsch,', 'English,', 'Español,', 'Français,','Bahasa Indonesia,', 'Italiano,', 
            '日本語,', '한국어,', 'polski,', 'Português,', 'Русский,', 'Türkçe,', 'Tiếng Việt,', '简体中文,', '繁體中文'
        ]
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

.ruby-is {
    background: url(https://www.ruby-lang.org/images/ruby_pattern.png) 50% 50%;
    border-bottom: 1px solid #ccc;
}

.ruby-is-contains {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 20px;
}

.ruby-is-left {
    padding: 24px 48px;
    flex: 1;
}

.ruby-is-h1 {
    font-size: 30px;
    margin: 12px 0;
    color: #cc342d;
}

.ruby-is-download {
    display: inline-block;
    background: #cc342d url(https://www.ruby-lang.org/images/download-ruby-arrow@2x.png) no-repeat 8px center;
    padding: 8px 20px 8px 45px;
    background-size: 30px 25px;
    text-decoration: none;
    color: white;
    border-radius: 6px;
    margin-right: 6px;
    box-shadow: 0 2px 0 #9b1c16;
}


.ruby-is-learn-more {
    color: #cc342d;
    padding-left: 6px;
}

.ruby-is-p {
    font-size: 19px;
    margin-top: 12px;
    margin-bottom: 20px;
    font-weight: 500;
}

.ruby-is-right {
    width: 375px;
}

.ruby-is-figure {
    margin: 0;
}

.ruby-is-pre {
    margin: 12px 48px 12px 0;
    background: #ffffffe6;
    border: 1px solid #999;
    box-shadow: 0 2px 5px #00000080;
    border-radius: 3px;
    line-height: 16px;
    font-size: 14px;
}

.ruby-is-code-content {
    color: #999988;
}

.ruby-is-code-var {
    color: #0086b3;
}

.ruby-is-code-str {
    color: #333333;
}


.rv-contains {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
}

.rv-left {
    flex: 1;
}

.rvlb-title {
    font-size: 16px;
    color: #cc342d;
    margin-top: 40px;
    margin-bottom: 5px;
}

.rvlb-sub {
    font-size: 16px;
    margin: 0;
}

.rvlb-read {
    display: inline-block;
    padding: 6px 0;
    color: #445488;
}


.rvlb-footer {
    color: gray;
    font-size: 13px;
    line-height: 16px;
    margin: 0;
}

.rlo-more-new {
    color: #445488;
}


.rv-right {
    background-color: #f6f6f3;
    border-bottom: 1px solid #ccc;
    padding: 20px 24px;
    text-shadow: 0 1px 0 #fff;
    box-shadow: 0 0 3px #00000066;
    border-radius: 3px;
    margin: 24px 48px 24px 0;
    flex: 0 26%;
    width: 30%;
    box-sizing: border-box;
    align-self: flex-start;
}

.rvr-try {
    margin-top: 6px;
    margin-bottom: 30px;
}

.rvr-try-p {
    margin: 0;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
}

.rvr-try-a {
    color: #445488;
    display: inline-block;
    font-size: 15px;
    line-height: 20px;
    margin: 6px 0;
}

.rvr-explore {
    margin-top: 6px;
    margin-bottom: 30px;
}

.rvr-explore-p {
    margin: 0;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
}

.rvr-explore-a {
    display: block;
    font-size: 15px;
    color: #445488;
    margin: 6px 0;
}

.rvr-join-p {
    font-size: 15px;
    margin: 6px 0;
    line-height: 20px;
}

.rvrj-a {
    color: #445488;
}

.rlo-a {
    color: #445488;
}

.rvr-join-title {
    margin: 0;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
}

.rvr-subscribe-p {
    margin: 0;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
}

.rvrs-new {
    margin: 6px 0;
    display: inline-block;
    font-size: 15px;
    color: #445488;
}

.rlo-title {
    color: #cc342d;
    margin: 40px 0 5px;
    line-height: 24px;
}

.ruby-footer-contains {
    max-width: 980px;
    margin: 48px auto;
}

.rfc-nav {
    background-color: #ebebe4;
    padding: 0 14px;
    border: 1px solid #ddd;
}

.rfc-nav-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.rfc-nav-li {
    padding: 8px 10px;
}

.rfc-nav-a {
    color: #555;
    font-size: 14px;
}

.rfc-lang {
    background-color: #F6F6F3;
    padding: 8px 24px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-top: none;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
.rfc-lang-list {
    color: #555;
}

.rfc-lang-end-a {
    color: #555;
}

</style>
