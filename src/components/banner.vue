<template>
    <div class='banner'>
       <swiper :options="swiperOption">
           <swiper-slide v-for="slide in swiperSlides" :key="slide">
            <img class="banner-img" :src='slide.img' alt=""/>
           </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper';
    export default {
        name: 'banner',
        components:{
            swiper,
            swiperSlide
        },
        data(){
            return{
                swiperOption:{
                    autoplay: 3000,
                    setWrapperSize :true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                },
                swiperSlides: []
            }
        },
        created(){
            this.$http.get('../../static/mock/banner.json').then(res => {
            this.swiperSlides = res.data.content.data;
          });
        },
  }
</script>

<style lang='less'>
    .banner{
        .swiper-container {
            width:100%;
            height:180px;
        }
        .banner-img{
            width: 100%;
            height: 100%;
        }
        .swiper-pagination-bullet-active{
            background:#f54983;
        }
    }
</style>