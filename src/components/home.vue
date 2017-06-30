<template>
<div class="main">
<nav class="nav">
<div class="iconimg">
  <img src="~assets/images/icon14.png" alt="">
</div>
<ul id="menu">
  <li data-menuanchor="page1" class="active"><a href="#page1">首页</a></li>
  <li data-menuanchor="page2"><a href="#page2">游乐购</a></li>
  <li data-menuanchor="page3"><a href="#page3">游戏产品</a></li>
  <li data-menuanchor="page4"><a href="#page4">通付卡</a></li>
  <li data-menuanchor="page5"><a href="#page5">SDK</a></li>
  <li data-menuanchor="page6"><a href="#page6">智能硬件</a></li>
  <li ><a href="recharge.html" target="_blank">充值中心</a></li>
</ul>
</nav>
<div id="fullpage">

  <div class="section" id="section0">
      <img src="~assets/images/icon13.png" alt="">
  </div>
  <div class="section" id="section1" v-lazy:background-image="gameyouleurl">
    <div class="pageleft">
      <h1>游乐购</h1>
      <div class="text">
        <p>多样化模式的新型创意购物通币互动平台,只做最好的产品</p>
      <p>集 积分宝 / 传统购物 / 折扣购物 为一体的购物模式</p>
      <p>游乐购只要为带动国内发展中心商品销售,拓宽市场同时为用户线上通币流转服务</p>
      </div>
     <!--  <button>了解更多</button> -->
    </div>
  </div>

   <div class="section" id="section5" v-lazy:background-image="gamekindurl">
        
       <div class="gameitems">
         <div class="gameitem">
           <div class="gamedescribe">
              <div class="gametext">
                <h3>FISHING</h3>
                <h2>爱玩捕鱼</h2>
                <small>机关炮+弹珠炮+导弹炮+激光炮</small>
                <br>
                <small>星际风机甲捕鱼来袭</small>
              </div>
              <a href="fish.html">
               <!--  <img src="~assets/images/fish.jpg" alt=""> -->
                  <img src="" v-lazy="gamesfishurl"/>
               <!--  <img v-lazy="./../assets/images/gong.jpg"/> -->
              </a>
              
           </div>
          
           <div  class="gamedown">
             <img src="~assets/images/down.png" alt="">
           
           </div>
         
         </div>
          <div class="gameitem">
           <div class="gamedescribe" >
            <div class="gametext">
                <h3>TITAN SPORTS</h3>
                <h2>煮公来了</h2>
                <small>LBS+沙盒+生存</small>
                <br>
                <small>树立冒险游戏新风向</small>
              </div>
              <a href="zhugong.html">
              <img v-lazy="gamesgongurl"/>
            <!--   <img src="~assets/images/gong.jpg" alt=""> -->
              </a>
           </div>
         
           <div  class="gamedown">
              <img src="~assets/images/down.png" alt="">
           </div>
           
         </div>
          <div class="gameitem">
           <div class="gamedescribe">
            <div class="gametext">
                <h3>WIN SPORTS</h3>
                <h2>必赢德扑</h2>
                <small>夺宝赛+锦标赛+排位赛+主播赛</small>
                <br>
                <small>比赛奖品拿到High</small>
              </div>
              <a href="puke.html">
               <img v-lazy="gameswinurl"/>
             <!--  <img src="~assets/images/win.jpg" alt=""> -->
              </a>
           </div>
          
           <div  class="gamedown">
              <img src="~assets/images/down.png" alt="">
           </div>
           
         </div>
        
       </div>
  </div>
  <div class="section" id="section2" v-lazy:background-image="gamesection4url">
     <div class="pageleft">
      <h1>通付卡</h1>
      <div class="text">
        <p>银联唯一游戏授权运营</p>
      <p>以发卡绑定用户为核心,主要以线下合作B端消费为主,通币以充值赠送的方式给予</p>
      <p>通付卡中公共通币可以在全球任意银联pos机进行线下消费</p>
      </div>
   
    </div>
  </div>

  <div class="section" id="section3" v-lazy:background-image="gameSDKurl">
    <div class="pageleft">
      <h1>SDK</h1>
      <div class="text">
        <p>SDK对接国内/海外游戏,用户游戏货币按照比例兑换通币</p>
      <p>SDK建立打造移动互联网虚拟货币标准,联通虚拟货币体系</p>
      </div>
     <!--  <button>了解更多</button> -->
    </div>
  </div>
  <div class="section" id="section4">
     <div class="pageleft">
      <h1>智能硬件</h1>
      <div class="text">
        <p>变形金刚授权 限量定制</p>
      <p>将作战与地图分开,将游戏与聊天分开,一机两屏完美实现</p>
      </div>
      <!-- <button>了解更多></button> -->
    </div>
  </div>
  <footer class="section  fp-auto-height">
  <bsfooter></bsfooter>
</footer>
</div>

</div>
</template>

