<template>
  <div class='personal-page'>
     <div class='header'>
      <canvas ref='canvas'></canvas>
      <img :src="personalInfo.headImg"/>
      <div class='username'><span>{{personalInfo.username}}</span><i>V {{personalInfo.level}}</i></div>
      <ul class='info-data'>
        <li>帖子 {{personalInfo.thread}}</li>
        <li>积分 {{personalInfo.integrai}}</li>
        <li>悬赏 {{personalInfo.reward}}</li>
      </ul>
     </div>
     <div class='personal-body'>
      <div class='task'>
        <span>获取积分</span>
        <ul class='task-ul'>
          <li>
            <i class='fa fa-calendar-check-o'></i>
            打卡签到
          </li>
          <li>
            <i class='fa fa-edit'></i>
            发表动态
          </li>
          <li>
            <i class='fa fa-user-plus'></i>
            添加好友
          </li>
          <li>
            <i class='fa fa-reply-all'></i>
          回复评论
          </li>
        </ul>
      </div>
      <ul class='setting'>
        <li><i class='fa fa-file-text-o'></i>我的帖子<i class='right fa fa-chevron-right'></i></li>
        <li><i class='fa fa-files-o'></i>我的订单<i class='right fa fa-chevron-right'></i></li>
        <li><i class='fa fa-star-o'></i>历史收藏<i class='right fa fa-chevron-right'></i></li>
        <li class='list-end'><i class='fa fa-cog'></i>设置<i class='right fa fa-chevron-right'></i></li>
        <li>新消息通知
        <i ref='switch' class='switch right fa' @click='switchNews()'>
          <i class='top-btn'></i>
        </i></li>
      </ul>
     </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import TopBar from '../components/topBar';
  import FooterBar from '../components/footerBar';
  import raf from 'raf';
  import {mapState} from 'vuex';
  export default {
    name: 'personal',
    data(){
      return{
        stop:false,
        option:{},
        step: 0
      }
    },
    components: {
      TopBar,
      FooterBar,
    },
    computed: mapState({
      personalInfo: state => state.personalInfo,
      isloadingComplete: state => state.isloadingComplete,
      busy: state => state.busy,
    }),
    mounted:function(){
      this.$nextTick(function () {
        this.fetchData(this);
      });

      this.option = {
        width: document.body.clientWidth,
        height: 400,
        lines:[
          "#fff",
          "rgba(250,250,250,.2)",
          "rgba(250,250,250,.4)",
          "rgba(250,250,250,.6)"
        ],
        speed:0.1,
        phase:0
      };
      this.init();
      this.draw();
    },
    destroyed(){
      this.stop = true;
    },
    methods:{
      fetchData(progress){
        this.$store.dispatch('getPersonalInfo', {
          progress: progress,
          refresh: false
        });
      },
      init(){
        let {width,height,speed,phase} = this.option;
        this.speed = speed || 0.1;
        this.phase = phase || 0;

        if (!devicePixelRatio) devicePixelRatio = 1;
        this.width = devicePixelRatio * (width || 320);
        this.height = devicePixelRatio * (height || 100);
        this.MAX = (this.height/2)-4;

        this.canvas = this.$refs.canvas;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = (this.width/devicePixelRatio)+'px';
        this.canvas.style.height = (this.height/devicePixelRatio)+'px';
        this.ctx = this.canvas.getContext('2d');
        this.stop = false;
      },

      draw(){
        if(this.stop) return;
        let {lines} = this.option;
        this.clear();
        this.step++;
        //画3个不同颜色的矩形
        for(var j = lines.length - 1; j >= 0; j--) {
          this.ctx.fillStyle = lines[j];
          var angle = (this.step+j*90)*Math.PI/180;
          var deltaHeight   = Math.sin(angle) * 50;
          var deltaHeightRight   = Math.cos(angle) * 50;
          this.ctx.beginPath();
          if(j == 0){
            this.ctx.moveTo(0, this.height/2);
            this.ctx.bezierCurveTo(this.width/3, this.height/2-deltaHeight+10, this.width *3/5, this.height/2-deltaHeightRight, this.width, this.height/2);
            this.ctx.lineTo(this.width, this.height);
            this.ctx.lineTo(0, this.height);
            this.ctx.lineTo(0, this.height/2+deltaHeight);
            this.ctx.closePath();
            this.ctx.fill();
          }else{
            this.ctx.moveTo(0, this.height/2+deltaHeight-5);
            this.ctx.bezierCurveTo(this.width /3, this.height/2+deltaHeight-30, this.width *3/5, this.height/2+deltaHeightRight-30, this.width, this.height/2+deltaHeightRight);
            this.ctx.lineTo(this.width, this.height);
            this.ctx.lineTo(0, this.height);
            this.ctx.lineTo(0, this.height/2+deltaHeight);
            this.ctx.closePath();
            this.ctx.fill();
          }
        }
        raf(this.draw.bind(this));
      },

      clear(){
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.globalCompositeOperation = 'source-over';
      },

      switchNews(){
        let cls = this.$refs.switch.className;
        if(cls.indexOf('on')<0){
          this.$refs.switch.className = 'switch fa right on';
        }else{
          this.$refs.switch.className = 'switch fa right';
        }
      }
    }
  }
