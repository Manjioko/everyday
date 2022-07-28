<template>
<!-- <div>Golang</div> -->
<header class="go-site-header">
    <div class="Header">
        <nav class="header-nav">
            <a href="/">
                <img :src="goLang" alt="Go" class="left-top-logo">
            </a>
            <div class="Gonav">
                <ul class="header-menu">
                    <li class="menuitem"><span>Why Go</span></li>
                    <li class="menuitem"><span>Get Start</span></li>
                    <li class="menuitem"><span>Doc</span></li>
                    <li class="menuitem"><span>Packages</span></li>
                    <li class="menuitem"><span>Play</span></li>
                    <li class="menuitem"><span>Blog</span></li>
                </ul>
            </div>
        </nav>
    </div>
</header>
<main>
    <!-- 介绍模块 -->
    <section class="cute-bule-dog">
        <div class="dog-grid-contains">
            <!-- 介绍部分 -->
            <div class="dog-descript">
                <h1 class='dog-descript-title'>Build fast, reliable, and efficient software at scale</h1>
                <ul class="dog-ul">
                    <li class="dog-li">
                        Go is an open source programming language supported by Google
                    </li>
                    <li class="dog-li">
                        Easy to learn and get started with
                    </li>
                    <li class="dog-li">
                        Built-in concurrency and a robust standard library
                    </li>
                    <li class="dog-li">
                        Growing ecosystem of partners, communities, and tools
                    </li>
                </ul>
            </div>
            <!-- 蓝狗部分 -->
            <div class="dog-item">
                <img class="dog-img" :src="dogImg" alt="Go dog" />
            </div>
            <!-- 按钮部分 -->
            <div class="dog-action">
                <article class="action-button">
                    <button class="action-start">Get Start</button>
                    <button class="action-download">Download</button>
                </article>
                <article class="action-footnote">
                    <p>Download packages for Windows <a href="/">64-bit</a>, <a href="/">macOS</a>, <a href="/">Linux</a>, and <a href="/">more</a></p>
                    <p>The go command by default downloads and authenticates modules using the Go module mirror and Go checksum database run by Google. <a href="/">Learn more</a>.</p>
                </article>
            </div>
            
        </div>
    </section>

    <!-- 赞助商模块 -->
    <section class="go-who-uses">
        <div class="uses-all-article">
            <article class="uses-contains">
                <h2 class="uses-h2">Companies using Go</h2>
                <p class="uses-p">Organizations in every industry use Go to power their software and services <a href="/" class="uses-a">View all stories</a></p>
            </article>
            <article class="uses-list">
                <ul class="use-list-ul">
                    <li class="use-list-li" v-for="(item,index) in companies" :key="index">
                        <img :src="item" alt="something" class="uses-img">
                    </li>
                </ul>
            </article>
        </div>
    </section>

    <!-- 作者模块 -->
    <section class="author-say">
        <article class="author">
            <div class="author-contains">
                <p class="author-p">
                    "<strong>A small language that compiles fast makes for a happy developer.</strong> 
                    The Go language is small, compiles really fast, 
                    and as a result it lets your mind focus on the actual problem and
                    less on the tool you are using to solve it. Code, test, debug cycles are so
                    quick that you forget you are not working with an interpreted language. 
                    Looking at our code,you see <strong>less boilerplate and more business logic.</strong> "
                </p>
                <span class="author-name">
                    — Clayton Coleman, Lead Engineer, Open Shift at RedHat
                </span>
            </div>
        </article>
    </section>

    <!-- 验证部分 -->
    <section class="playground">
        <article class="playground-contains">
            <div class="playground-title"><h2 class="playground-h2">Try Go</h2></div>
            <div class="playground-input">
                <textarea 
                    name="playground-textarea"
                    id="playground-textarea"
                    rows="13"
                    class="playground-textarea">
 // You can edit this code!
 // Click here and start typing.
 package main

 import "fmt"

 func main() {
     fmt.Println("Hello, 世界")
 }
                </textarea>
            </div>
            <div class="playground-output">
                <textarea
                    name="playground-output"
                    id="playground-output"
                    
                    rows="5"
                    class="playground-output"
                >
 Hello, 世界

 Program exited.
                </textarea>
            </div>
            <div class="playground-control">
                <select class="playground-select">
                    <option value="volvo">Hello World!</option>
                    <option value="saab">Fuck World!!</option>
                    <option value="mercedes">Hi world</option>
                    <option value="audi">How are you?</option>
                </select>
                <div class="playground-submit">
                    <button class="playground-btn">Run</button>
                    <button class="playground-btn">Share</button>
                    <button class="playground-btn">Tour</button>
                </div>
            </div>
        </article>
    </section>

    <!-- 介绍go部分 -->
    <section class="why-go">
        <article class="why-go-contains">
            <div class="why-go-title">
                <h2 class="why-go-h2">What’s possible with Go</h2>
                <p class="why-go-p">Use Go for a variety of software development purposes</p>
            </div>
            <div class="why-go-box">
                <ul class="why-go-ul">
                    <li class="why-go-li" v-for="(item,index) in goBox" :key="index">
                        <article class="why-go-detail">
                            <div class="why-go-icon">
                                <img :src="item.logoUrl" alt="" class="why-go-icon-img">
                            </div>
                            <div class="why-go-box-title">
                                <h3 class="why-go-box-h3">{{item.title}}</h3>
                                <p class="why-go-box-p">{{item.contents}}</p>
                            </div>
                        </article>
                        <article class="why-go-footer">
                            <div class="why-go-packages">
                                <img src="https://go.dev/images/icons/package.svg" alt="package" /> Popular Packages:
                            </div>
                            <ul class="why-go-pkg-list">
                                <li class="why-go-pkg-li" v-for="(subItem,subIndex) in item.pkgs" :key="subIndex">
                                    <a href="/">{{subItem}}</a>
                                </li>
                            </ul>
                            <div class="why-go-read-more">
                                <a href="/">Read More</a>
                            </div>
                        </article>
                    </li>
                    <li class="why-go-li">
                        <article class="why-go-def">
                            <div class="why-go-def-logo">
                                <img src="https://go.dev/images/gophers/biplane.svg" alt="">
                            </div>
                            <div class="why-go-def-a">
                                <a href="/">More Use Case</a>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </article>
    </section>


    <!-- 学习go部分 -->
    <section class="learn-go">
        <article class="learn-go-contains">
            <div class="learn-go-box">
                <ul class="learn-go-ul">
                    <li class="learn-go-li" v-for="(item,index) in learnBox" :key="index">
                        <div class="learn-go-logo">
                            <img
                                :src="item.url"
                                class="learn-go-img"
                            >
                        </div>
                        <div class="learn-go-contents">
                            <div class="learn-go-tag">UPCOMING EVENTS</div>
                            <div class="learn-go-title"><h4><a href="/">{{item.title}}</a></h4></div>
                            <div class="learn-go-subcontents">{{item.subcontents}}</div>
                            <div class="learn-go-read-more"><a href="/">Lead More</a></div>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    </section>

    <!-- 开始部分 -->
    <section class="get-start">
        <article class="get-start-contains">
            <div class="get-start-go">
                <h1 class="get-start-h1">Get started with Go</h1>
                <p class="get-start-p">
                    Explore a wealth of learning resources, 
                    including guided journeys, courses, books, and more.
                </p>
                <div class="get-start-link">
                    <a href="/" class="get-start-btn">Get Start</a>
                    <a href="/" class="get-start-noborder-btn">Download Go</a>
                </div>
            </div>
            <div class="get-start-other">
                <div class="get-start-list" v-for="(item,index) in getStartBox" :key="index">
                    <p class="get-start-list-title">{{item.title}}</p>
                    <ul class="get-start-list-ul">
                        <li class="get-start-list-li" v-for="(subItem,subIndex) in item.subBox" :key="subIndex">
                            <a href="/">{{subItem.title}}</a>
                            <p class="get-start-list-p">
                                {{subItem.content}}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
    
