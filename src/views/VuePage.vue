<template>
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
                        <li class="vhns-li">
                            <a href="" class="vhnsl-a">学习</a>
                            <span class="vhnsl-t"></span>
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
  name: 'VuePage',

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

.vht-p > a {
    text-decoration: none;
    color: white;
}

</style>
