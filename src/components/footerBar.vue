<template>
    <div class='footer-bar'>
      <span> 还没账号？</span>
      <button v-on:click='goTo()'>马上注册</button>
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
            goTo(){
              alert('注册功能未开通,乖乖呆在这～');
            }
        }
    }
</script>
<style lang='less'>
  .footer-bar{
    span{
      color: #fb9189;
      margin-left: 2rem;
    }
    button{
      width: 30%;
      font-size: 1rem;
      margin-left: 28%;
      border: 1px solid #fb9189;
      background: none;
      color: #fb9189;
      border-radius: 6px;
    }
  }
</style>