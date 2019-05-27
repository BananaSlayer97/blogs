var url = decodeURI(window.location.href.split("?")[1]);
var arr = url.split("="); //按等号分割
var user_id = arr[1];
console.log("user_id="+user_id);

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
                
        var data = {};


            /*得到路径*/
            var onlineURL = $("#url").val();


         /*根据id 查询此人的信息*/
         $.getJSON(onlineURL+"/user/get/user","user_id="+user_id,function(res) {
            data.user = res;
            var user_template = document.getElementById('user_template').innerHTML;
            var  user = document.getElementById('user');
            laytpl(user_template).render(data, function(html){
                user.innerHTML = html;
            });
       });


          /*  查看此人所发的文章*/
           $.getJSON(onlineURL+"/user/get/publish","user_id="+user_id,function(res) {
               	data.articles = res;
	           var articles_template = document.getElementById('articles_template').innerHTML;   
	           var  articles = document.getElementById('articles');
	           laytpl(articles_template).render(data, function(html){
	        	   articles.innerHTML = html;
	           });
           });        
           
           
           
 //       查看此人的回答信息
           $.getJSON(onlineURL+"/user/get/commons","user_id="+user_id,function(res) {
               	data.commons = res;
	           var commons_template = document.getElementById('commons_template').innerHTML;   
	           var  commons = document.getElementById('commons');
	           laytpl(commons_template).render(data, function(html){
	        	   commons.innerHTML = html;
	           });
           });

           /*进行关注*/

            $("#addFriend").click(function () {

                $.post(onlineURL+"/user/update/follow","follow_id="+user_id,function(res) {
                    if(res > 0 ){
                        layer.msg("关注成功!")
                    }else{
                        layer.msg("关注失败!")
                    }
                })
            })
 });
