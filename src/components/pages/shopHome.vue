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
    <!--商品推荐-->
    <div id="recommend">
      <h1>商品推荐</h1>
      <div class="re-home">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommend" :key="index">
              <div class="re-home-item">
                <img :src="item.image" width="100%"/>
                <span class="mall-price">￥{{item.mallPrice}}</span>
                <span class="price">￥{{item.price}}</span>
              </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
  import {swiper,swiperSlide } from 'vue-awesome-swiper'
  export default {
    components:{
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption:{
          autoplay:true,
          slidesPerView: 3,
        },
        addressIcon:require('../../assets/images/address.png'),
        searchIcon:require('../../assets/images/search.png'),
        //轮播图
        swipeImgs:[],
        //商品分类
        category:[],
        //广告图片
        adBanner:'',
        //商品推荐
        recommend:[],
      }
    },
    created(){
      axios({
        url:'https://www.easy-mock.com/mock/5ae69fc47e1b090ed5b8d829/smileShop/index',
        method:'get'
      }).then((res)=>{
        console.log(res);
        if(res.status==200){
          this.category=res.data.data.category;//商品分类
          this.adBanner=res.data.data.advertesPicture;//广告图片
          this.swipeImgs=res.data.data.slides;//轮播图片
          this.recommend=res.data.data.recommend;//商品推荐
        }
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
        font-size: 12px;
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

    /*商品推荐——开始*/
    #recommend{
      background-color: #fff;
      h1{
        font-size: 0.9375rem;
        color: #ff5000;
        height: 1.875rem;
        line-height: 1.875rem;
        text-indent: 0.625rem;
        border-bottom:  solid 1px #E6E6FA;
      }
      .re-home{
        border-bottom:  solid 1px #E6E6FA;
        .re-home-item{
          cursor: pointer;
          text-align: center;
          font-size: 13px;
          color: #333333;
          border-right:  solid 1px #E6E6FA;
          span{
            letter-spacing: 1px;
            display: block;
          }
          .price{
            display: block;
            transform: scale(0.75);
            color:#C0C0C0;
            text-decoration: line-through;
          }
        }
      }
    }
    /*商品推荐——结束*/
  }
</style>
