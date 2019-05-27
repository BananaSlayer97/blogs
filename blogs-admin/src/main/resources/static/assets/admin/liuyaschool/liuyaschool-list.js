/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyaschool_config":"admin/liuyaschool/liuyaschool-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyaschool_config"],function(){
    var config = $.extend(layui.liuyaschool_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',schoolId:'school_id',headportrait:'headportrait',backgroundImg:'background_img',signature:'signature',password:'password',email:'email',phone:'phone',createtime:'createtime',studentNumber:'student_number',teacherNumber:'teacher_number',grade:'grade',address:'address',link:'link'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: 'id', minWidth:100, align:"center",sort:true},
                {field: 'schoolId', title: '学校的名字,外键', align:'center', minWidth:250, templet:function (d) {
                    var value = (!d.schoolId || d.schoolId==null) ? '' : d.schoolId
                    var option = '<option selected="selected" value="'+value+'">'+value+'</option>'
                    return '<select class="magicalcoder-table-foreign-select2 layui-input security_list_table_form_schoolId" lay-ignore="true"  name="schoolId" data-identify="'+d.id+'" data-value="" data-url="admin/liuya_school_type_rest/search" data-id="id" data-text-fields="id,typeName" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="学校的名字,外键">'+option+'</select>'
                    },sort:true
                },

            {field: 'headportrait', title: '头像', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.headportrait) +'" class="magicalcoder-table-text layui-input security_list_table_form_headportrait" name="headportrait" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="头像"/>'
                }
                , sort:true
            },

            {field: 'backgroundImg', title: '主页背景图', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.backgroundImg) +'" class="magicalcoder-table-text layui-input security_list_table_form_backgroundImg" name="backgroundImg" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="主页背景图"/>'
                }
                , sort:true
            },

            {field: 'signature', title: '签名', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.signature) +'" class="magicalcoder-table-text layui-input security_list_table_form_signature" name="signature" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="签名"/>'
                }
                , sort:true
            },

            {field: 'password', title: '密码', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.password) +'" class="magicalcoder-table-text layui-input security_list_table_form_password" name="password" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="密码"/>'
                }
                , sort:true
            },

            {field: 'email', title: '联系邮箱', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.email) +'" class="magicalcoder-table-text layui-input security_list_table_form_email" name="email" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="联系邮箱"/>'
                }
                , sort:true
            },

            {field: 'phone', title: '联系电话', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.phone) +'" class="magicalcoder-table-text layui-input security_list_table_form_phone" name="phone" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="联系电话"/>'
                }
                , sort:true
            },
            {field: 'createtime', title: '创建时间', align:'center', minWidth:250, templet :"#createtimeTemplate",sort:true},

            {field: 'studentNumber', title: '学生人数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.studentNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_studentNumber" name="studentNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="学生人数"/>'
                }
                , sort:true
            },

            {field: 'teacherNumber', title: '老师人数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.teacherNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_teacherNumber" name="teacherNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="老师人数"/>'
                }
                , sort:true
            },

            {field: 'grade', title: '等级值', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.grade) +'" class="magicalcoder-table-text layui-input security_list_table_form_grade" name="grade" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="等级值"/>'
                }
                , sort:true
            },

            {field: 'address', title: '详细地址', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.address) +'" class="magicalcoder-table-text layui-input security_list_table_form_address" name="address" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="详细地址"/>'
                }
                , sort:true
            },

            {field: 'link', title: '链接地址', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.link) +'" class="magicalcoder-table-text layui-input security_list_table_form_link" name="link" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="链接地址"/>'
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
