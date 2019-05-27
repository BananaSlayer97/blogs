/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyaexam_config":"admin/liuyaexam/liuyaexam-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyaexam_config"],function(){
    var config = $.extend(layui.liuyaexam_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',examTitle:'exam_title',examContent:'exam_content',examCreatetime:'exam_createtime',userId:'user_id',examTypeId:'exam_type_id',examPageView:'exam_page_view',examUpNumber:'exam_up_number',examCheckStatus:'exam_check_status',examCommentNumber:'exam_comment_number'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: '问题的唯一id', minWidth:100, align:"center",sort:true},

            {field: 'examTitle', title: '问题的标题', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examTitle) +'" class="magicalcoder-table-text layui-input security_list_table_form_examTitle" name="examTitle" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的标题"/>'
                }
                , sort:true
            },

            {field: 'examContent', title: '问题的内容', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examContent) +'" class="magicalcoder-table-text layui-input security_list_table_form_examContent" name="examContent" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的内容"/>'
                }
                , sort:true
            },

            {field: 'examCreatetime', title: '问题的创建时间', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examCreatetime) +'" class="magicalcoder-table-text layui-input security_list_table_form_examCreatetime" name="examCreatetime" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的创建时间"/>'
                }
                , sort:true
            },

            {field: 'userId', title: '问题的创建人', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.userId) +'" class="magicalcoder-table-text layui-input security_list_table_form_userId" name="userId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的创建人"/>'
                }
                , sort:true
            },

            {field: 'examTypeId', title: '问题的类型', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examTypeId) +'" class="magicalcoder-table-text layui-input security_list_table_form_examTypeId" name="examTypeId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的类型"/>'
                }
                , sort:true
            },

            {field: 'examPageView', title: '问题的浏览量', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examPageView) +'" class="magicalcoder-table-text layui-input security_list_table_form_examPageView" name="examPageView" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的浏览量"/>'
                }
                , sort:true
            },

            {field: 'examUpNumber', title: '问题的点赞数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examUpNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_examUpNumber" name="examUpNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的点赞数"/>'
                }
                , sort:true
            },

            {field: 'examCheckStatus', title: '问题的验证状态', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examCheckStatus) +'" class="magicalcoder-table-text layui-input security_list_table_form_examCheckStatus" name="examCheckStatus" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的验证状态（0待验证，1是，2否）"/>'
                }
                , sort:true
            },

            {field: 'examCommentNumber', title: '问题的评论数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examCommentNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_examCommentNumber" name="examCommentNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="问题的评论数"/>'
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
