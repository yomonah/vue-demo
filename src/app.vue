<template>
  <div id="app">
    <Banner></Banner>
    <div class='head-nav'>
      <HeadNav></HeadNav>
    </div>
    <div class='content'>
      <Daily></Daily>
      <Hot></Hot>
    </div>
    <div class='footer'>
      <FooterBar></FooterBar>
    </div>
  </div>
</template>

<script>
  import Banner from './components/banner';
  import HeadNav from './components/headNav';
  import Daily from './components/daily';
  import FooterBar from './components/footerBar';
  import Hot from './components/hot';
  export default {
    name: 'app',
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
    background: rgba(0,0,0,0.6);
    height: 3.5rem;
    line-height: 3.5rem;
  }
</style>