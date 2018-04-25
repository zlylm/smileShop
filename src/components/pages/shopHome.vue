<template>
  <section id="shopHome">
    <!--顶部搜索框部分-->
    <div id="search">
      <van-row>
        <van-col :span="3" class="search-address-icon">
          <img :src="addressIcon"/>
        </van-col>
        <van-col :span="18">
          <input type="text" class="search-content" placeholder="苹果iphone6"/>
        </van-col>
        <van-col :span="3" class="search-icon">
          <img :src="searchIcon"/>
        </van-col>
      </van-row>
    </div>
    <!--轮播图部分-->
    <div id="swipe">
      <van-swipe :autoplay="2500" style="max-height:9rem">
        <van-swipe-item v-for="(item,index) in swipeImgs" :key="index">
          <img v-lazy="item.imageUrl" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        addressIcon:require('../../assets/images/address.png'),
        searchIcon:require('../../assets/images/search.png'),
        swipeImgs:[
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
        ],
      }
    },
  }
</script>

<style lang="scss">
  #shopHome{
    /*顶部搜索框部分——开始*/
    #search{
      width: 100%;
      height: 2.5rem;
      line-height: 2.5rem;
      background:linear-gradient(to right,#ff9000,#ff5000);
      text-align: center;
      box-sizing: border-box;
      overflow: hidden;
      /*图标*/
      .search-address-icon,.search-icon{
        padding-top:0.375rem;
        img{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      /*输入框*/
      .search-content{
        background-color: transparent;
        border: none;
        width: 100%;
        box-sizing: border-box;
        height: 1.4rem;
        font-size: 0.875rem;
        text-indent: 0.3125rem;
        color: #fff;
        border-bottom:solid 1px #fff;
      }
      input::placeholder{
        color: #fff;
      }
    }
    /*顶部搜索框部分——结束*/

    /*轮播图——开始*/

    /*轮播图——结束*/
  }
</style>
