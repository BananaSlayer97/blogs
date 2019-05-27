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
           "user":[]
        };
        
        //运行环境
        /*    var onlineURL = 'http://47.100.235.58';     
        */        
                //测试环境
         var onlineURL = 'http://localhost:18088/youyaboot-web/web/';  

         
         
         

                     
           /**
            * 验证登录
            */
           $.getJSON(onlineURL+"/yauser/loginCheck",function(res) {            
           	
           	console.log("loginCheck"+res); 
           	console.log("loginCheck.userName"+res.userName); 
           	
           	data.user = res;
           	console.log("data.user.userName"+data.user.userName);
           	       	
//          	显示个人信息
   	        	var user_template = document.getElementById('user_template').innerHTML;   
   	            var  user = document.getElementById('user');
   	            
   	            laytpl(user_template).render(data, function(html){
   	            	user.innerHTML = html;
   	            });
   	        
   	            
//   	             显示邮箱信息
	        	var email_template = document.getElementById('email_template').innerHTML;   
	            var  email = document.getElementById('email');
	            
	            laytpl(email_template).render(data,function(html){
	            	email.innerHTML = html;
	            });
		      
   	            
   	         
   		      var user_id = res.id;
   		     		      
   		      //进行追加
   		      var  myhome = " <li class='layui-nav-item'><a href='home.html?id="+user_id+"'><i class='layui-icon'>&#xe609;</i>我的主页 </a></li>";      
   		      $("#myhome").append(myhome);
   		            	             		   		  
   		      
           });
        
 });
