/**

 @Name: 案例

 */
 
layui.define(['laypage', 'fly'], function(exports){

  var $ = layui.jquery;
  var layer = layui.layer;
  var util = layui.util;
  var laytpl = layui.laytpl;
  var form = layui.form;
  var laypage = layui.laypage;
  var upload = layui.upload;
  var fly = layui.fly;
  var device = layui.device();
  

  //求解管理
  var active = {
    //提交案例
    push: function(div){
      layer.open({
        type: 1
        ,id: 'LAY_pushcase'
        ,title: '题库贡献'
        ,area: (device.ios || device.android) ? ($(window).width() + 'px') : '660px'
        ,content: ['<ul class="layui-form" style="margin: 20px;">'
          ,'<li class="layui-form-item">'
            ,'<label class="layui-form-label">题目问题</label>'
            ,'<div class="layui-input-block">'
              ,'<input required name="title" lay-verify="required" placeholder="请填写题目的标题：" value="" class="layui-input">'
            ,'</div>'
          ,'</li>'
          ,'<li class="layui-form-item">'
            ,'<label class="layui-form-label">题目类型</label>'
            ,'<div class="layui-input-block">'
              ,'<input required name="link" lay-verify="required" placeholder="题目的分类，例如JAVA,或者C#" value="" class="layui-input">'
            ,'</div>'
          ,'</li>'
          ,'<li class="layui-form-item layui-form-text">'
            ,'<label class="layui-form-label">题目答案</label>'
            ,'<div class="layui-input-block layui-form-text">'
              ,'<textarea required name="desc" lay-verify="required" autocomplete="off" placeholder="可以写的详详细细，也可以写的简明扼要。" class="layui-textarea"></textarea>'
            ,'</div>'
          ,'</li>'
          ,'<li class="layui-form-item">'
            ,'<label class="layui-form-label"> </label>'
            ,'<div class="layui-input-block">'
              ,'<input type="checkbox" name="agree" id="agree" title="我知道了<br/>（为保证题库安全质量， 你的提交会进行审核，如果通过会有EQ值奖励。）" lay-skin="primary">'
            ,'</div>'
          ,'</li>'
          ,'<li class="layui-form-item">'
            ,'<div class="layui-input-block">'
              ,'<button type="button" lay-submit lay-filter="pushCase" class="layui-btn">提交案例</button>'
           ,'</div>'
          ,'</li>'
        ,'</ul>'].join('')
        ,success: function(layero, index){
        
          form.render('checkbox').on('submit(pushCase)', function(data){
            if(!data.field.agree){
              return layer.tips('你需要同意才能提交', $('#agree').next(), {tips: 1});
            }

            fly.json('/case/push/', data.field, function(res){
              layer.close(index);
              layer.alert(res.msg, {
                icon: 1
              })
            });
          });
        }
      });
    }
    
    //点赞
    ,praise: function(othis){
      var li = othis.parents('li')
      ,PRIMARY = 'layui-btn-primary'
      ,unpraise = !othis.hasClass(PRIMARY)
      ,numElem = li.find('.fly-case-nums')

      fly.json('/case/praise/', {
        id: li.data('id')
        ,unpraise: unpraise ? true : null
      }, function(res){
        numElem.html(res.praise);
        if(unpraise){
          othis.addClass(PRIMARY).html('点赞');
          layer.tips('少了个赞囖', numElem, {
            tips: 1
          });
        } else {
          othis.removeClass(PRIMARY).html('已赞');
          layer.tips('成功获得个赞', numElem, {
            tips: [1, '#FF5722']
          });
        }
      });
    }

    //查看点赞用户
    ,showPraise: function(othis){
      var li = othis.parents('li');
      if(othis.html() == 0) return layer.tips('该项目还没有收到赞', othis, {
        tips: 1
      });
      fly.json('/case/praise_user/', {
        id: li.data('id')
      }, function(res){
        var html = '';
        layer.open({
          type: 1
          ,title: '项目【'+ res.title + '】获得的赞'
          ,id: 'LAY_showPraise'
          ,shade: 0.8
          ,shadeClose: true
          ,area: '305px'
          ,skin: 'layer-ext-case'
          ,content: function(){
            layui.each(res.data, function(_, item){
              html += '<li><a href="/u/'+ 168*item.id +'/" target="_blank" title="'+ item.username +'"><img src="'+ item.avatar +'"></a></li>'
            });
            return '<ul class="layer-ext-ul">' + html + '</ul>';
          }()
        })
      });
    }
  };

  $('body').on('click', '.fly-case-active', function(){
    var othis = $(this), type = othis.data('type');
    active[type] && active[type].call(this, othis);
  });

  exports('case', {});
});