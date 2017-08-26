<template>
  <div class='car-page'>
    <TopBar :title='"购物车"'></TopBar>
    <div class='empty-car'>
      <i class='fa fa-shopping-cart'></i>
      <p>您的购物车还是空的，赶快去挑选商品吧！</p>
      <p class='link'>
        <router-link class="link-item" to="/home">潮流单品</router-link>
        <router-link class="link-item" to="/home">优惠团购</router-link>
        <router-link class="link-item" to="/home">复古穿搭</router-link>
        <router-link class="link-item" to="/home">百搭箱包</router-link>
        <router-link class="link-item" to="/home">美妆护肤</router-link>
        <router-link class="link-item" to="/home">日用百货</router-link>
      </p>
    </div>
    <FooterBar></FooterBar>  
  </div>
</template>

<script>
  import TopBar from '../components/topBar';
  import FooterBar from '../components/footerBar';
  export default {
    name: 'car',
    components: {
      TopBar,
      FooterBar,
    }
  }
</script>
<style lang='less'>
  .empty-car{
    text-align:center;
    color:#333;
    .fa-shopping-cart{
      font-size: 160px;
      color: #cac7c7;
      text-align: center;
    }
    .link{
      line-height: 2rem;
      color: #e66691;
      .link-item{
        color: #e66691;
        display:inline-block;
        width:30%;
        text-align:center;
        text-decoration: none;
        &:visited{
          color: #e66691;
        }
      }
    }
  }
</style>