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


         /*所有标签*/
        $.getJSON(onlineURL+"/article/get/label",function(res) {
            console.log("所有标签")
            data.label = res;
            var label_template=document.getElementById('label_template').innerHTML;
            var  label = document.getElementById('label');
            laytpl(label_template).render(data, function(html){
                label.innerHTML = html;
            });
        })


         /*  置顶数据 */
         $.getJSON(onlineURL+"/article/get/index/tops",function(res) {
             console.log("置顶数据!")
             data.index_tops = res;

             var index_tops_template=document.getElementById('index_tops_template').innerHTML;
             var  index_tops = document.getElementById('index_tops');
             laytpl(index_tops_template).render(data, function(html){
                 index_tops.innerHTML = html;
             });
         })


         /* 推荐数据 */
        $.getJSON(onlineURL+"/article/get/index/recommends",function(res) {
            console.log("推荐数据!")
        	data.index_recommends = res;

        	var index_recommends_template=document.getElementById('index_recommends_template').innerHTML;

            var  index_recommends = document.getElementById('index_recommends');

            laytpl(index_recommends_template).render(data, function(html){

                index_recommends.innerHTML = html;
            });
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


        /*点击标签，加载相应标签的数据*/
         $("#label").on('click','.selectByLabel',function () {
            var label_id = $(this).val();
            $.getJSON(onlineURL+"/article/get/index/recommends","label_id="+label_id,function(res) {
                data.index_recommends = res;
                var index_recommends_template=document.getElementById('index_recommends_template').innerHTML;
                var  index_recommends = document.getElementById('index_recommends');
                laytpl(index_recommends_template).render(data, function(html){
                    index_recommends.innerHTML = html;
                });
            })
        })



});
