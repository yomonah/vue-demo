<template>
  <div id="app">
    <Banner></Banner>
    <div class='head-nav'>
      <HeadNav></HeadNav>
    </div>
  </div>
</template>

<script>
  import Banner from './components/banner';
  import HeadNav from './components/headNav';
  export default {
    name: 'app',
    components: {
      Banner,
      HeadNav
    }
  }
</script>
<style lang='less'>
  ul{
    -webkit-padding-start: 0;
    -webkit-margin-before: 0;
  }
</style>