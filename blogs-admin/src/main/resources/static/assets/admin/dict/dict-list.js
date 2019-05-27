/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"dict_config":"admin/dict/dict-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","dict_config"],function(){
    var config = $.extend(layui.dict_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',dictCategory:'dict_category',code:'code',name:'name',parentId:'parent_id',createTime:'create_time',updateTime:'update_time',orderNo:'order_no'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: '主键', minWidth:100, align:"center",sort:true},

            {field: 'dictCategory', title: '字典大类', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.dictCategory) +'" class="magicalcoder-table-text layui-input security_list_table_form_dictCategory" name="dictCategory" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify=""  placeholder="字典大类"/>'
                }
                , sort:true
            },

            {field: 'code', title: '编码', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.code) +'" class="magicalcoder-table-text layui-input security_list_table_form_code" name="code" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify=""  placeholder="编码"/>'
                }
                , sort:true
            },

            {field: 'name', title: '名称', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.name) +'" class="magicalcoder-table-text layui-input security_list_table_form_name" name="name" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify=""  placeholder="名称"/>'
                }
                , sort:true
            },

            {field: 'parentId', title: '所属父类', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.parentId) +'" class="magicalcoder-table-text layui-input security_list_table_form_parentId" name="parentId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="所属父类"/>'
                }
                , sort:true
            },

            {field: 'createTime', title: '创建时间', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.createTime) +'" class="magicalcoder-table-text layui-input security_list_table_form_createTime" name="createTime" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify=""  placeholder="创建时间"/>'
                }
                , sort:true
            },

            {field: 'updateTime', title: '更新时间', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.updateTime) +'" class="magicalcoder-table-text layui-input security_list_table_form_updateTime" name="updateTime" data-identify="'+d.id+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify=""  placeholder="更新时间"/>'
                }
                , sort:true
            },
            {field: 'orderNo', title: '序号',minWidth:350, align:'center', templet:'#orderNoTemplate',sort:true},
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
