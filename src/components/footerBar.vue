<template>
    <div class='footer-bar'>
      <nav class="bar">
        <router-link class="tab-item" to="/home">
         <i class='fa fa-home'></i><span>首页</span>
        </router-link>
        <router-link class="tab-item" to="/news">
          <i class='fa fa-podcast'></i><span>动态</span>
        </router-link>
        <router-link class="tab-item" to="/car">
          <i class='fa fa-shopping-cart'></i><span>购物车</span>
        </router-link>
        <router-link class="tab-item" to="/personal">
          <i class='fa fa-user-o'></i><span>我的</span>
        </router-link>
      </nav>
    </div>
</template>

<script>
    export default {
        name: 'footer-nav',
        data() {
          return {
              barList: []
          };
        },
        created(){
        },
        methods:{
        }
    }
</script>
<style lang='less'>
  .footer-bar{
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #f1f1f1;
    height: 3.5rem;
    background:#fff;
    nav{
      display:flex;
      width:100%;
      a{
        display:inline-block;
        width:25%;
        list-style:none;
        text-align:center;
        margin-top: 0.5rem;
        color:#999;
        text-decoration: none;
        i{
          display: block;
          font-size: 1.5rem;
        }
        span{
          font-size: 0.5rem;
        }
      }
      .router-link-active{
        color:#e66691;
      }
    }
  }
</style>