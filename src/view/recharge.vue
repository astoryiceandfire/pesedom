<template>
  <div class="custody">
 <bsnav text="充值中心" backgroundColor="#E9D14F"></bsnav>
<!-- content -->
<div class="recharge_page fixed" id="main">
  <div class="rec_side">
    <ul class="rec_menubox">
            <li class="menu_list  first-child" data-payChannel="YEEPAY_BANK">
        <a href="#YEEPAY_BANK" class="menu">
          <em class="icon16 icon_YEEPAY_BANK"></em>
          <span class="name">网上银行(易宝)</span>
        </a>
      </li>
            <li class="menu_list " data-payChannel="ALIPAY_DIRECT">
        <a href="#ALIPAY_DIRECT" class="menu">
          <em class="icon16 icon_ALIPAY_DIRECT"></em>
          <span class="name">支付宝支付</span>
        </a>
      </li>
            <li class="menu_list " data-payChannel="UCHANG_WECHATQRCODE">
        <a href="#UCHANG_WECHATQRCODE" class="menu">
          <em class="icon16 icon_UCHANG_WECHATQRCODE"></em>
          <span class="name">微信扫码支付</span>
        </a>
      </li>
  
  
    </ul>
  </div>
  <div class="main_cc">
    <!--基本资料 basic -->
    <div class="rec_t_list" data-block="basic" >
      <ul class="form_box">
        <li class="form_list big_form recharge_to fixed">
          <label class="tr_tn">充值到：</label>
          <dl class="slide_radio fixed" data-tab data-tabname="rechargeTo" data-nodefaulttab>
         
            <dd class="rechargeTo_tab" style="background:#2189C6;color:white;border-radius:0.1em">游戏</dd>
          
          </dl>
        </li>
        <li class="form_list big_form fixed game_server">
          <label class="tr_tn">选择游戏：</label>
          <div class="option_box_parent" style="width:120px;height:40px">
           <select style="width:100%;height:100%">
            <option value="德州扑克">德州扑克</option>
             <option value="捕鱼">捕鱼</option>
              <option value="煮公来了">煮公来了</option>
              
           </select>
          </div>
        </li>
       
      
        <li class="user_editor form_list fixed">
          <label class="tr_tn">充值帐号：</label>
          <div class="input_box">
            <input name="username" class="input_txt input_w2" id="username" type="text" value=""/>
          </div>
          <!-- <a class="button_a white_button">确定</a> -->
        </li>
      </ul>
    </div>
    <!--手机号 mobile -->
    <div class="rec_t_list" data-block="mobile" >
      <ul class="form_box">
        <li class="form_list fixed">
          <label class="tr_tn" for="mobile">手机号：</label>
          <div class="input_box">
            <input name="mobile" class="input_txt input_w2 mobile_num" id="mobile" type="text" title="手机号码" datatype="m" ignore="ignore" sucmsg=" " nullmsg="请填写手机号码" errormsg="输入格式不正确">
          </div>
        </li>
      </ul>
    </div>
   
   
    <!--填写金额 money-->
    <div class="rec_t_list" data-block="money" >
      <ul class="form_box">
        <li class="form_list big_form fui_intensifybox fixed">
          <label class="tr_tn">充值金额：</label>
          <div class="option_box_parent">
            <ul class="option_box fui_intensify box_w1 fixed" data-radio="money">
                <template v-for="item in chargearr">
                  <li class="option_list" :class="[secletLI == item?'fui_checked_box':'']" @click="choseli(item)">
                  <input class="radio_a" value="5" type="radio" id="money5" name="money">
                  <label class="fui_radio fui_radio_checked"></label>
                  <label class="option_label">{{item}}</label>
                </li>
                </template>
           
                
            </ul>
          </div>
        </li>
      </ul>
    </div>
   <div class="rec_t_list submit_block">
      <ul class="form_box">
        <li class="form_list fsbbox_list submit_box fixed">
          <label class="tr_tn">&nbsp;</label>
          <a class="button_a blue_button recharge_btn" @click="tishi">立即充值</a>
        </li>
      </ul>
    </div>


  
    </div>
    </div>
 
<bsfooter></bsfooter>
<!-- content -->
  </div>
</template>


<script>
 
import bsnav from '@/components/bsnav'
import bsfooter from '@/components/bsfooter'
export default {

  data () {
    return {
       secletLI:5,
       chargearr:[5,20,30,50,100,200,300,500,1000,2000,3000,5000],
    }
  },
  components:{
    bsnav,
    bsfooter,
  },
  methods:{
    choseli(index){
        this.secletLI = index
    },
    tishi(){
      window.alert('暂未开放')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.custody{
	background:#EAEFF5;
	// min-height:100vh;
	.article{
		width:60%;
		margin:50px auto;
		font-size: 14px;
		color:#5f5f5f;
		.title{
	text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 34px;
    padding-top: 10px;
		}
		

	}

}
</style>
