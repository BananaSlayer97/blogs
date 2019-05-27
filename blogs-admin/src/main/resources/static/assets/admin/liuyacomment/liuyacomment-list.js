/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyacomment_config":"admin/liuyacomment/liuyacomment-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyacomment_config"],function(){
    var config = $.extend(layui.liuyacomment_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',userId:'user_id',commentType:'comment_type',objectId:'object_id',content:'content',up:'up',tread:'tread',createtime:'createtime',objectUser:'object_user'
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
                {field: 'commentType', title: '评论类型', align:'center', minWidth:250, templet:function (d) {
                    var value = (!d.commentType || d.commentType==null) ? '' : d.commentType
                    var option = '<option selected="selected" value="'+value+'">'+value+'</option>'
                    return '<select class="magicalcoder-table-foreign-select2 layui-input security_list_table_form_commentType" lay-ignore="true"  name="commentType" data-identify="'+d.id+'" data-value="" data-url="admin/liuya_type_rest/search" data-id="id" data-text-fields="id,typeName" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="评论类型">'+option+'</select>'
                    },sort:true
                },

            {field: 'objectId', title: '被评论者id，可能是视频，可能是文章，所以有重复的可能，所有查询大多要两条件', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.objectId) +'" class="magicalcoder-table-text layui-input security_list_table_form_objectId" name="objectId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="被评论者id，可能是视频，可能是文章，所以有重复的可能，所有查询大多要两条件"/>'
                }
                , sort:true
            },

            {field: 'content', title: '评论的内容', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.content) +'" class="magicalcoder-table-text layui-input security_list_table_form_content" name="content" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="评论的内容"/>'
                }
                , sort:true
            },

            {field: 'up', title: '点赞数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.up) +'" class="magicalcoder-table-text layui-input security_list_table_form_up" name="up" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="点赞数"/>'
                }
                , sort:true
            },

            {field: 'tread', title: '踩数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.tread) +'" class="magicalcoder-table-text layui-input security_list_table_form_tread" name="tread" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="踩数"/>'
                }
                , sort:true
            },

            {field: 'createtime', title: '评论时间', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.createtime) +'" class="magicalcoder-table-text layui-input security_list_table_form_createtime" name="createtime" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="评论时间"/>'
                }
                , sort:true
            },

            {field: 'objectUser', title: '被评论人的id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.objectUser) +'" class="magicalcoder-table-text layui-input security_list_table_form_objectUser" name="objectUser" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="被评论人的id"/>'
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
