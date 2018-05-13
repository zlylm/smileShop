<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="text">
                <div>
                    摘要： 据北美航天防务司令部表示，当地时间11日，美国F-22隐形战斗机在阿拉斯加海岸外的国际空域对两架俄罗斯图-95“熊”式轰炸机进行了拦截。
                    此次两架俄罗斯图-95“熊”式轰炸机的出现，也标志着俄罗斯轰炸机近一年来首次在美国领土附近飞行。
                    摘要： 据北美航天防务司令部表示，当地时间11日，美国F-22隐形战斗机在阿拉斯加海岸外的国际空域对两架俄罗斯图-95“熊”式轰炸机进行了拦截。
                    此次两架俄罗斯图-95“熊”式轰炸机的出现，也标志着俄罗斯轰炸机近一年来首次在美国领土附近飞行。
                    摘要： 据北美航天防务司令部表示，当地时间11日，美国F-22隐形战斗机在阿拉斯加海岸外的国际空域对两架俄罗斯图-95“熊”式轰炸机进行了拦截。
                    此次两架俄罗斯图-95“熊”式轰炸机的出现，也标志着俄罗斯轰炸机近一年来首次在美国领土附近飞行。
                    摘要： 据北美航天防务司令部表示，当地时间11日，美国F-22隐形战斗机在阿拉斯加海岸外的国际空域对两架俄罗斯图-95“熊”式轰炸机进行了拦截。
                    此次两架俄罗斯图-95“熊”式轰炸机的出现，也标志着俄罗斯轰炸机近一年来首次在美国领土附近飞行。
                    摘要： 据北美航天防务司令部表示，当地时间11日，美国F-22隐形战斗机在阿拉斯加海岸外的国际空域对两架俄罗斯图-95“熊”式轰炸机进行了拦截。
                    此次两架俄罗斯图-95“熊”式轰炸机的出现，也标志着俄罗斯轰炸机近一年来首次在美国领土附近飞行。
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
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
                    direction:'vertical',
                    slidesPerView:'auto',
                    freeMode:true,
                    mousewheel:true
                }
            }
        },
    }
</script>

<style lang="scss">
    .swiper{
        height: 300px;
        overflow: hidden;
        .text{
            height: auto;
            font-size: 18px;
            padding: 20px;
            box-sizing: border-box;
        }
    }
</style>