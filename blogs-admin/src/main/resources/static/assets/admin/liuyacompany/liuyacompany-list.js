/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"liuyacompany_config":"admin/liuyacompany/liuyacompany-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","liuyacompany_config"],function(){
    var config = $.extend(layui.liuyacompany_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            id:'id',companyId:'company_id',address:'address',cityId:'city_id',type:'type',number:'number',link:'link'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'id', title: 'id', minWidth:100, align:"center",sort:true},

            {field: 'companyId', title: '公司的名字id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.companyId) +'" class="magicalcoder-table-text layui-input security_list_table_form_companyId" name="companyId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="公司的名字id"/>'
                }
                , sort:true
            },

            {field: 'address', title: '详细地址', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.address) +'" class="magicalcoder-table-text layui-input security_list_table_form_address" name="address" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="详细地址"/>'
                }
                , sort:true
            },

            {field: 'cityId', title: '城市的id', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.cityId) +'" class="magicalcoder-table-text layui-input security_list_table_form_cityId" name="cityId" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="城市的id"/>'
                }
                , sort:true
            },

            {field: 'type', title: '公司类型', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.type) +'" class="magicalcoder-table-text layui-input security_list_table_form_type" name="type" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="公司类型"/>'
                }
                , sort:true
            },

            {field: 'number', title: '公司的人数', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.number) +'" class="magicalcoder-table-text layui-input security_list_table_form_number" name="number" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="公司的人数"/>'
                }
                , sort:true
            },

            {field: 'link', title: '公司的主页', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.link) +'" class="magicalcoder-table-text layui-input security_list_table_form_link" name="link" data-identify="'+d.id+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="公司的主页"/>'
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
