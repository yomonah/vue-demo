<template>
    <div class='daily-container'>
      <img src='../../static/img/daily.jpg'/>
    </div>
</template>

<script>
    export default {
        name: 'daily',
        data() {
          return{};
        },
        created(){
        },
        methods:{
        }
    }
</script>

<style lang='less'>
  .daily-container{
      width:100%;
      padding:10px 0px 5px 0px;
      text-align:center;
      border-bottom: 10px solid #f1f1f1;
      img{
        width:94%;
      }
  }
</style>