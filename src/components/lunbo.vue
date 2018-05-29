
<!-------------------------------home页轮播图swiper--------------------------->

<template>
  <div class="lunbo">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in imsg" :key="item.id"><img class="gray" :src="item.img" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>

</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css');

  export default {
    name: 'lunbo',
    components:{
      swiper,swiperSlide
    },
    data () {
      return {
        imsg:[
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05327186142976760.jpg"},
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05345109604997733.jpg"},
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05330562712030759.jpg"}
        ],
        swiperOption: {
          //手动滑动之后继续自动轮播
          autoplayDisableOnInteraction : false,
          notNextTick: true,
          autoplay: 3000,
          loop:true,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          onTransitionStart(swiper){
            //console.log(swiper)
          }
        }

      }
    },
    computed: {

    },
    mounted () {

    }
  }
</script>
<style scoped>
  .lunbo{ width:100%;height:10.4rem}
  .swiper-slide img{ width:100%;height: 10.4rem}
</style>
