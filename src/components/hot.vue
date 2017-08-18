<template>
    <div class='hot-wrap'>
      <p class='title'>流行元素</p>
      <ul class='items'>
        <li class='item' v-for='item in hotList'>
            <img :src='item.img'/>
            <span>{{item.theme}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'head-nav',
        data() {
            return {
                hotList: []
            };
        },
        created(){
            this.$http.get('../../static/mock/hot.json').then(res => {
            this.hotList = res.data.content.data;
          });
        },
        methods:{
        }
    }
</script>

<style lang='less'>
.hot-wrap{
  overflow: hidden;
  overflow-x: auto;
  margin-bottom:10px;
  &::-webkit-scrollbar{display:none;}
  .title{
    color: #E91E63;
    margin: 10px;
    -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#ff0000), to(rgba(0, 0, 255, 0)));
  }
  .items{
    margin: 0px 10px;
    width:280%;
    display: flex;
    .item{
      display:inline-block;
      color: #666;
      margin-right: 0.5rem;
      height: 10rem;
      text-align: center;
      img{
        width:100%;
        height:inherit;
      }
      span{
        position: relative;
        top: -2rem;
        display: inline-block;
        color: #f1f1f1;
        background: rgba(0,0,0,0.5);
        padding: 2px 5px;
        border-radius: 15px;
      }
    }
  }
}
</style>