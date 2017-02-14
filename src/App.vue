<template>
<div id="app">
    <navView />
   <!--  <mainView /> -->
    <transition name="fide">
        <keep-alive>
            <router-view />
        </keep-alive>
    </transition>
   	<telView v-show="telShow"/>
    <footerView/>
    <Loading v-show="loading" />
</div>
</template>

<script>
	import navView from './template/Nav.vue';
	import telView from './template/Tel.vue';
	import footerView from './template/Footer.vue';
	import {mapGetters,mapActions} from 'vuex';
	export default {
		computed:mapGetters([
			'telShow',
            'loading'
		]),
		watch :{
			$route(to){
				if( to.path == '/message' ){
					this.$store.dispatch('hidTel');
				}else{
					this.$store.dispatch('showTel');
				}
			}
		},
		components : {
			navView,
			telView,
			footerView,
		}
	}
</script>
<style>
    fide-enter-active,
    fide-leave-active{
        transition: 1s all ease;
        opacity: .2;
        /*transform: translate3d(0,10em,0);*/
    }
    fide-enter,
    fide-leave{
        opacity: 1;
        /*transform: translate3d(0,10em,0);*/
    }
</style>