import getters from './getters'
const state= {
	showTel:true,
	loading : false
};
const mutations = {
	showTel(state){
		state.showTel = true
	}, 
	hidTel(state){
		state.showTel = false
	},
    showLoading(state){
        state.loading = true;
    },
    hidLoading(state){
        state.loading = false;
    },
}
export default {
	state,
	mutations,
	getters
}