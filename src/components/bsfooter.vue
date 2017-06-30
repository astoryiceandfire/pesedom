
<template>

  <div class="zfooter">
    <div class="contacus">
   
      <a class="conticon" href='custody.html' target="_blank">
      <img src="~assets/images/icon_-parent.png" alt="">
      <span>家长监护</span>
      </a>
   
    <a class="conticon" href='agreement.html' target="_blank">
      <img src="~assets/images/icon_-user.png" alt="">
      <span>用户协议</span>
    </a>
    <a class="conticon" href='dispute.html' target="_blank">
      <img src="~assets/images/icon_-question.png" alt="">
      <span>纠纷处理</span>
    </a>
    <a class="conticon" href='vouchercenter.html'target="_blank">
      <img src="~assets/images/icon_-cooperate.png" alt="">
      <span>商务合作</span>
    </a>
  </div>
    <div class="company">
      <p class="name">深圳市波赛东网络科技有限公司 | 法律声明 | 隐私条款</p>
      <p class="name namebreak">粤ICP备16021288号-1 | 粤网文[2016]1240-264号</p>
      <p class="advice">抵制不良游戏,拒绝盗版游戏.注意自我保护,谨防受骗上当</p>
      <p class="advice">适度游戏益脑,沉迷游戏伤身.合理安排时间,享受健康生活</p>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    
  },

  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .zfooter{
    display: flex;
    justify-content: center;
    align-items:center;
    background: #15191D;
    font-size: 12px;
    color:#5B5B5B;
    padding: 40px 0;
    p{
    -webkit-margin-before: 0;
    -webkit-margin-after: 0.2em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    text-align: left;
    }
    .contacus{
      display: flex;
      padding-right:25px;
      .conticon{
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        align-items:center;
        justify-content: space-between;
        color:#5B5B5B;
        text-decoration: none;
        img{
          width: 30px;
          height: 30px;
        }
        span{
          margin-top: 1em;
        }
      }
    }
   .company{
     padding-left:25px;
    font-size:12px;
    // .name{
      
    // }
    .namebreak{
      -webkit-margin-after: 1em;
    }
    // .advice{
    //     // font-size:0.8em;
    // }

    
   }
  }

</style>
