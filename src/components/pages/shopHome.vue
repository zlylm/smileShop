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
      <van-swipe :autoplay="2500" style="max-height:8rem">
        <van-swipe-item v-for="(item,index) in swipeImgs" :key="index">
          <img v-lazy="item.image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--商品分类-->
    <div id="type-bar">
      <div v-for="(item,index) in category" :key="index" class="type-bar-item">
        <img :src="item.image" width="60%"/>
        <span>{{item.mallCategoryName}}</span>
      </div>
    </div>
    <!--广告图片-->
    <div id="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        addressIcon:require('../../assets/images/address.png'),
        searchIcon:require('../../assets/images/search.png'),
        //轮播图
        swipeImgs:[
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
          {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
        ],
        //商品分类
        category:[],
        //广告图片
        adBanner:'',
      }
    },
    created(){
      axios({
        url:'https://www.easy-mock.com/mock/5ae69fc47e1b090ed5b8d829/smileShop/index',
        method:'get'
      }).then((res)=>{
        console.log(res.data);
        this.category=res.data.data.category;//商品分类
        this.adBanner=res.data.data.advertesPicture;//广告图片
        this.swipeImgs=res.data.data.slides;//轮播图片
      }).catch((error)=>{})
    }
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

    /*商品分类——开始*/
    #type-bar{
      margin:0.1875rem auto;
      width: 19.6875rem;
      height: 5rem;
      border-radius: 0.125rem;
      background:#fff;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
      .type-bar-item{
        font-size: 0.75rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
        color: #666;
      }
    }
    /*商品分类——结束*/

    /*广告图片——开始*/
    #ad-banner{
      padding: 0.3125rem 0;
    }
    /*广告图片——结束*/
  }
</style>
