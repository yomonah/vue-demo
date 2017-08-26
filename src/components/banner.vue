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
    import {mapState} from 'vuex';
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
            }
        },
        created(){
            this.fetchData(this);
        },
        methods:{
            fetchData:function(progress){
              this.$store.dispatch('getBannerData', {
                progress: progress,
              });
            }
        },
        computed: mapState({
          swiperSlides: state => state.bannerData,
          isloadingComplete: state => state.isloadingComplete,
          busy: state => state.busy,
        })
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