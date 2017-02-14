<template>
	<div>
		<section>
        	<bannerView/>
          	<ul class="index_ul fix container">
              	<li class="fl">
                  	<img src="src/assets/images/index_tb1_03.png" alt="" class="auto tc">
                  	<p class="fw tc">典型案例</p>
              	</li>
              	<li class="fl">
                  	<img src="src/assets/images/index_tb2_03.png" alt="" class="auto tc">
                  	<p class="fw tc">前期咨询</p>
              	</li>
              	<li class="fl">
                  	<img src="src/assets/images/index_tb3_03.png" alt="" class="auto tc">
                  	<p class="fw tc">工程设计</p>
              	</li>
              	<li class="fl">
                  	<img src="src/assets/images/index_tb4_03.png" alt="" class="auto tc">
                  	<p class="fw tc">工程总承包</p>
              	</li>
          	</ul>
         	<ul class="index_ult container">
             	<li>
                   <img src="../assets/images/index_tx1_03.png" alt="" class="fl index_zjzn">
                   <span class="fw">走进筑能</span>
                   <img src="../assets/images/index_jt_03.png" alt="" class="fr index_jt">
             	</li>
				<router-link to="/news" tag="li">
					<img src="../assets/images/index_tx2_03.png" alt="" class="fl index_xwzx">
					<span class="fw">新闻中心</span>
					<img src="../assets/images/index_jt_03.png" alt="" class="fr index_jt">
				</router-link>
         	</ul>
    	</section>
	</div>
</template>
<script type="text/javascript">
	import bannerView from './Banner.vue';
	export default {
		components :{
			bannerView,
		}
	};
</script>