<template>
  <header class="top-bar">
    <a class="icon fa fa-chevron-left" @click="goBack"></a>
    <span class="title">{{title}}</span>
  </header>
</template>

<script>
export default {
  props:['title'],
  methods:{
    goBack: function() {
      window.location.href='/home';
      // this.$router.back();
    }
  }
}
</script>

<style lang='less'>
  .top-bar {
    background-color:#e66691;
    height: 3rem;
    line-height: 3rem;
    text-align:center;
    .icon{
      position: relative;
      top: 0;
      left: -38%;
      color: #fff;
    }
    .title{
      color:#fff;
    }
  }
</style>
