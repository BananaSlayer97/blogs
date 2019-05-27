var url = decodeURI(window.location.href.split("?")[1]);
console.log("url:"+url);

var arr = url.split("=");       //按等号分割
console.log("arr:"+arr);

var typeId = arr[1];    
console.log("typeId:"+typeId);  //得到要查询的分类id


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
          "typeId":typeId,
          "user":"",   
          "right_hot":[]
        };

         /*得到路径*/
        var onlineURL = $("#url").val();


        
        /*right_hot 请求 本周热议 后台数据 */
        $.getJSON(onlineURL+"/yaarticle/getHotThisWeek",function(res) {        	
        	
             data.right_hot =res;
              
            var right_hot_template =document.getElementById('right_hot_template').innerHTML;
            var  right_hot = document.getElementById('right_hot');
            
            laytpl(right_hot_template).render(data, function(html){
           	 right_hot.innerHTML = html;
            });
            
        })
        
        
//      进行判断是何种类型，进行查询显示        
        $.getJSON(onlineURL+"/yaarticle/getArticleInfos","typeId="+typeId,function(res) {                     
      	   
        	data.infos = res;
        	
        	
	        	var infos_template = document.getElementById('infos_template').innerHTML;   
	            var infos = document.getElementById('infos');
	            
	            laytpl(infos_template).render(data, function(html){
	            	infos.innerHTML = html;
	            });
                  	
         });
        
                             
 });
