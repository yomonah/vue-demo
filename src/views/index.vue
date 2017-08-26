<template>
  <div>
    <Banner></Banner>
    <div class='head-nav'>
      <HeadNav></HeadNav>
    </div>
    <div class='content'>
      <Daily></Daily>
      <Hot></Hot>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Banner from '../components/banner';
  import HeadNav from '../components/headNav';
  import Daily from '../components/daily';
  import FooterBar from '../components/footerBar';
  import Hot from '../components/hot';
  export default {
    name: 'index',
    components: {
      Banner,
      HeadNav,
      Daily,
      FooterBar,
      Hot
    }
  }
</script>
<style lang='less'>
  ul{
    -webkit-padding-start: 0;
    -webkit-margin-before: 0;
  }
  .head-nav{
    margin-top: 20px;
    border-bottom: 10px solid #f1f1f1;  
  }
  .content{
    padding-bottom: 3.5rem;
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #f1f1f1;
    height: 3.5rem;
    background:#fff;
  }
</style>