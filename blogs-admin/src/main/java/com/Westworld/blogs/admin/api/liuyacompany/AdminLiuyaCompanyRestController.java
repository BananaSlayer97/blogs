package com.Westworld.blogs.admin.api.liuyacompany;

import com.Westworld.blogs.core.service.CommonRestController;
import org.springframework.beans.factory.InitializingBean;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.math.*;
import java.util.List;
import java.util.Map;
import com.Westworld.blogs.core.common.constant.PageConstant;
import com.Westworld.blogs.core.common.exception.BusinessException;
import com.Westworld.blogs.core.serialize.ResponseMsg;
import com.Westworld.blogs.model.LiuyaCompany;
import com.Westworld.blogs.service.liuyacompany.service.LiuyaCompanyService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/liuya_company_rest/")
@RestController
public class AdminLiuyaCompanyRestController extends CommonRestController<LiuyaCompany,Integer> implements InitializingBean
{

    @Resource
    private LiuyaCompanyService liuyaCompanyService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="idFirst")                            Integer idFirst ,
        @RequestParam(required = false,value ="companyIdFirst")                            Integer companyIdFirst ,
        @RequestParam(required = false,value ="addressFirst")                            String addressFirst ,
        @RequestParam(required = false,value ="cityIdFirst")                            Integer cityIdFirst ,
        @RequestParam(required = false,value ="typeFirst")                            String typeFirst ,
        @RequestParam(required = false,value ="numberFirst")                            Integer numberFirst ,
        @RequestParam(required = false,value ="linkFirst")                            String linkFirst ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("idFirst",idFirst);
        query.put("companyIdFirst",companyIdFirst);
        query.put("addressFirst",coverBlankToNull(addressFirst));
        query.put("cityIdFirst",cityIdFirst);
        query.put("typeFirst",coverBlankToNull(typeFirst));
        query.put("numberFirst",numberFirst);
        query.put("linkFirst",coverBlankToNull(linkFirst));
        Integer count = liuyaCompanyService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,liuyaCompanyService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = liuyaCompanyService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
