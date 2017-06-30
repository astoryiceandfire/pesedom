
<template>
<div>
  <nav class="nav">
    <div class="iconimg">
    <img src="~assets/images/icon14.png" alt="">
      </div>
    </nav>
    <div class="note" v-if="isShow" v-bind:style="{ background: backgroundColor}">
      <span class="notetext">{{text}}</span>
    </div>
    </div>
</template>
<script>
export default {
  props:{
    text:{
      type:String,
    },
    backgroundColor:{
      type:String,
      default:'#57A148',
    },
    isShow:{
      type:Boolean,
      default:true,
    }
  },

  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.note{
  width: 100%;
  height: 90px;
  position:relative;
  .notetext{
    position:absolute;
    color: #F3F8F2;
   left: 20%;
   bottom: 10px;
  }
}
.nav{
  width: 100%;
  height: 60px;
  background:#0F1014;
  .iconimg{
    display: inline-block;
     float:left;
    width: 200px;
    height: 60px; 
    margin-left:10%;
   
    img{
      margin-top:7px;
      height:45px;
    }
  }

}
</style>
