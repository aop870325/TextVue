<template>
    <section>
        <img src="../assets/images/lxwm.jpg" alt="" class="gsjj">
        <div class="gsjj_t"><img src="../assets/images/qqzx_dt_03.png" alt="" class="gsjj_dt fl"><p class="fw gsjj_font fl"><a href="">首页</a><strong>&gt;</strong><a href=""><b>新闻中心</b></a></div>
        <ul class="xwzx_con">
            <li class="fix" v-for="(item,index) in arrList">
                <router-link :to="'/connet/'+item.id">
                    <img :src="item.author_face" alt="" class="fl">
                    <div class="xwzx_r fl">
                        <h2 class="fw">{{item.title}}</h2>
                        <span class="fw">{{item.time}}</span>
                        <div v-html="item.content"></div>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="xwzx_jzgd">
            <p class="tc auto db">加载更多...</p>
        </div>
    </section>
</template>
<script>
    export default{
        data () {
            return {
                arrList:[]
            }
        },
        mounted(){
//            let reg =/\/connet\/(\d+)/;
//            let id = this.$route.path.match(reg);
            this.getData();
        },
        methods:{
            getData(){
                var _this = this
                this.$http.get('src/data/article.data').then((res) => {
                    _this.arrList = res.data;
                }).catch( (err)  => {
                    console.log("News"+err)
                });
            }
        }
    }
</script>