/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/
layui.config({base : "assets/"}).extend({"liuyaregion_config":"admin/liuyaregion/liuyaregion-config","magicalcoderedit" : "magicalcoder/v001/rmp/magicalcoderedit"})
layui.use(["liuyaregion_config","magicalcoderedit"],function(){
    var magicalcoderedit = layui.magicalcoderedit(layui.liuyaregion_config);
    //在提交表单前执行回调方法
    var submitBeforeCallBack = function (postData) {
        return true;//则继续提交
    }
    magicalcoderedit.bindFormArea();
    magicalcoderedit.submitEvents(submitBeforeCallBack);
})
