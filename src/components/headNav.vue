<template>
    <ul class='nav-container'>
        <li class='nav' v-for='item in navList' @click='goTo(item)'>
            <i :class='item.path'></i>
            <span :class='item.path+"-text"'>{{item.text}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'head-nav',
        data() {
            return {
                navList: []
            };
        },
        created(){
            this.$http.get('../../static/mock/nav.json').then(res => {
            this.navList = res.data.content.data;
          });
        },
        methods:{
            goTo(config){
                // this.$store.commit('setHeadNav', index);
                // this.$router.push({path: config.path});
            }
        }
    }
</script>

<style lang='less'>
.nav-container{
    margin:4%;
    text-align:center;
    .nav{
        list-style: none;
        width: 25%;
        display: inline-block;
        text-align: center;
        font-size: 0.8rem;
        color: #999;
        i{
            display: block;
            margin:0 auto;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 100%;
            border:1px solid #efecec;
        }
        span{
            font-size: 1rem;
            display: block;
            margin-top: 0.5rem;
        }
        .clothes{
            background:url('../../static/img/clothes.jpeg') no-repeat;
        }
        .clothes-text{
            color:#EEA9B8;
        }
        .makeup{
            background:url('../../static/img/makeup.jpeg') no-repeat;
        }
        .makeup-text{
            color:#60c5d2;
        }
        .hair{
            background:url('../../static/img/hair.jpg') no-repeat;
        }
        .hair-text{
            color:#fec531;
        }
        .hot{
            background:url('../../static/img/hot.jpeg') no-repeat;
        }
        .hot-text{
            color:#f6797b;
        }
        .clothes, .makeup, .hair, .hot{
            background-size:cover;
        }
    }
}
</style>