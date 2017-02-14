<template>
    <section>
        <img src="../assets/images/qqzx_ban_02.jpg" alt="" class="gsjj">
        <div class="gsjj_t"><img src="../assets/images/qqzx_dt_03.png" alt="" class="gsjj_dt fl"><p class="fw gsjj_font fl"><a href="">首页</a>><a href="">前期咨询</a></p></div>
        <div class="gsjj_con fw">
            <div v-html="arrList.content"></div>
            <img :src="arrList.author_face" alt="" class="gsjj_img auto">
            <br/>
            <div v-html="arrList.content"></div>
            <br/>
            <img :src="arrList.author_face" alt="" class="gsjj_img auto">
            <img :src="arrList.author_face" alt="" class="gsjj_img auto">
            <div v-html="arrList.content"></div>
        </div>
    </section>
</template>
<script>
    export default {
        data () {
            return{
                arrList : {}
            }
        },
        mounted(){
            let reg =/\/connet\/(\d+)/;
            let id = this.$route.path.match(reg)[1];
            this.getConnet(id);
        },
        methods:{
            getConnet(id){
                var _this = this
                this.$http.get('src/data/article.data').then((res) => {
                    _this.arrList = res.data[id];
                }).catch( (err)  => {
                    console.log("详情"+err)
                });
            }
        }
    }
</script>