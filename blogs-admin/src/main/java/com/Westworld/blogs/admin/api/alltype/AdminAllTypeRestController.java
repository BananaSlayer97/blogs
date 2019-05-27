package com.Westworld.blogs.admin.api.alltype;

import com.Westworld.blogs.core.service.CommonRestController;
import org.springframework.beans.factory.InitializingBean;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.math.*;
import java.util.List;
import java.util.Map;
import com.Westworld.blogs.core.common.constant.PageConstant;
import com.Westworld.blogs.core.common.exception.BusinessException;
import com.Westworld.blogs.core.serialize.ResponseMsg;
import com.Westworld.blogs.model.AllType;
import com.Westworld.blogs.service.alltype.service.AllTypeService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/all_type_rest/")
@RestController
public class AdminAllTypeRestController extends CommonRestController<AllType,Long> implements InitializingBean
{

    @Resource
    private AllTypeService allTypeService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="longIdFirst")                            Long longIdFirst ,
        @RequestParam(required = false,value ="bytesBinaryFirst")                            byte[] bytesBinaryFirst ,
        @RequestParam(required = false,value ="bytesBlobFirst")                            byte[] bytesBlobFirst ,
        @RequestParam(required = false,value ="bytesMediumblobFirst")                            byte[] bytesMediumblobFirst ,
        @RequestParam(required = false,value ="bytesVarbinaryFirst")                            byte[] bytesVarbinaryFirst ,
        @RequestParam(required = false,value ="bytesTinyblobFirst")                            byte[] bytesTinyblobFirst ,
        @RequestParam(required = false,value ="bytesLongblobFirst")                            byte[] bytesLongblobFirst ,
        @RequestParam(required = false,value ="booleanBitFirst")                            Boolean booleanBitFirst ,
        @RequestParam(required = false,value ="booleanBoolFirst")                            Boolean booleanBoolFirst ,
        @RequestParam(required = false,value ="booleanBooleanFirst")                            Boolean booleanBooleanFirst ,
        @RequestParam(required = false,value ="stringEnumFirst")                            String stringEnumFirst ,
        @RequestParam(required = false,value ="stringCharFirst")                            String stringCharFirst ,
        @RequestParam(required = false,value ="stringVarcharFirst")                            String stringVarcharFirst ,
        @RequestParam(required = false,value ="stringSetFirst")                            String stringSetFirst ,
        @RequestParam(required = false,value ="stringTinytextFirst")                            String stringTinytextFirst ,
        @RequestParam(required = false,value ="byteTinyintFirst")                            Byte byteTinyintFirst ,
        @RequestParam(required = false,value ="shortSmallintFirst")                            Short shortSmallintFirst ,
        @RequestParam(required = false,value ="integerIntFirst")                            Integer integerIntFirst ,
        @RequestParam(required = false,value ="integerMediumintFirst")                            Integer integerMediumintFirst ,
        @RequestParam(required = false,value ="floatFloatFirst")                            Float floatFloatFirst ,
        @RequestParam(required = false,value ="doubleDoubleFirst")                            Double doubleDoubleFirst ,
        @RequestParam(required = false,value ="doubleRealFirst")                            Double doubleRealFirst ,
        @RequestParam(required = false,value ="bigdecimalDecimalFirst")                            BigDecimal bigdecimalDecimalFirst ,
        @RequestParam(required = false,value ="bigdecimalNumericFirst")                            BigDecimal bigdecimalNumericFirst ,
        @RequestParam(required = false,value ="dateDateFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date dateDateFirst ,
        @RequestParam(required = false,value ="dateDateSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date dateDateSecond ,
        @RequestParam(required = false,value ="dateYearFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date dateYearFirst ,
        @RequestParam(required = false,value ="dateYearSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date dateYearSecond ,
        @RequestParam(required = false,value ="timeTimeFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date timeTimeFirst ,
        @RequestParam(required = false,value ="timeTimeSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date timeTimeSecond ,
        @RequestParam(required = false,value ="timestempDatetimeFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date timestempDatetimeFirst ,
        @RequestParam(required = false,value ="timestempDatetimeSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date timestempDatetimeSecond ,
        @RequestParam(required = false,value ="timestempTimestempFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date timestempTimestempFirst ,
        @RequestParam(required = false,value ="timestempTimestempSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date timestempTimestempSecond ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("longIdFirst",longIdFirst);
        query.put("bytesBinaryFirst",bytesBinaryFirst);
        query.put("bytesBlobFirst",bytesBlobFirst);
        query.put("bytesMediumblobFirst",bytesMediumblobFirst);
        query.put("bytesVarbinaryFirst",bytesVarbinaryFirst);
        query.put("bytesTinyblobFirst",bytesTinyblobFirst);
        query.put("bytesLongblobFirst",bytesLongblobFirst);
        query.put("booleanBitFirst",booleanBitFirst);
        query.put("booleanBoolFirst",booleanBoolFirst);
        query.put("booleanBooleanFirst",booleanBooleanFirst);
        query.put("stringEnumFirst",coverBlankToNull(stringEnumFirst));
        query.put("stringCharFirst",coverBlankToNull(stringCharFirst));
        query.put("stringVarcharFirst",coverBlankToNull(stringVarcharFirst));
        query.put("stringSetFirst",coverBlankToNull(stringSetFirst));
        query.put("stringTinytextFirst",coverBlankToNull(stringTinytextFirst));
        query.put("byteTinyintFirst",byteTinyintFirst);
        query.put("shortSmallintFirst",shortSmallintFirst);
        query.put("integerIntFirst",integerIntFirst);
        query.put("integerMediumintFirst",integerMediumintFirst);
        query.put("floatFloatFirst",floatFloatFirst);
        query.put("doubleDoubleFirst",doubleDoubleFirst);
        query.put("doubleRealFirst",doubleRealFirst);
        query.put("bigdecimalDecimalFirst",bigdecimalDecimalFirst);
        query.put("bigdecimalNumericFirst",bigdecimalNumericFirst);
        query.put("dateDateFirst",dateDateFirst);
        query.put("dateDateSecond",dateDateSecond);
        query.put("dateYearFirst",dateYearFirst);
        query.put("dateYearSecond",dateYearSecond);
        query.put("timeTimeFirst",timeTimeFirst);
        query.put("timeTimeSecond",timeTimeSecond);
        query.put("timestempDatetimeFirst",timestempDatetimeFirst);
        query.put("timestempDatetimeSecond",timestempDatetimeSecond);
        query.put("timestempTimestempFirst",timestempTimestempFirst);
        query.put("timestempTimestempSecond",timestempTimestempSecond);
        Integer count = allTypeService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","long_id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,allTypeService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = allTypeService;
        super.primaryKey = "longId";//硬编码此实体的主键名称
    }
}
