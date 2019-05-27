
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

     /*得到路径*/
     var onlineURL = $("#url").val();


     /*post 请求*/
     var token = $("meta[name='_csrf']").attr("content");
     var header = $("meta[name='_csrf_header']").attr("content");
     $(document).ajaxSend(function(e, xhr, options) {
         xhr.setRequestHeader(header, token);
     });


     /*人类验证*/
     var x= Math.floor(Math.random()*100+1);
     var y= Math.floor(Math.random()*100+1);
     var question=""+x+"+"+y+"=?";
     var answer=x+y;
      $("#question").text(question);

     /*所有标签*/
     $.getJSON(onlineURL+"/article/get/label",function(res) {
         console.log("所有标签")
         for(var i=0; i<res.length;i++){
             $("#selectId").append("<option value='"+res[i].id+"'>"+res[i].label_name+"</option>");
         }
         /*重新渲染*/
         form.render();
     })



        //进行添加题目
     form.on('submit(add)', function(datae){

             if(answer != $("#L_vercode").val()){
                 layer.msg("你算错了吧？")
                 return false;
             }

	        $.get(onlineURL+'/user/get/login',function (check) {
                if(check == false){
                    layer.confirm('请先去登录，才能发送文章', {
                        btn: ['现在就去登录']
                    }, function(){
                        window.location.href='user/login';
                    });
                    return false;
                 }
             })

    	 console.log("将要添加的问题是："+JSON.stringify(datae.field));
        try{
	            $.ajax({
		                url:onlineURL+'/article/post/article',
		                method:'post',
		                contentType:'application/json',
		                data:JSON.stringify(datae.field),
		                dataType:'json',
		                success:function(res){

		                	if(res>0){
		                		//询问框
		                		layer.confirm('添加成功，是否继续添加？', {
		                		  btn: ['那时自然','我先歇歇'] //按钮
		                		}, function(){
		                						//刷新表单
		                			window.location.href='jie/add';
		                		}, function(){
		                			window.location.href='index';//跳转页面
		                		});

		                	}else{
		                		layer.msg("添加失败！")
		                	}
		                },
		                error:function (err) {
		                	console.log(err);
		                }
	            	})
	        }catch (e) {
	        	console.log(e);
	    	}
    	    return false;
        });
     return false;     
   });

       
