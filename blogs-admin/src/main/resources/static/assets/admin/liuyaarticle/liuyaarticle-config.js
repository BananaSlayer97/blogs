/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/
//表单通用配置 列表页 详情页都需要
layui.define(['jquery'],function(exports){
    var obj =
        {
            tableNameRest:"liuya_article_rest",
            tableName:"liuya_article",
            moduleName:"liuya_article",//sys_module的moduleName
            formVerifyEditData:{//详情页提交时表单校验 使用方法参考layui官网 表单验证规则

            },
            form:{

              createtime:{
                        renderConfig:{"calendar":false,"format":"yyyy-MM-dd HH:mm:ss","show":false,"range":false,"trigger":"click","type":"date","isInitValue":true,"showBottom":true,"inputType":"date","theme":"#336666ff","position":"absolute","lang":"cn","zIndex":66666666}
                    }
                ,changeTime:{
                        renderConfig:{"calendar":false,"format":"yyyy-MM-dd HH:mm:ss","show":false,"range":false,"trigger":"click","type":"date","isInitValue":true,"showBottom":true,"inputType":"date","theme":"#1a4d4dff","position":"absolute","lang":"cn","zIndex":66666666}
                    }
            }
        }
    exports('liuyaarticle_config',obj);
})
