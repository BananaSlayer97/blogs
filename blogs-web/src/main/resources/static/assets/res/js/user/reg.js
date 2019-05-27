
layui.use(['laypage', 'fly','form'], function(){
	
	 var $ = layui.jquery;
	  var layer = layui.layer;
	  var util = layui.util;
	  var laytpl = layui.laytpl;
	  var form = layui.form;
	  var laypage = layui.laypage;
	  var upload = layui.upload;
	  var fly = layui.fly;
	  var device = layui.device();
	  
	  
    var data = {};
    

  	/*人类验证*/
     var x= Math.floor(Math.random()*100+1);
     var y= Math.floor(Math.random()*100+1);
     var question=""+x+"+"+y+"=?";
     var answer=x+y;
     $("#question").text(question);

    /*得到路径*/
    var onlineURL = $("#url").val();


    /*post 请求*/
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });

      /* 表单 */
 	  form.on('submit(reg)', function(userData){
 		  		 		  
            if(userData.field.userPassword != userData.field.repass){
                layer.msg("两次密码要一致哦！")
                return false;
            }
              if(answer != $("#L_vercode").val()){
                  layer.msg("你算错了吧？")
                  return false;
              }


          /*判断邮箱是否已经注册的结果*/
    	   $.get(onlineURL+"/user/check/email","email="+userData.field.email,function(result){
    		   if(result>0){
                       layer.tips('这个邮箱已经注册过了！', '#tips');
                       return false;
    		   }else{

    			   try {												
   				 	$.ajax({
   				            url:onlineURL+'/user/insert/user',
   				            method:'post',
   							 contentType:'application/json',
   							 data:JSON.stringify(userData.field),
   							 dataType:'json',
   							 success:function(res){
   					            	if(res>0){
   					            		layer.confirm('注册成功了，欢迎你的加入！', {
   					            			  btn: ['前去登录'] //按钮
   					            			}, function(){
   					            				window.location.href='user/login';//跳转页面
   					            			});				            								            	
   					            	}else{
   					            		layer.confirm('注册失败！');
   					            	}										
   							}										  							
   				 	 });
   				} catch (e) {
   					layer.alert(e);
   				}		  
    		   }
    	   })  	   	    				
				 	  return false;  		    
		  });		 	  
 	  return false;
});
