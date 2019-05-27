
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
	  var web = layui.web;
                
        var data = {};

         /*得到路径*/
         var onlineURL = $("#url").val();

         /*得到登陆人的id*/
         var user_id = $("#user_id").val();


     $.getJSON(onlineURL+"/user/get/user","user_id="+user_id,function(res) {
         data.user = res;
     });

        /*我的基本信息*/
        $("#info").click(function () {

            $("#title").text("");
            var publish_template=document.getElementById('info_template').innerHTML;

            var  container = document.getElementById('container');
                laytpl(publish_template).render(data, function(html){
                    container.innerHTML = html;
                });
        })

        /*我的发表*/
        $("#publish").click(function () {

            $.getJSON(onlineURL+"/user/get/publish","user_id="+user_id,function(res) {
                data.publish = res;

                $("#title").text("我的发布数量:"+res.length)

                var publish_template=document.getElementById('publish_template').innerHTML;

                var  container = document.getElementById('container');
                laytpl(publish_template).render(data, function(html){
                    container.innerHTML = html;
                });
            })
        });

        /* 我的收藏 */
        $("#collect").click(function () {

                 $.getJSON(onlineURL+"/user/get/collects","user_id="+user_id,function(res) {

                     data.collect = res;

                     $("#title").text("我的收藏数量:"+res.length)

                     var collect_template=document.getElementById('collect_template').innerHTML;

                     var  container = document.getElementById('container');
                     laytpl(collect_template).render(data, function(html){
                         container.innerHTML = html;
                     });
                 })
         });

        /*我的消息 ，*/
        $("#message").click(function () {

            $.getJSON(onlineURL+"/user/get/message","user_id="+user_id,function(res) {
                data.message = res;
                $("#title").text("我的消息总数量:"+res.length);

                var message_template=document.getElementById('message_template').innerHTML;
                var  container = document.getElementById('container');
                laytpl(message_template).render(data, function(html){
                    container.innerHTML = html;
                });
            })
        })

        /*基本设置*/
         $("#set").click(function () {

             $("#title").text("");

                 var set_template=document.getElementById('set_template').innerHTML;
                 var  container = document.getElementById('container');
                 laytpl(set_template).render(data, function(html){
                     container.innerHTML = html;
             })
         })

        /*我的关注*/
        $("#follow").click(function () {
            $.getJSON(onlineURL+"/user/get/follow","user_id="+user_id,function(res) {

                $("#title").text("我关注的人数:"+res.length);

                data.follow =  res;

                var follow_template=document.getElementById('follow_template').innerHTML;
                var  container = document.getElementById('container');
                laytpl(follow_template).render(data, function(html){
                    container.innerHTML = html;
                });

            })
        })


        /*我的粉丝*/
        $("#fans").click(function () {
            $.getJSON(onlineURL+"/user/get/fans","user_id="+user_id,function(res) {
                $("#title").text("我的粉丝数:"+res.length);

                data.fans =  res;

                var fans_template=document.getElementById('fans_template').innerHTML;
                var  container = document.getElementById('container');
                laytpl(fans_template).render(data, function(html){
                    container.innerHTML = html;
                });
            })
        })


    });
