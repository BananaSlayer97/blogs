
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


      	   form.on('submit(login)', function(datae){
					    	   	  		
					    	if(answer != $("#L_vercode").val()){
					    		layer.msg("你算错了吧？")
					    		 return false;
					    	 }
					    						    	
					    	console.log("登录前，登录的数据对象是："+JSON.stringify(datae.field));
					    						    					    	
					    	 
				        $.ajax({
				            url:onlineURL+'/user/post/login',
				            method:'post',
				            contentType:'application/json',
				            data:JSON.stringify(datae.field),
				            dataType:'json',
				            success:function(res){  
				            	
				            	console.log("登录返回结果，res:"+res)

					            	if(res>0){
					            					           
					            		layer.confirm('登录成功，欢迎你的登录！', {
					            			  btn: ['我知道了'] //按钮
					            			}, function(){
					            				window.location.href='index';//跳转页面
					            			});				            								            	
					            	}else{
					            		layer.confirm('登录失败！');
					            	}					            					            	  	          
				            	},
					            error:function (err) {
					            	layer.alert("什么鬼，可能服务器崩了！"+err);
					            }
				        })  
				        				        				     
				        return false;    
		    		});
      		return false;   
});
