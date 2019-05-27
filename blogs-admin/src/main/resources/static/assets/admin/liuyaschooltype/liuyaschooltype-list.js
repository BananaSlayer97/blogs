/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyaschooltype_config":"admin/liuyaschooltype/liuyaschooltype-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyaschooltype_config"],function(){
    var config = $.extend(layui.liuyaschooltype_config,{
        childrenPage:[
            {
                tabTitle:"liuya_class",
                url:"admin/page/liuya_class/list",
                mcForeignName:"schoolId"
            },            {
                tabTitle:"用户表",
                url:"admin/page/liuya_user/list",
                mcForeignName:"schoolId"
            },            {
                tabTitle:"学校表",
                url:"admin/page/liuya_school/list",
                mcForeignName:"schoolId"
            }        ],
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',typeName:'type_name'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: 'id', minWidth:100, align:"center",sort:true},

            {field: 'typeName', title: '学校名字', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.typeName) +'" class="magicalcoder-table-text layui-input security_list_table_form_typeName" name="typeName" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify=""  placeholder="学校名字"/>'
                }
                , sort:true
            },
        {title: '操作', minWidth:250, templet:'#newsListOperateTemplate',fixed:"right",align:"center"}
    ]];
    //表格中的一些事件
    var tableEvent = {
        "tool":function (obj,roleId) {//操作部分的按钮
            return true;//不阻止事件继续执行封装的事件
        },
        "sort":function (obj,safeOrderBy) {//排序
            return true;//不阻止事件继续执行封装的事件
        }
    }
    magicalcoderlist.bindTableArea(cols,tableEvent)
    magicalcoderlist.bindAreaEvents();
})
