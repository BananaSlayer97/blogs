/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

layui.config({base : "assets/"}).extend({"alltype_config":"admin/alltype/alltype-config","magicalcoderlist" : "magicalcoder/v001/rmp/magicalcoderlist"})
layui.use(["magicalcoderlist","alltype_config"],function(){
    var config = $.extend(layui.alltype_config,{
        layTable : {
            //表格内容
            elem : '#newsList',
            id : "newsListTable"
            },
            //排序跟数据库实际字段名的映射
        sortMap:{
            longId:'long_id',bytesBinary:'bytes_binary',bytesBlob:'bytes_blob',bytesMediumblob:'bytes_mediumblob',bytesVarbinary:'bytes_varbinary',bytesTinyblob:'bytes_tinyblob',bytesLongblob:'bytes_longblob',booleanBit:'boolean_bit',booleanBool:'boolean_bool',booleanBoolean:'boolean_boolean',stringEnum:'string_enum',stringChar:'string_char',stringVarchar:'string_varchar',stringSet:'string_set',stringTinytext:'string_tinytext',byteTinyint:'byte_tinyint',shortSmallint:'short_smallint',integerInt:'integer_int',integerMediumint:'integer_mediumint',floatFloat:'float_float',doubleDouble:'double_double',doubleReal:'double_real',bigdecimalDecimal:'bigdecimal_decimal',bigdecimalNumeric:'bigdecimal_numeric',dateDate:'date_date',dateYear:'date_year',timeTime:'time_time',timestempDatetime:'timestemp_datetime',timestempTimestemp:'timestemp_timestemp'
        }
    });
    var  magicalcoderlist = layui.magicalcoderlist(config);
    //绑定所有查询区域控件
    magicalcoderlist.bindQueryArea();
    //表格
    var cols = [[
        {type: "checkbox", fixed:"left", width:50},
                {field: 'longId', title: '主键', minWidth:100, align:"center",sort:true},

            {field: 'bytesBinary', title: 'bytes_binary', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bytesBinary) +'" class="magicalcoder-table-text layui-input security_list_table_form_bytesBinary" name="bytesBinary" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bytes_binary"/>'
                }
                , sort:true
            },

            {field: 'bytesBlob', title: 'bytes_blob', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bytesBlob) +'" class="magicalcoder-table-text layui-input security_list_table_form_bytesBlob" name="bytesBlob" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bytes_blob"/>'
                }
                , sort:true
            },

            {field: 'bytesMediumblob', title: 'bytes_mediumblob', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bytesMediumblob) +'" class="magicalcoder-table-text layui-input security_list_table_form_bytesMediumblob" name="bytesMediumblob" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bytes_mediumblob"/>'
                }
                , sort:true
            },

            {field: 'bytesVarbinary', title: 'bytes_varbinary', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bytesVarbinary) +'" class="magicalcoder-table-text layui-input security_list_table_form_bytesVarbinary" name="bytesVarbinary" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bytes_varbinary"/>'
                }
                , sort:true
            },

            {field: 'bytesTinyblob', title: 'bytes_tinyblob', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bytesTinyblob) +'" class="magicalcoder-table-text layui-input security_list_table_form_bytesTinyblob" name="bytesTinyblob" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bytes_tinyblob"/>'
                }
                , sort:true
            },

            {field: 'bytesLongblob', title: 'bytes_longblob', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bytesLongblob) +'" class="magicalcoder-table-text layui-input security_list_table_form_bytesLongblob" name="bytesLongblob" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bytes_longblob"/>'
                }
                , sort:true
            },

                {field: 'booleanBit', title: 'boolean_bit',minWidth:150, align:'center', templet:function(d){
                    var checked = (d.booleanBit+''=='true' || d.booleanBit+'' == '1') ? 'checked' : '';
                    return '<input type="checkbox" class="magicalcoder-table-layswitch security_list_table_form_booleanBit" data-identify="'+d.longId+'" name="booleanBit"  lay-filter="booleanBitFilter" lay-skin="switch" lay-text=""  '+checked+' lay-verify="magicalCoderVerify" magicalcoder-verify="" />'
                    }
                    ,sort:true
                },

                {field: 'booleanBool', title: 'boolean_bool',minWidth:150, align:'center', templet:function(d){
                    var checked = (d.booleanBool+''=='true' || d.booleanBool+'' == '1') ? 'checked' : '';
                    return '<input type="checkbox" class="magicalcoder-table-layswitch security_list_table_form_booleanBool" data-identify="'+d.longId+'" name="booleanBool"  lay-filter="booleanBoolFilter" lay-skin="switch" lay-text=""  '+checked+' lay-verify="magicalCoderVerify" magicalcoder-verify="" />'
                    }
                    ,sort:true
                },

                {field: 'booleanBoolean', title: 'boolean_boolean',minWidth:150, align:'center', templet:function(d){
                    var checked = (d.booleanBoolean+''=='true' || d.booleanBoolean+'' == '1') ? 'checked' : '';
                    return '<input type="checkbox" class="magicalcoder-table-layswitch security_list_table_form_booleanBoolean" data-identify="'+d.longId+'" name="booleanBoolean"  lay-filter="booleanBooleanFilter" lay-skin="switch" lay-text=""  '+checked+' lay-verify="magicalCoderVerify" magicalcoder-verify="" />'
                    }
                    ,sort:true
                },
            {field: 'stringEnum', title: 'string_enum',minWidth:350, align:'center', templet:'#stringEnumTemplate',sort:true},
            {field: 'stringChar', title: 'string_char',minWidth:350, align:'center', templet:'#stringCharTemplate',sort:true},

            {field: 'stringVarchar', title: 'string_varchar', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.stringVarchar) +'" class="magicalcoder-table-text layui-input security_list_table_form_stringVarchar" name="stringVarchar" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="string_varchar"/>'
                }
                , sort:true
            },
            {field: 'stringSet', title: 'string_set',minWidth:350, align:'center', templet:'#stringSetTemplate',sort:true},

            {field: 'stringTinytext', title: 'string_tinytext', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.stringTinytext) +'" class="magicalcoder-table-text layui-input security_list_table_form_stringTinytext" name="stringTinytext" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="string_tinytext"/>'
                }
                , sort:true
            },
            {field: 'byteTinyint', title: 'byte_tinyint',minWidth:350, align:'center', templet:'#byteTinyintTemplate',sort:true},

            {field: 'shortSmallint', title: 'short_smallint', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.shortSmallint) +'" class="magicalcoder-table-text layui-input security_list_table_form_shortSmallint" name="shortSmallint" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="short_smallint"/>'
                }
                , sort:true
            },

            {field: 'integerInt', title: 'integer_int', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.integerInt) +'" class="magicalcoder-table-text layui-input security_list_table_form_integerInt" name="integerInt" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="integer_int"/>'
                }
                , sort:true
            },

            {field: 'integerMediumint', title: 'integer_mediumint', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.integerMediumint) +'" class="magicalcoder-table-text layui-input security_list_table_form_integerMediumint" name="integerMediumint" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="integer_mediumint"/>'
                }
                , sort:true
            },

            {field: 'floatFloat', title: 'float_float', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.floatFloat) +'" class="magicalcoder-table-text layui-input security_list_table_form_floatFloat" name="floatFloat" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="float_float"/>'
                }
                , sort:true
            },

            {field: 'doubleDouble', title: 'double_double', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.doubleDouble) +'" class="magicalcoder-table-text layui-input security_list_table_form_doubleDouble" name="doubleDouble" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="double_double"/>'
                }
                , sort:true
            },

            {field: 'doubleReal', title: 'double_real', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.doubleReal) +'" class="magicalcoder-table-text layui-input security_list_table_form_doubleReal" name="doubleReal" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="double_real"/>'
                }
                , sort:true
            },

            {field: 'bigdecimalDecimal', title: 'bigdecimal_decimal', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bigdecimalDecimal) +'" class="magicalcoder-table-text layui-input security_list_table_form_bigdecimalDecimal" name="bigdecimalDecimal" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bigdecimal_decimal"/>'
                }
                , sort:true
            },

            {field: 'bigdecimalNumeric', title: 'bigdecimal_numeric', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.bigdecimalNumeric) +'" class="magicalcoder-table-text layui-input security_list_table_form_bigdecimalNumeric" name="bigdecimalNumeric" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="bigdecimal_numeric"/>'
                }
                , sort:true
            },

            {field: 'dateDate', title: 'date_date', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.dateDate) +'" class="magicalcoder-table-text layui-input security_list_table_form_dateDate" name="dateDate" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="date_date"/>'
                }
                , sort:true
            },

            {field: 'dateYear', title: 'date_year', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.dateYear) +'" class="magicalcoder-table-text layui-input security_list_table_form_dateYear" name="dateYear" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="date_year"/>'
                }
                , sort:true
            },

            {field: 'timeTime', title: 'time_time', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.timeTime) +'" class="magicalcoder-table-text layui-input security_list_table_form_timeTime" name="timeTime" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="time_time"/>'
                }
                , sort:true
            },

            {field: 'timestempDatetime', title: 'timestemp_datetime', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.timestempDatetime) +'" class="magicalcoder-table-text layui-input security_list_table_form_timestempDatetime" name="timestempDatetime" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify" magicalcoder-verify=""  placeholder="timestemp_datetime"/>'
                }
                , sort:true
            },

            {field: 'timestempTimestemp', title: 'timestemp_timestemp', minWidth:200,templet:function (d) {
                    return '<input type="text" value="'+ magicalcoderlist.escapeHTML(d.timestempTimestemp) +'" class="magicalcoder-table-text layui-input security_list_table_form_timestempTimestemp" name="timestempTimestemp" data-identify="'+d.longId+'" lay-verify="magicalCoderVerify|mc_required" magicalcoder-verify=""  placeholder="timestemp_timestemp"/>'
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
