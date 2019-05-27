 layui.use(['laypage', 'fly'], function(){
    	
	 var $ = layui.jquery;
	  var layer = layui.layer;
	  var util = layui.util;
	  var laytpl = layui.laytpl;
	  var form = layui.form;
	  var laypage = layui.laypage;
	  var upload = layui.upload;
	  var fly = layui.fly;
	  var device = layui.device();
                
        var data = { 
           
        };


     /*得到路径*/
     var onlineURL = $("#url").val();



     //加载头部区域
        $("#header").load("/html/common/header.html"); 
                       
        //加载底部区域
        $("#footer").load("/html/common/footer.html"); 
                    
           /**
            * 验证登录
            */
           $.getJSON(onlineURL+"/yauser/loginCheck",function(res) {            
           	
           	console.log("loginCheck"+res); 
           	console.log("loginCheck.userName"+res.userName); 
           	
           	data.user = res;
           	console.log("data.user.userName"+data.user.userName);
           	       	
//         	显示个人信息
   	        	var user_template = document.getElementById('user_template').innerHTML;   
   	            var  user = document.getElementById('user');
   	            
   	            laytpl(user_template).render(data, function(html){
   	            	user.innerHTML = html;
   	            });
   	            	       
           });
        
 });
