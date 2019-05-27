/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyaexamcomment_config":"admin/liuyaexamcomment/liuyaexamcomment-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyaexamcomment_config"],function(){
    var config = $.extend(layui.liuyaexamcomment_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',userId:'user_id',examId:'exam_id',commentContent:'comment_content',commentUpNumber:'comment_up_number',commentAccept:'comment_accept',commentCreatetime:'comment_createtime',commentDownNumber:'comment_down_number'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: '评论id,', minWidth:100, align:"center",sort:true},

            {field: 'userId', title: '用户的id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.userId) +'" class="magicalcoder-table-text layui-input security_list_table_form_userId" name="userId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的id"/>'
                }
                , sort:true
            },

            {field: 'examId', title: '题目的id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.examId) +'" class="magicalcoder-table-text layui-input security_list_table_form_examId" name="examId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="题目的id"/>'
                }
                , sort:true
            },

            {field: 'commentContent', title: '评论的内容', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.commentContent) +'" class="magicalcoder-table-text layui-input security_list_table_form_commentContent" name="commentContent" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="评论的内容"/>'
                }
                , sort:true
            },

            {field: 'commentUpNumber', title: '评论的点赞数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.commentUpNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_commentUpNumber" name="commentUpNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="评论的点赞数"/>'
                }
                , sort:true
            },

            {field: 'commentAccept', title: '是否被采纳', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.commentAccept) +'" class="magicalcoder-table-text layui-input security_list_table_form_commentAccept" name="commentAccept" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="是否被采纳"/>'
                }
                , sort:true
            },

            {field: 'commentCreatetime', title: '评论的创建时间', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.commentCreatetime) +'" class="magicalcoder-table-text layui-input security_list_table_form_commentCreatetime" name="commentCreatetime" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="评论的创建时间"/>'
                }
                , sort:true
            },

            {field: 'commentDownNumber', title: '文章的踩', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.commentDownNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_commentDownNumber" name="commentDownNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的踩"/>'
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
