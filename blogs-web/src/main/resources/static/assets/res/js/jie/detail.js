var url = decodeURI(window.location.href.split("?")[1]);
console.log("url:"+url);

var arr = url.split("="); //按等号分割
console.log("arr:"+arr);

var article_id = arr[1];
console.log("queryId:"+article_id);  //得到要查询的文章id
	


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

    /*post 请求*/
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });


    /*得到路径*/
    var onlineURL = $("#url").val();

    /*添加回复的时候，给隐藏框赋值要被评论的 id*/
    $("#objectId").val(article_id);


    /*文章详情*/
    $.getJSON(onlineURL+"/article/get/article/info","article_id="+article_id,function(res) {

        data.article =res;

        var article_info_template=document.getElementById('article_info_template').innerHTML;
        var  article_info = document.getElementById('article_info');

        laytpl(article_info_template).render(data, function(html){
            article_info.innerHTML = html;
        });


        /*获取作者的id*/
        $("#objectUser").val(res['user_id']);

    })


    /*本周热议*/
    $.getJSON(onlineURL+"/article/get/index/hots",function(res) {
        console.log("本周热议!")
        data.index_hots =res;
        var index_hots_template=document.getElementById('index_hots_template').innerHTML;
        var  index_hots = document.getElementById('index_hots');

        laytpl(index_hots_template).render(data, function(html){
            index_hots.innerHTML = html;
        });
    })


    /*得到文章评论列表*/
      $.getJSON(onlineURL+"/article/get/comment","type_id=1&object_id="+article_id,function(res) {

    	    data.comment= res;
    	    //循环赋值评论
            var article_comment_template = document.getElementById('article_comment_template').innerHTML;         
            var  article_comment = document.getElementById('article_comment');           
            laytpl(article_comment_template).render(data, function(html){
            	article_comment.innerHTML = html;
            });
        })

        //进行添加回复
        form.on('submit(addComment)', function(datae){

		       	 console.log("评论的内容是："+JSON.stringify(datae.field));

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

		       	 try{		       	   	
		               $.ajax({
		   	                url:onlineURL+'/article/post/comment',
		   	                method:'post',
		   	                contentType:'application/json',
		   	                data:JSON.stringify(datae.field),
		   	                dataType:'json',
		   	                success:function(res){

		   	                     // 添加成功后, 重新获取 评论此文章的评论，和评论人信息    	             	                	
                                $.getJSON(onlineURL+"/article/get/comment","type_id=1&object_id="+article_id,function(res) {

                                    data.comment= res;
                                    //循环赋值评论
                                    var article_comment_template = document.getElementById('article_comment_template').innerHTML;
                                    var  article_comment = document.getElementById('article_comment');
                                    laytpl(article_comment_template).render(data, function(html){
                                        article_comment.innerHTML = html;
                                    });
                                })
		   	                	 	                	
		   	                },
		   	                error:function (err) {
		   	                	console.log("评论出错:"+err);
		   	                }
		               	})

                     //添加成功后，清除
                     $("#L_content").attr("value","");

                 }catch (e) {
		   	        	console.log(e);
		   	    	}
       	    return false;     
           });

      /*防止样式没有被解析，重新进行加载*/


   });

