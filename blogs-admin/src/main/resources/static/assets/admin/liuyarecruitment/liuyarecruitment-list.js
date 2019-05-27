/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyarecruitment_config":"admin/liuyarecruitment/liuyarecruitment-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyarecruitment_config"],function(){
    var config = $.extend(layui.liuyarecruitment_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',name:'name',content:'content',companyId:'company_id',userId:'user_id',createtime:'createtime',status:'status'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: 'id', minWidth:100, align:"center",sort:true},

            {field: 'name', title: '职位名字', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.name) +'" class="magicalcoder-table-text layui-input security_list_table_form_name" name="name" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="职位名字"/>'
                }
                , sort:true
            },

            {field: 'content', title: '招聘内容', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.content) +'" class="magicalcoder-table-text layui-input security_list_table_form_content" name="content" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="招聘内容"/>'
                }
                , sort:true
            },

            {field: 'companyId', title: '公司id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.companyId) +'" class="magicalcoder-table-text layui-input security_list_table_form_companyId" name="companyId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="公司id"/>'
                }
                , sort:true
            },

            {field: 'userId', title: '发布人id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.userId) +'" class="magicalcoder-table-text layui-input security_list_table_form_userId" name="userId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="发布人id"/>'
                }
                , sort:true
            },

            {field: 'createtime', title: '创建时间', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.createtime) +'" class="magicalcoder-table-text layui-input security_list_table_form_createtime" name="createtime" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="创建时间"/>'
                }
                , sort:true
            },

            {field: 'status', title: '招聘状态', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.status) +'" class="magicalcoder-table-text layui-input security_list_table_form_status" name="status" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="招聘状态"/>'
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
