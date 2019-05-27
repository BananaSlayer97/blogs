package com.Westworld.blogs.admin.api.dict;

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
import com.Westworld.blogs.model.Dict;
import com.Westworld.blogs.service.dict.service.DictService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/dict_rest/")
@RestController
public class AdminDictRestController extends CommonRestController<Dict,Long> implements InitializingBean
{

    @Resource
    private DictService dictService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="idFirst")                            Long idFirst ,
        @RequestParam(required = false,value ="dictCategoryFirst")                            String dictCategoryFirst ,
        @RequestParam(required = false,value ="codeFirst")                            String codeFirst ,
        @RequestParam(required = false,value ="nameFirst")                            String nameFirst ,
        @RequestParam(required = false,value ="parentIdFirst")                            Long parentIdFirst ,
        @RequestParam(required = false,value ="createTimeFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date createTimeFirst ,
        @RequestParam(required = false,value ="createTimeSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date createTimeSecond ,
        @RequestParam(required = false,value ="updateTimeFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date updateTimeFirst ,
        @RequestParam(required = false,value ="updateTimeSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date updateTimeSecond ,
        @RequestParam(required = false,value ="orderNoFirst")                            Byte orderNoFirst ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("idFirst",idFirst);
        query.put("dictCategoryFirst",coverBlankToNull(dictCategoryFirst));
        query.put("codeFirst",coverBlankToNull(codeFirst));
        query.put("nameFirst",coverBlankToNull(nameFirst));
        query.put("parentIdFirst",parentIdFirst);
        query.put("createTimeFirst",createTimeFirst);
        query.put("createTimeSecond",createTimeSecond);
        query.put("updateTimeFirst",updateTimeFirst);
        query.put("updateTimeSecond",updateTimeSecond);
        query.put("orderNoFirst",orderNoFirst);
        Integer count = dictService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,dictService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = dictService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