</script>
<style lang='less'>
  .personal-page{
    padding-bottom: 2.5rem;
    .header{
      height: 14rem;
      overflow: hidden;
      text-align: center;
      canvas{
        background:#e66691;
      }
      img{
        position: relative;
        top: -24rem;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display:block;
        margin: 0 auto;
      }
      .username{
        position:relative;
        top: -23rem;
        color:#fff;
        i{
          display: inline-block;
          width: 50px;
          border: 1px solid gold;
          border-radius: 15px;
          color: gold;
          margin-left: 12px;
        }
      }
      .info-data{
        position: relative;
        top: -22rem;
        display: flex;
        color:#fff;
        padding:0 5%;
        li{
          list-style:none;
          width:33%;
          border-right: 1px solid rgba(255,255,255,.8);
        }
        li:nth-child(3){
          border-right:none;
        }
      }
    }
    .personal-body{
      .task{
        padding:0 10px;
        border-bottom: 8px solid #f1f1f1;
        font-size: 0.9rem;
        .task-ul{
          text-align: center;
          margin-top:10px;
          li{
            display:inline-block;
            list-style:none;
            width:22%;
            font-size: 0.9rem;
            .fa{
              width: 40px;
              margin: 0 auto;
              padding: 13px 0px;
              border-radius: 50%;
              display:block;
              color:#fff;
              margin-bottom: 6px;
            }
            .fa-calendar-check-o{
              background:#07c7ba;
            }
            .fa-edit{
              background:#FF69B4;
            }
            .fa-user-plus{
              background:gold;
            }
            .fa-reply-all{
              background:#f37936;
            }
          }
        }
      }
      .setting{
        li{
          height: 3rem;
          line-height: 3rem;
          padding: 0 10px;
          border-bottom: 1px solid #f1f1f1;
          font-size: 0.9rem;
          color:#666;
          .fa{
            margin-right: 10px;
            color: #999;
          }
          .right{
            float: right;
            margin-top: 1rem;
          }
          .switch{
            margin-top: 0.5rem;
            width: 60px;
            height: 30px;
            border: 1px solid #dadada;
            border-radius: 20px;
            background:#f1f1f1;
            .top-btn{
              display: block;
              height: 30px;
              width: 30px;
              background: #fff;
              border-radius: 50%;
              position: relative;
              left: 30px;
              transition: left 0.5s;
              border:none;
            }
          }
          .on{
            background: #32c532;
            border: none;
            .top-btn{
              left:0px;
              border: 1px solid #f1f1f1;
            }
          }
        }
        .list-end{
          border-bottom: 5px solid #f1f1f1;
        }
      }
    }
  }
</style>