<script>
var $ = require('jquery')
require('fullpage.js')
import bsfooter from './bsfooter'
export default {
  name: 'home',
  data () {
    return {
    gamesfishurl:'./static/img/fish.jpg',
    gamesgongurl:'./static/img/gong.jpg',
    gameswinurl:'./static/img/win.jpg',
    gameyouleurl:'./static/img/game.png',
    gamekindurl:'./static/img/gamebackground.jpg',
    gamesection4url:'./static/img/section4.jpg',
    gameSDKurl:'./static/img/SDK.png',
    }
  },
  methods:{
   
  },
  components:{
    bsfooter,
  },
  mounted(){
    $('#fullpage').fullpage({
       anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],

      menu: '#menu'
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 @import  '~assets/css/jquery.fullpage.min.css';
.main{
  position:relative;
 
}
 .nav{
 position:absolute;
  width: 100%;
  top:0px;
  left:0px;
  height: 60px;
  z-index: 10000;
  background:#0F1014;
  display: flex;
  justify-content: space-around;

  .iconimg{
    display: inline-block;
     // float:left;
    min-width: 200px;
    height: 60px; 
 // margin-left:10%;
   
    img{
      margin-top:3px;
      height:45px;
    }
  }
   #menu{
      display: inline-block;
      // float:left;
      // margin-left: 25%;

   li{
        list-style-type: none;
        display: inline-block;
       margin-right: 40px;
        a{
           font-size: 14px;
        color:#FFFFFF;
        text-decoration:none;
        }
   }
    }    
 }
 #fullpage{
    // margin-top: -60px;
 }
 #section0{
  background: url('~assets/images/SDKBG.png');
  background:#0F1014;
  img{
    width: 220px;
  }
    
 }
  #section1{
     // background:transparent url('~assets/images/game.png') round;
     background-size:100% 100%;
    .pageleft{
       text-align: left;
       font-size: 16px;
       color:#F36978;
       margin-left: 70px;
      h1{
        letter-spacing: 0.1em;
      }
      button{
        width: 120px;
        height: 35px;
        background:#F36978;
        margin-top: 10px;
        outline: none;
        box-shadow: none;
        border:none;
        color:#ffffff;

      }
     .text{
      text-align: left;
      font-size: 15px;
      p{
        white-space: nowrap;
        -webkit-margin-before:0;
        -webkit-margin-after:0.3em;
         color:#A7A5A5;
      }
     }
    }
    
 }
 #section5{
  // background:url('~assets/images/gamebackground.jpg') round;
  background-size:100% 100%;
  text-align: center;
  .gameitems{
    width:80%;
    display: flex;
    justify-content:center;
    margin-left: 10%;
    .gameitem{
    // display:flex;
    // flex-direction:column;
    position:relative;
        
    .gamedescribe{
      overflow: none;
      // flex: 1;
      position:relative;
      width: 100%;
      height: 100%;
     
      .gametext{
        color:#FFFFFF;
        text-align: left;
        position:absolute;
        left:20px;
        bottom:70px;
        h2,h3{
          -webkit-margin-before: 0.1em;
          -webkit-margin-after: 0.1em;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
          letter-spacing: 1px;
        }
        h2{
           -webkit-margin-after: 0.6em;
        }
        small{
           letter-spacing: 0.1em;
        }
      }
      img{
      width: 100%;
       height: 100%;
      }

    }
    .gamedown{
      position:absolute;
      bottom:0px;
      left:0px;
      width: 100%;
      height: 60px;
      cursor: pointer;
        img{
          width: 100%;
          height: 100%;
        }
    }

    }
  }
    
 }
  #section2{
     // background:url('~assets/images/section4.jpg') round;
     background-size:100% 100%;
      .pageleft{
       text-align: left;
       font-size: 16px;
       color:#F36978;
       margin-left: 70px;
      h1{
        letter-spacing: 0.1em;
      }
     .text{
      text-align: left;
      font-size: 15px;
      p{
        white-space: nowrap;
        -webkit-margin-before:0;
        -webkit-margin-after:0.3em;
         color:#727476;
      }
     }
    }
 }
  #section3{
      // background: url('~assets/images/SDK.png') round,
      //             url('~assets/images/SDKBG.png') round;
       // background:url('~assets/images/SDKBG.png') round;
       background-repeat:round;
       background:#181E38;
       background-size:100% 100%;
        .pageleft{
       text-align: left;
       font-size: 16px;
       color:#F36978;
       margin-left: 70px;
      h1{
        letter-spacing: 0.1em;
      }
       button{
        width: 120px;
        height: 35px;
        background:#F36978;
        margin-top: 10px;
        outline: none;
        box-shadow: none;
        border:none;
        color:#ffffff;

      }
     .text{
      text-align: left;
      font-size: 15px;
      p{
        white-space: nowrap;
        -webkit-margin-before:0;
        -webkit-margin-after:0.3em;
         color:#EAEBEC;
      }
     }
    }
 }
  #section4{
     background:
                url('~assets/images/face.png') no-repeat right 50% top 60%/700px 550px ,
                url('~assets/images/back2.png') no-repeat right 10% top 42%/600px 300px,
                url('~assets/images/gamebar.png') round ,;

      .pageleft{
       text-align: left;
       font-size: 16px;
       color:#F36978;
       margin-left: 70px;
      h1{
        letter-spacing: 0.1em;
      }
       button{
        width: 120px;
        height: 35px;
        background:transparent;
        margin-top: 10px;
        outline: none;
        box-shadow: none;
        border:none;
        color:#F36978;

      }
     .text{
      text-align: left;
      font-size: 15px;
      p{
        white-space: nowrap;
        -webkit-margin-before:0;
        -webkit-margin-after:0.3em;
         color:#727476;
      }
     }
    }
 }

</style>
