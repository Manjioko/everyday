<template>
  <div class="baidu">
    <!-- 头部导航部分 -->
    <div class="baidu-nav">
      <!-- 左边菜单 -->
      <div class="baidu-tag">
        <span>新闻</span>
        <span>hao123</span>
        <span>地图</span>
        <span>贴吧</span>
        <span>视频</span>
        <span>图片</span>
        <span>网盘</span>
        <span>更多</span>
      </div>
      <!-- 中间空白部分 -->
      <div class="baidu-nav-center"></div>
      <!-- 右边菜单 -->
      <div class="baidu-nav-right">
        <span class="baidu-weather">
          <span>深圳  32℃ </span><span>优</span>
        </span>
        <span class="baidu-setting">设置</span>
        <span class="baidu-thumb">
          <span><img :src="thumb" alt="thumb" /></span>
          <span>kowork</span>
        </span>
      </div>
    </div>

    <!-- baidu 搜索部分 -->
    <div class="baidu-search">
      <div class="baidu-logo">
        <img :src="baiduLogo" alt="baiduLogo" :draggable="false">
      </div>
      <div class="baidu-search-input">
        <input type="text" class="baidu-contents" />
        <span class="baidu-picture"></span>
        <span class="baidu-aduio"></span>
        <button class="baidu-click">百度一下</button>
      </div>
    </div>

    <!-- 热搜部分 -->
    <div class="hot-search">
      <div class="hot-search-header">
        <div class="baidu-hot">
          <span>百度热搜</span>
          <span><img src="@/assets/dayuhao.svg" alt=""></span>
        </div>
        <div class="hot-reset">
          <span><img src="@/assets/reset.svg" alt=""></span>
          <span>换一换</span>
        </div>
      </div>
      <div class="hot-search-contents">

          <div class="hot-new" v-for="(item,index) in hotNew" :key="index">
            <span :style="{color: item.color }">
              <img src="@/assets/zhiding.svg" alt="zhiding" v-if="!index">{{index ? index : ''}}
            </span>
            <span>{{item.title}}</span>
            <span v-if="item.hot" class="hot-new-tag">热</span>
            <span v-if="item.new" class="new-new-tag">新</span>
          </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'BaiduPage',

  setup() {


    return {
      thumb: 'https://himg.bdimg.com/sys/portraitn/item/public.1.e4a6684a.MesoXYhePAT_-zs87HF1yg',
      baiduLogo: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1-66368c33f8.png',
      hotNew: [
        {title:"第五届数字中国峰会",hot:false,new:false,},
        {title:"南京发布：南京永远不会忘记",hot:false,new:false,color: '#fe2d46'},
        {title:"KTV提供有偿陪侍色情表演143人被抓",hot:true,new:false,color:'#f60'},
        {title:"多措并举促进高校毕业生就业",hot:false,new:false,color:'#faa90e'},
        {title:"拉姆前夫被执行死刑",hot:true,new:false,color:'#9195a3'},
        {title:"部分药品因医保基金不够调出目录？",hot:false,new:true,color:'#9195a3'},
        ]
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$font: 13px/23px Arial,sans-serif;
$picurl: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/searchbox/nicon-10750f3f7d.png';

.baidu-nav {
  display: flex;
  flex-direction: row;
}

.baidu-nav-center {
  flex-grow: 1;
}

.baidu-tag {
  padding-left: 24px;
}
.baidu-tag > span {
  margin-right: 24px;
  margin-top: 19px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  font: $font;
}
.baidu-tag > span:hover {
  color: #315efb
}

.baidu-nav-right {
  font: $font;
  height: 60px;
  cursor: pointer;
}

.baidu-weather {
  display: inline-block;
  vertical-align: top;
  margin-top: 19px;
  margin-left: 32px;
}
.baidu-weather > span:nth-child(2n) {
  background: #40c057;
  height: 18px;
  color: #fff;
  padding: 0 6px;
  border-radius: 9px;
  margin-left: 7px;
}

.baidu-setting {
  display: inline-block;
  vertical-align: top;
  margin-top: 19px;
  margin-left: 32px;
}

.baidu-thumb {
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 32px;
  margin-right: 8px;
}

.baidu-thumb > span:nth-child(2n + 1) {
  display: inline-block;
  vertical-align: top;
  width: 28px;
  height: 28px;
  border: 1px solid #4e71f2;
  border-radius: 50%;
  & > img {
    width: 24px;
    height: 24px;
    padding: 2px;
    border-radius: 50%;
  }
}
.baidu-thumb > span:nth-child(2n) {
  display: inline-block;
  vertical-align: top;
  margin-top: 3px;
  margin-left: 6px;
  // background: red;
}
.baidu-search {
  width: 100vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.baidu-contents {
  display: inline-block;
  width: 443px;
  height: 16px;
  padding: 12px 16px;
  border-radius: 10px 0 0 10px;
  border: 2px solid #c4c7ce;
  outline: none;
  font-size: 16px;
  padding-right: 87px;
  vertical-align: top;
}
.baidu-contents:focus {
  border-color: #4e6ef2 !important;
  opacity: 1;
  -webkit-appearance: none;
}

.baidu-logo > img {
  width: 270px;

}

.baidu-search-input {
  position: relative;
}

.baidu-click {
  display: inline-block;
  width: 108px;
  height: 44px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0 10px 10px 0;
  font-size: 17px;
  color: #fff;
  background: #4e6ef2;
  box-shadow: none;
  padding: 0;
  vertical-align: top;
  position: relative;
  right: 2px;
}

.baidu-picture {
  display: inline-block;
  background: #fff url($picurl) no-repeat;
  width: 24px;
  height: 20px;
  background-position: 0px -50px;
  position: absolute;
  top: 12px;
  right: 125px;
}

.baidu-aduio {
    background: #fff url($picurl) no-repeat;
    background-position: 0 0;
    display: inline-block;
    position: absolute;
    top: 10px;
    width: 24px;
    right: 160px;
    height: 25px;
}

.hot-search {
    width: 100vw;
    margin-top: 45px;
    // cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.hot-search-header {
  display: flex;
  width: 650px;
  justify-content: space-between;
}
.baidu-hot > span:first-child {
  display: inline-block;
  vertical-align: top;
  font: 16px/24px Arial,sans-serif;
  font-weight: bold;
  cursor: pointer;
}
.baidu-hot > span:last-child {
  display: inline-block;
  vertical-align: top;
  margin-top: 4px;
  margin-left: 5px;
}
.hot-reset > span:last-child {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  line-height: 14px;
  margin-top: 2px;
  color: #626675;
}
.hot-reset > span:first-child {
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
  cursor: pointer;
}
.hot-search-contents {
    width: 800px;
    height: 150px;
    // background-color: rgb(94, 158, 184);
    margin-left: 140px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    cursor: pointer;
}

.hot-new {
    width: 380px;
    height: 38px;
    text-align: start;
    line-height: 38px;
    font-size: 16px;
}
.hot-new > span:first-child {
  width: 22px;
  height: 18px;
  margin-right: 6px;
  font-size: 18px;

}
.hot-new-tag {
  background: #f60;
  padding: 3px;
  border-radius: 5px;
  width: 18px;
  text-align: center;
  line-height: 16px;
  color: #fff;
  height: 16px;
  margin-left: 6px;
  vertical-align: top;
  margin-top: 6px;
  display: inline-block;
}
.new-new-tag {
  @extend .hot-new-tag;
  background: red;
}
</style>
