<template>
  <section>
      <div id="floor">
      <h1>海底世界</h1>
      <div class="floor-top">
        <div class="floor-top-one">
          <img :src="floorData1.image"/>
        </div>
        <div class="floor-right">
          <div class="floor-top-two">
            <img :src="floorData2.image"/>
          </div>
          <div class="floor-top-three">
            <img :src="floorData3.image"/>
          </div>
        </div>
      </div>
      <div class="floor-bottom">
        <div class="floor-bottom-item" v-for="(item,index) in floorData.slice(3)" :key="index">
          <img :src="item.image"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
      return {
          floorData1:{},
          floorData2:{},
          floorData3:{},
      }
  },
  props:['floorData'],
  watch:{
      floorData:function(){
        //因为数据是异步获取的，如果把赋值操作放在created里面，数据可能是空的
        this.floorData1=this.floorData[0];
        this.floorData2=this.floorData[1];
        this.floorData3=this.floorData[2];
      }
  }
}
</script>
<style lang="scss">
     /*商品大类——开始*/
    #floor{
      background-color: #fff;
      h1{
        font-size: 0.9375rem;
        color: #ff5000;
        height: 1.875rem;
        line-height: 1.875rem;
        text-indent: 0.625rem;
        border-bottom:  solid 1px #E6E6FA;
      }
      img{
          width: 100%;
      }
      .floor-top{
        display: flex;
        flex-wrap: nowrap;
        border-bottom:  solid 1px #E6E6FA;
        div{
          width: 10rem;
          box-sizing: border-box;
        }
        .floor-top-one{
          border-right:solid 1px #E6E6FA;
        }
        .floor-top-two{
          border-bottom:  solid 1px #E6E6FA;
        }
      }
      .floor-bottom{
        display: flex;
        flex-wrap: wrap;
        .floor-bottom-item{
          box-sizing: border-box;
          border-bottom:  solid 1px #E6E6FA;
          width: 10rem;
        }
        div:nth-child(odd){
          border-right:solid 1px #E6E6FA;
        }
      }
    }
    /*商品大类——结束*/
</style>


