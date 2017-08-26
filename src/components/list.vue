<template>
    <li class='news-item'>
      <div class='left'>
        <img :src="item.img"/>
      </div>
      <div class='right'>
        <p class='username'>{{item.username}}</p>
        <p class='info'>{{item.info}}</p>
        <div class='foot'>
          <span class='create-time'>{{item.date}}</span>
          <span class='com'><i class='fa fa-commenting-o'></i>{{item.comment}}</span>
          <span class='eye'><i class='fa fa-eye'></i>{{item.read}}</span>
        </div>
      </div>
    </li>
</template>

<script>
  export default {
    name: 'list',
    props:['item'],
    methods:{

    }
  }
</script>

<style lang='less'>
  .news-item{
    font-family:"Microsoft YaHei";
    list-style:none;
    padding: 10px;
    overflow: auto;
    border-bottom: 1px solid #f1f1f1;
    .left{
      float: left;
      width: 18%;
      img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }
    .right{
      float:left;
      width:82%;
      p{
        margin:0;
      }
      .username{
        color: #e66691;
        /*font-weight:bold;*/
      }
      .info{
        margin: 5px 0px;
      }
      .foot{
        color: #e66691;
        .create-time{
          font-size: 0.8rem;
          color: #999;
        }
        .eye,.com{
          float:right;
          font-size:0.8rem; 
          margin-left: 10px;    
          i{
            margin-right: 3px;
          }   
        }
      }
    }
  }
</style>