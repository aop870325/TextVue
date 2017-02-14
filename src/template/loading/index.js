import LoadingTemplate from './loading.vue';

const Loading = {
	install: function(Vue){
		Vue.component('Loading',LoadingTemplate);
	}
};
export default Loading