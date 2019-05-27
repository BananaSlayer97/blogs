/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyaclass_config":"admin/liuyaclass/liuyaclass-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyaclass_config"],function(){
    var config = $.extend(layui.liuyaclass_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',name:'name',schoolId:'school_id',teacher:'teacher',manage:'manage',createtime:'createtime'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: 'id', minWidth:100, align:"center",sort:true},

            {field: 'name', title: '班级名字', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.name) +'" class="magicalcoder-table-text layui-input security_list_table_form_name" name="name" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="班级名字"/>'
                }
                , sort:true
            },
                {field: 'schoolId', title: '学校', align:'center', minWidth:250, templet:function (d) {
                    var value = (!d.schoolId || d.schoolId==null) ? '' : d.schoolId
                    var option = '<option selected="selected" value="'+value+'">'+value+'</option>'
                    return '<select class="magicalcoder-table-foreign-select2 layui-input security_list_table_form_schoolId" lay-ignore="true"  name="schoolId" data-identify="'+d.id+'" data-value="" data-url="admin/liuya_school_type_rest/search" data-id="id" data-text-fields="id,typeName" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="学校">'+option+'</select>'
                    },sort:true
                },

            {field: 'teacher', title: '老师', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.teacher) +'" class="magicalcoder-table-text layui-input security_list_table_form_teacher" name="teacher" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="老师"/>'
                }
                , sort:true
            },

            {field: 'manage', title: '班主任', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.manage) +'" class="magicalcoder-table-text layui-input security_list_table_form_manage" name="manage" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="班主任"/>'
                }
                , sort:true
            },

            {field: 'createtime', title: '创建时间', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.createtime) +'" class="magicalcoder-table-text layui-input security_list_table_form_createtime" name="createtime" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="创建时间"/>'
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
