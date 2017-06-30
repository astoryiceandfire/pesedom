<template>
  <div class="custody">
 <bsnav text="使用协议和隐私政策" backgroundColor="#079AD0" :isShow= false></bsnav>
<div class="gamecontent">
    <img src="~assets/images/pukebg.jpg" alt="">
     <a id="down" href="http://www.pesedon.com/download/FishGame201703061125.apk"></a>  
</div>
<bsfooter></bsfooter>
  </div>
</template>

<script>
import bsnav from '@/components/bsnav'
import bsfooter from '@/components/bsfooter'
export default {

  data () {
    return {
      
    }
  },
  components:{
    bsnav,
    bsfooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.custody{
  background:#EAEFF5;
  width: 100%;
    height: 100%;
  .gamecontent{
    width: 100%;
    height: 100%;
    position:relative;
    img{
        width: 100%;
        height: 100%;
    }
        #down{
      display: inline-block;
      width: 230px;
      height: 100px;
      position:absolute;
      text-decoration:none;
      right:20%;
      top:60%;
       background:url('~assets/images/anniu.png') round;
      background-size:100% 100%;
      outline: none;
      border:none;
      &:hover{
        opacity:.8;
        // box-shadow:2px 2px 2px;
      }
      &:active{
         opacity:.6
      }
     }
  }


}
</style>
