<template>
	<div class="swiper-container container">
 		<div class="swiper-wrapper">
    		<div class="swiper-slide">
    			<a href="javascript:;"><img src="../assets/images/index_ban1_02.jpg" class="swiper_img"/></a>
    		</div>
            <div class="swiper-slide">
            	<a href="javascript:;"><img src="../assets/images/index_ban2_02.jpg" class="swiper_img"/></a>
            </div>
            <div class="swiper-slide">
            	<a href="javascript:;"><img src="../assets/images/index_ban1_02.jpg" class="swiper_img"/></a>
            </div>
            <div class="swiper-slide">
            	<a href="javascript:;"><img src="../assets/images/index_ban2_02.jpg" class="swiper_img"/></a>
            </div>
 		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
	export default {
		mounted(){
			this.slide()
		},
		methods:{
			slide(){
				new Swiper(".swiper-container",{
			        pagination:".swiper-pagination",
			        autoplayDisableOnInteraction:false,
			        autoplay:3000,
			        loop:true,
			     });
			}
		},
	}
</script>