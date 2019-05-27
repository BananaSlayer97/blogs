/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyaarticle_config":"admin/liuyaarticle/liuyaarticle-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyaarticle_config"],function(){
    var config = $.extend(layui.liuyaarticle_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',userId:'user_id',title:'title',labelType:'label_type',createtime:'createtime',status:'status',up:'up',pageView:'page_view',commentNumber:'comment_number',tread:'tread',changeTime:'change_time'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: '文章类型id', minWidth:100, align:"center",sort:true},

            {field: 'userId', title: '文章的编写者id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.userId) +'" class="magicalcoder-table-text layui-input security_list_table_form_userId" name="userId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的编写者id"/>'
                }
                , sort:true
            },

            {field: 'title', title: '文章的标题', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.title) +'" class="magicalcoder-table-text layui-input security_list_table_form_title" name="title" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的标题"/>'
                }
                , sort:true
            },
                {field: 'labelType', title: '标签的类型，', align:'center', minWidth:250, templet:function (d) {
                    var value = (!d.labelType || d.labelType==null) ? '' : d.labelType
                    var option = '<option selected="selected" value="'+value+'">'+value+'</option>'
                    return '<select class="magicalcoder-table-foreign-select2 layui-input security_list_table_form_labelType" lay-ignore="true"  name="labelType" data-identify="'+d.id+'" data-value="" data-url="admin/liuya_label_rest/search" data-id="id" data-text-fields="id,labelName" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="标签的类型，">'+option+'</select>'
                    },sort:true
                },
            {field: 'createtime', title: '文章的创建时间', align:'center', minWidth:250, templet :"#createtimeTemplate",sort:true},

            {field: 'status', title: '文章的验证状态', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.status) +'" class="magicalcoder-table-text layui-input security_list_table_form_status" name="status" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的验证状态（0待验证，1是，2否）"/>'
                }
                , sort:true
            },

            {field: 'up', title: '文章的点赞数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.up) +'" class="magicalcoder-table-text layui-input security_list_table_form_up" name="up" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的点赞数"/>'
                }
                , sort:true
            },

            {field: 'pageView', title: '文章的浏览量', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.pageView) +'" class="magicalcoder-table-text layui-input security_list_table_form_pageView" name="pageView" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的浏览量"/>'
                }
                , sort:true
            },

            {field: 'commentNumber', title: '文章的评论数量', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.commentNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_commentNumber" name="commentNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的评论数量"/>'
                }
                , sort:true
            },

            {field: 'tread', title: '文章的踩数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.tread) +'" class="magicalcoder-table-text layui-input security_list_table_form_tread" name="tread" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="文章的踩数"/>'
                }
                , sort:true
            },
            {field: 'changeTime', title: '文章的更改时间', align:'center', minWidth:250, templet :"#changeTimeTemplate",sort:true},
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
