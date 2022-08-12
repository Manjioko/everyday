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
        <div class="fm-test"></div>
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

.fh-s {
    background: gray;
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

</style>
