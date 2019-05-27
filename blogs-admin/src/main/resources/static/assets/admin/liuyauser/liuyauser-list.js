/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyauser_config":"admin/liuyauser/liuyauser-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyauser_config"],function(){
    var config = $.extend(layui.liuyauser_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',name:'name',email:'email',signature:'signature',gender:'gender',age:'age',fans:'fans',iq:'iq',replyNumber:'reply_number',address:'address',className:'class_name',company:'company',status:'status',nickname:'nickname',phone:'phone',integral:'integral',wantCity:'want_city',job:'job',roleId:'role_id',lastLogin:'last_login',schoolId:'school_id',follow:'follow'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: '用户的唯一id', minWidth:100, align:"center",sort:true},

            {field: 'name', title: '用户的姓名', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.name) +'" class="magicalcoder-table-text layui-input security_list_table_form_name" name="name" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的姓名"/>'
                }
                , sort:true
            },

            {field: 'email', title: '用户的邮箱', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.email) +'" class="magicalcoder-table-text layui-input security_list_table_form_email" name="email" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的邮箱"/>'
                }
                , sort:true
            },

            {field: 'signature', title: '用户的签名', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.signature) +'" class="magicalcoder-table-text layui-input security_list_table_form_signature" name="signature" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的签名"/>'
                }
                , sort:true
            },
                {field: 'gender', title: '用户的性别，1男，0女',minWidth:350, align:'center', templet:function(d){
                    var html = []
                    var checked
                    return html.join('')
                    }
                    ,sort:true
                },

            {field: 'age', title: '用户的年龄', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.age) +'" class="magicalcoder-table-text layui-input security_list_table_form_age" name="age" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的年龄"/>'
                }
                , sort:true
            },

            {field: 'fans', title: '用户的粉丝量', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.fans) +'" class="magicalcoder-table-text layui-input security_list_table_form_fans" name="fans" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的粉丝量"/>'
                }
                , sort:true
            },

            {field: 'iq', title: '用户的iq量', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.iq) +'" class="magicalcoder-table-text layui-input security_list_table_form_iq" name="iq" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的iq量"/>'
                }
                , sort:true
            },

            {field: 'replyNumber', title: '用户的回帖数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.replyNumber) +'" class="magicalcoder-table-text layui-input security_list_table_form_replyNumber" name="replyNumber" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的回帖数"/>'
                }
                , sort:true
            },

            {field: 'address', title: '用户的地址', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.address) +'" class="magicalcoder-table-text layui-input security_list_table_form_address" name="address" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的地址"/>'
                }
                , sort:true
            },

            {field: 'className', title: '用户的班级', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.className) +'" class="magicalcoder-table-text layui-input security_list_table_form_className" name="className" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的班级"/>'
                }
                , sort:true
            },

            {field: 'company', title: '用户的所处公司', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.company) +'" class="magicalcoder-table-text layui-input security_list_table_form_company" name="company" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户的所处公司"/>'
                }
                , sort:true
            },

            {field: 'status', title: '用户是否已经验证', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.status) +'" class="magicalcoder-table-text layui-input security_list_table_form_status" name="status" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="用户是否已经验证"/>'
                }
                , sort:true
            },

            {field: 'nickname', title: '昵称', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.nickname) +'" class="magicalcoder-table-text layui-input security_list_table_form_nickname" name="nickname" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="昵称"/>'
                }
                , sort:true
            },

            {field: 'phone', title: '手机号', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.phone) +'" class="magicalcoder-table-text layui-input security_list_table_form_phone" name="phone" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="手机号"/>'
                }
                , sort:true
            },

            {field: 'integral', title: '积分', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.integral) +'" class="magicalcoder-table-text layui-input security_list_table_form_integral" name="integral" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="积分"/>'
                }
                , sort:true
            },

            {field: 'wantCity', title: '想去的城市', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.wantCity) +'" class="magicalcoder-table-text layui-input security_list_table_form_wantCity" name="wantCity" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="想去的城市"/>'
                }
                , sort:true
            },

            {field: 'job', title: '目前的工作', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.job) +'" class="magicalcoder-table-text layui-input security_list_table_form_job" name="job" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="目前的工作"/>'
                }
                , sort:true
            },

            {field: 'roleId', title: '角色id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.roleId) +'" class="magicalcoder-table-text layui-input security_list_table_form_roleId" name="roleId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="角色id"/>'
                }
                , sort:true
            },
            {field: 'lastLogin', title: '上次登录时间', align:'center', minWidth:250, templet :"#lastLoginTemplate",sort:true},
                {field: 'schoolId', title: '学校的名字，外键', align:'center', minWidth:250, templet:function (d) {
                    var value = (!d.schoolId || d.schoolId==null) ? '' : d.schoolId
                    var option = '<option selected="selected" value="'+value+'">'+value+'</option>'
                    return '<select class="magicalcoder-table-foreign-select2 layui-input security_list_table_form_schoolId" lay-ignore="true"  name="schoolId" data-identify="'+d.id+'" data-value="" data-url="admin/liuya_school_type_rest/search" data-id="id" data-text-fields="id,typeName" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="学校的名字，外键">'+option+'</select>'
                    },sort:true
                },

            {field: 'follow', title: '关注人数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.follow) +'" class="magicalcoder-table-text layui-input security_list_table_form_follow" name="follow" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="关注人数"/>'
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
