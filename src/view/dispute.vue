<template>
  <div class="custody">
 <bsnav text="纠纷处理" backgroundColor="#E9D14F"></bsnav>
<!-- content -->
<div class="article">
            <div class="title">纠纷处理</div>
            <div class="note"></div>
            <div class="content">
                <!--页面主要内容-->
                <p>深圳市波赛东网络科技有限公司营运的波赛东游戏平台（以下简称波赛东）在此特别提醒用户在注册、登陆本网络游戏前请务必仔细阅读本《纠纷处理》及<a href="http://www.pesedon.com/agreement.html">《波赛东用户使用协议》</a>（未成年人应当在其法定监护人陪同下阅读）中的各个条款，以确保您在享受本网络游戏服务的同时维护自身合法权益：</p>
				<p>&nbsp;</p>
				<h3>一、用户之间纠纷处理方式</h3>
				<p>1．波赛东仅作为本网络游戏的运营商，如若本网络游戏用户之间发生纠纷且无法协商一致的，可向国家相关行政机关或司法机关寻求解决包括但不限于向公安机关报案、申请仲裁或向人民法院提起诉讼等。波赛东将会为实名注册用户提供必要的协助和支持，并根据有关行政机关和司法机关的要求承担一定的举证责任或采取必要措施。</p>
				<p>2．本网络游戏用户之间发生纠纷的，也可向波赛东的客服人员投诉并举证。用户需提供与其账号注册信息一致的个人有效身份证件、必要的国家行政或司法机关文件和其他波赛东要求提供的相关证据。经波赛东审核确认后，可以给予必要的协助和支持。</p>
				<p>&nbsp;</p>
				<h3>二、用户与波赛东之间纠纷处理方式</h3>
				<p>1．如本网络游戏用户对波赛东的服务有任何异议的，可以向波赛东的客服人员投诉并举证。查证属实的，波赛东将立即更正并按照现行法律规定给予用户必要的补偿。</p>
				<p>2．如本网络游戏用户对波赛东的服务有任何异议的，也可以向双方约定（具体参见<a href="http://www.pesedon.com/agreement.html">《波赛东用户使用协议》</a>）的波赛东公司所在地人民法院提起诉讼。</p>
                <!--页面主要内容-->
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