</main>
<footer>
    <article class="contacts">
        <div class="contacts-contains" v-for="(item,index) in contactBox" :key="index">
            <a href="" class="contact-title">{{item.title}}</a>
            <ul class="contact-ul">
                <li class="contact-li" v-for="(subItem,subIndex) in item.contents" :key="subIndex">
                    <a href="/" class="contact-subTitle">{{subItem}}</a>
                </li>
            </ul>
        </div>
    </article>
    <article class="copyright">
        <div class="copyright-contains">
            <div class="copyright-dog">
                <img src="https://go.dev/images/gophers/pilot-bust.svg" alt="" class="copyright-dog-img">
            </div>
            <div class="copyright-list">
                <ul class="copyright-list-ul">
                    <li class="copyright-list-li" v-for="(item,index) in dogBox" :key="index">
                        <a href="" class="copyright-a">{{item}}</a>
                    </li>
                    <li class="copyright-list-li">
                        <a href="" class="copyright-a">
                            <img src="https://go.dev/images/icons/light_mode_gm_grey_24dp.svg" alt="" class="copyright-sun">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-google">
                <img src="https://go.dev/images/google-white.png" alt="" class="footer-google-img">
            </div>
        </div>
    </article>
</footer>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'GoLang',

  setup() {

    return {
        goLang: 'https://go.dev/images/go-logo-white.svg',
        dogImg: 'https://go.dev/images/gophers/ladder.svg',
        companies: [
            'https://go.dev/images/logos/google.svg',
            'https://go.dev/images/logos/american-express.svg',
            'https://go.dev/images/logos/paypal.svg',
            'https://go.dev/images/logos/mercadolibre_light.svg',
            'https://go.dev/images/logos/bitly.svg',
            'https://go.dev/images/logos/capitalone_light.svg',
            'https://go.dev/images/logos/cockroach.svg',
            'https://go.dev/images/logos/dropbox.png',
            'https://go.dev/images/logos/cloudflare_light.svg',
            'https://go.dev/images/logos/meta_light.svg',
            'https://go.dev/images/logos/microsoft_light.svg',
            'https://go.dev/images/logos/wildlife_light.svg',
            'https://go.dev/images/logos/netflix.svg',
            'https://go.dev/images/logos/riot_light.svg',
            'https://go.dev/images/logos/salesforce.svg',
            'https://go.dev/images/logos/twitch.svg',
            'https://go.dev/images/logos/twitter.svg',
            'https://go.dev/images/logos/uber_light.svg'
        ],
        goBox: [
            {
                logoUrl:'https://go.dev/images/icons/sphere.svg',
                title: 'Cloud & Network Services',
                contents:`With a strong ecosystem of tools and APIs on major cloud providers,
                        it is easier than ever to build services with Go.`,
                pkgs: ['cloud.google.com/go','aws/client','Azure/azure-sdk-for-go'],
            },
            {
                logoUrl:'https://go.dev/images/icons/command-folder.svg',
                title: 'Command-line Interfaces',
                contents:`With popular open source packages and a robust standard library, 
                        use Go to create fast and elegant CLIs.`,
                pkgs: ['spf13/cobra','spf13/viper','urfave/cli'],
            },
            {
                logoUrl:'https://go.dev/images/icons/code.svg',
                title: 'Web Development',
                contents:`With enhanced memory performance and support for several IDEs, 
                Go powers fast and scalable web applications.`,
                pkgs: ['net/http','html/template','flosch/pongo2','database/sql','olivere/elastic'],
            },
            {
                logoUrl:'https://go.dev/images/icons/gear.svg',
                title: 'DevOps & Site Reliability',
                contents:`With fast build times, lean syntax, an automatic formatter and doc generator, 
                Go is built to support both DevOps and SRE.`,
                pkgs: ['opentracing/opentracing-go','istio/istio','urfave/cli'],
            },
        ],
        learnBox:[
            {
                url: 'https://secure.meetupstatic.com/photos/event/a/2/5/5/thumb_484241557.jpeg',
                title: 'Web Server Essentials',
                subcontents: 'Jul 25, 2022 | Tallinn, Estonia'
            },
            {
                url: 'https://secure.meetupstatic.com/photos/event/6/6/2/1/thumb_469946145.jpeg',
                title: '48th Gofrm Meetup: Building Testable CLIs With Cobra',
                subcontents: 'Jul 26, 2022 | Frankfurt,  Germany'
            },
            {
                url: 'https://secure.meetupstatic.com/photos/event/9/8/b/1/thumb_465459089.jpeg',
                title: '[online] July Golang meetup',
                subcontents: 'Jul 26, 2022 | Berlin,  Germany'
            },
        ],
        getStartBox: [
            {
                title: 'RESOURCES TO START ON YOUR OWN',
                subBox: [
                    {
                        title: "Guided learning journeys",
                        content: "Step-by-step tutorials to get your feet wet"
                    },
                    {
                        title: "Online learning",
                        content: "Browse resources and learn at your own pace"
                    },
                    {
                        title: "Featured books",
                        content: "Read through structured chapters and theories"
                    },
                    {
                        title: "Cloud Self-paced labs",
                        content: "Jump in to deploying Go apps on GCP"
                    },
                ]
            },
            {
                title: 'IN-PERSON TRAININGS',
                subBox: [
                    {
                        title: "Ardan Labs",
                        content: "Offering customized on-site live training classes."
                    },
                    {
                        title: "Gopher Guides",
                        content: "Customized In-person, remote, and online training classes. Training for Developers by Developers."
                    },
                    {
                        title: "Boss Sauce Creative",
                        content: "Personalized or track-based Go training for teams."
                    },
                    {
                        title: "Shiju Varghese",
                        content: "On-site classroom training on Go and consulting on distributed systems architectures, in India."
                    },
                ]
            },
        ],
        contactBox: [
            {title:'Why Go',contents:['Use Cases','Case Studies']},
            {title:'Get Started',contents:['Playground','Tour','Stack Overflow','Help'],},
            {title:'Packages',contents:['Standard Library'],},
            {title:'About',contents:['Download','Blog','Issue Tracker','Release Notes',
            'Brand Guidelines','Code of Conduct'],},
            {title:'Connect',contents:['Twitter','GitHub',
            'Slack','r/golang','Meetup','Golang Weekly'],},
        ],
        dogBox: ['Copyright','Terms of Service','Privacy Policy','Report an Issue']
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.go-site-header {
    background: #007d9c;
    box-shadow: inset 0px 0rem 0.125rem rgb(171 171 171 / 30%);

}

.Header {
    padding: 0 1.5rem;
}

.header-nav {
    display: flex;
    height: 3.5rem;
    align-items: center;
    justify-content: space-between;
}

.left-top-logo {
    display: block;
    width: 5.125rem;
    height: 2rem;
}

.header-menu {
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
}

.menuitem {
    color: #fff;
    padding: 0 15px;
    margin: 0 5px;
    display: flex;
    height: 100%;
    align-items: center;
}

.Gonav {
    height: 100%;
}


.menuitem:hover {
    border-bottom: 3px solid #fff;
}

.dog-grid-contains {
    display: grid;
    grid-template-columns: 2.56fr 12.25rem;
    gap: 0 5vw;
    padding: 1rem 1.5rem 0;
    width: 75.75rem;
}
.cute-bule-dog {
    background: #007d9c;
    display: flex;
    justify-content: center;
}

.action-button {
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.action-start {
    width: 17.5rem;
    height: 4rem;
    font-size: 1.5rem;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #fddd00;
    margin-right: 1.5rem;
    // margin: 15px;
}
.action-download {
    @extend .action-start;
    background-color: #007d9c;
    border: 0.0625rem solid #fff;
    color: #fff;
    margin-right: 0;
}
.dog-item {
    grid-row: 1/3;
    grid-column: 2/3;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.dog-img {
    height: 24rem;
    object-fit: cover;
    object-position: 100% 0;
    width: 100%;
}
.dog-descript-title {
    font-size: 2.45rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0;
}
.dog-descript-title+ul {
    color: #fff;
    padding: 1rem;
    font-weight: 600;
}
.action-footnote {
    color: #fff;
    padding-bottom: 10px;
    font-size: 0.85rem;
    font-weight: 600;
}
.action-footnote a {
    color: #fff;
}
.action-footnote a:visited {
    color: #fff;
}

.go-who-uses {
    display: flex;
    justify-content: center;
}

.uses-all-article {
    display: flex;
    flex-direction: column;
    padding: 3rem 1.75rem 1rem;
    max-width: 75.75rem;;
}

.uses-contains {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.uses-list {
    width: 100%;
}

.use-list-ul {
    width: 100%;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    margin: 1.5rem auto 3.75rem;
    gap: 1rem 1.125rem;
}

.use-list-li {
    height: 6rem;
    width: 10.5rem;
    box-shadow: 1px 0px 2px 1px #d9d5d5dd;
    border-radius: 5px;
    background: #f8f8f8e6;
    display: flex;
    justify-content: center;
    align-items: center;
}

.uses-img {
    margin: auto;
    width: auto;
    max-width: 9.375rem;
    max-height: 4rem;
}

.uses-h2 {
    font-size: 2.25rem;
    line-height: 2.625rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
}
.uses-p {
    color: #202224;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1rem;
}
.uses-a {
    color: #007d9c;
    font-size: 1rem;
    padding-left: 1rem;
    text-decoration: none;
}

.author {
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
}

.author-contains {
    display: flex;
    flex-wrap: wrap;
    max-width: 61rem;
    width: 90vw;
    position: relative;
    padding: 3.75rem 2rem 2.25rem;
}

.author-p {
    font-size: 1.3125rem;
    line-height: 2.25rem;
}

.author-name {
    width: 100%;
    text-align: right;
}

.playground-contains {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 75.75rem;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 3rem 1.5rem 1rem;
}

.playground-h2 {
    font-size: 2.25rem;
    line-height: 2.625rem;
    margin-top: 0;
    margin-bottom: 1.25rem;
    text-align: center;
}

.playground-input {
    width: 100%;
}

#playground-textarea {
    display: block;
    background: #ffffdd;
    border-color: #c6c8ca;
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: none;
    resize: vertical;
    width: 100%;
    padding: 0;
    outline: none;
    font-size: 1rem;
}

.playground-output {
    width: 100%;
}

#playground-output {
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    resize: vertical;
    width: 100%;
    display: block;
    padding: 0;
    margin-bottom: 1.688rem;
    background: #f8f8f8;
    border-color: #c6c8ca;
    outline: none;
}

.playground-control {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.playground-select {
    width: 12.125rem;
    height: 1.75rem;
    outline: none;
}

.playground-btn {
    height: 1.75rem;
    margin: 0 5px;
    width: 4.125rem;
    padding: 0 0.625rem;
    color: #007d9c;
    outline: none;
    border: none;
    border-radius: 0.1875rem;
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
    font-weight: bold;
}

.playground-btn:first-child {
    border: 0.0625rem solid #00add8;
    background-color: #ffffdd;
}

.why-go-contains {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem 1.5rem 1rem;
}

.why-go-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.why-go-h2 {
    margin-top: 0;
    font-size: 2.25rem;
    line-height: 2.625rem;
}

.why-go-p {
    margin-top: 0;
    font-size: 1rem;
    color: #202224;
}

.why-go-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 3rem;
}

.why-go-li {
    background-color: #f8f8f8;
    border: 1px solid #c6c8ca;
    border-radius: 0.25rem;
    max-width: 40rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 25rem;
    margin-bottom: 1.5rem;
    min-width: 22rem;
}

.why-go-detail {
    padding: 2rem 2rem 0.188rem;
}
.why-go-footer {
    padding: 1rem 2rem 2rem;
}
.why-go-packages > img {
    height: 0.888rem;
    margin-right: 0.375rem;
    padding: 0.063rem 0 0.063rem;
    vertical-align: bottom;
}
.why-go-pkg-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.why-go-pkg-li {
    background-color: #f8f8f8;
    color: #007d9c;
    font-size: 0.688rem;
    line-height: 0.813rem;
    border: 1px solid #c6c8ca;
    border-radius: 0.125rem;
    margin: 0.125rem 0.5rem 0.5rem 0;
    padding: 0.188rem;
}
.why-go-pkg-li > a {
    text-decoration: none;
    color: #007d9c;
}
.why-go-read-more {
    margin-top: 1.5rem;
}
.why-go-read-more > a {
    font-size: 0.875rem;
    text-decoration: none;
    color: #007d9c;
}
.why-go-def-logo {
    display: flex;
    height: 14.313rem;
    justify-content: center;
    align-items: center;
    margin: 2.5rem auto 1.375rem;
}
.why-go-def-a {
    text-align: center;
}

.why-go-def-logo > img {
    height: 140px;
}

.why-go-def-a > a {
    text-decoration: none;
    color: #fff;
    padding: 0.275rem 1.063rem 0.275rem 0.275rem;
    background-color: #007d9c;
    border-radius: 0.125rem;
}

.learn-go-box {
    max-width: 73rem;
}

.learn-go-contains {
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
}

.learn-go-ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.learn-go-li {
    display: flex;
    align-items: flex-start;
    width: 42rem;
    padding: 1rem;
    margin: 1rem 0;
    position: relative;
    height: 10rem;
}

.learn-go-logo {
    width: 7rem;
    display: flex;
    background-color: #fff;
    border: 1px solid #c6c8ca;
    margin-right: 1.3125rem;
    height: 100%;
    border-radius: 0.5rem;
}

.learn-go-img {
    padding: 2.5rem 1rem;
    object-fit: contain;
}

.learn-go-contents {
    height: 100%;
    position: relative;
}

.learn-go-tag {
    font-size: 0.6875rem;
    margin-top: 0;
    color: #555759;
    margin-bottom: 0.875rem;
}

.learn-go-title > h4 {
    margin: 0 0 0.25rem 0;
    & > a {
        text-decoration: none;
        color: #202224;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
}
}

.learn-go-title > a {
    text-decoration: none;
    color: #202224;
}

.learn-go-subcontents {
    font-size: 0.8125rem;
    color: #555759;
    margin: 0 0 0.125rem 0;
}

.learn-go-read-more {
    position: absolute;
    bottom: 0;
    & > a {
        text-decoration: none;
        color: #007d9c;
    }
}

.learn-go-ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.get-start-contains {
    display: flex;
    max-width: 75.75rem;
    padding: 3.75rem 1.5rem 2.625rem;
    flex-wrap: wrap;
    margin: 0 auto;
}
.get-start-go {
    padding-right: 3.75rem;
    flex: 0 1 37%;
    border-right: 1px solid #c6c8ca;
}
.get-start-h1 {
    font-size: 2.5rem;
    line-height: 2.625rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
}
.get-start-p {
    margin: 1rem 0;
    color: #202224;
}

.get-start-btn {
    background-color: #007d9c;
    margin-right: 1.125rem;
    padding: 0.4375rem 1.3125rem;
    text-decoration: none;
    color: #fff;
    display: inline-block;
    border-radius: 0.125rem;
}

.get-start-noborder-btn {
    text-decoration: none;
    color: #007d9c;
}
.get-start-list {
    padding-left: 3.375rem;
    flex: 50%;
}
.get-start-list-title {
    color: #555759;
    font-size: 0.6875rem;
    margin-top: 0;
    margin-bottom: 1rem;
}
.get-start-list-ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
}

.get-start-list-li {
    margin-bottom: 1rem;
}

.get-start-list-li > a {
    text-decoration: none;
    font-weight: 600;
    color: #202224;
}
.get-start-list-p {
    margin: 0;
    color: #555759;
    font-size: 0.8125rem;
}

.get-start-other {
    display: flex;
    flex: 1;
}

.contacts {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.5rem 2.625rem 1.5rem;
    background: #253443;
}
.contacts-contains {
    flex: 0 0 9.5rem;
}
.contact-title {
    text-decoration: none;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #fff;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
}
.contact-ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.contact-subTitle {
    color: #fff;
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 2rem;
}

.copyright {
    background: #253443;
    /* display: flex; */
}

.copyright-contains {
    display: flex;
    align-items: center;
    margin: 0 1.5rem;
    border-top: 1px solid #c6c8ca;
    min-height: 4.125rem;
}

.copyright-dog-img {
    width: 5rem;
    display: block;
}

.copyright-dog {
    align-self: flex-end;
}

.copyright-list {
    flex: 1;
}

.copyright-list-ul {
    display: flex;
    /* flex: 1; */
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

.copyright-list-li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.4rem 0;
    padding: 0 1rem;
    font-size: 0.8765rem;
    /* border-right: 1px solid #c6c8ca; */
}

.copyright-a {
    text-decoration: none;
    color: #fff;
}

.footer-google-img {
    height: 1.5rem;
}
.footer-google {
    display: block;
    align-self: flex-end;
    margin-bottom: 1rem;
}
</style>
