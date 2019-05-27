package com.Westworld.blogs.admin.api.liuyaschool;

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
import com.Westworld.blogs.model.LiuyaSchool;
import com.Westworld.blogs.service.liuyaschool.service.LiuyaSchoolService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/liuya_school_rest/")
@RestController
public class AdminLiuyaSchoolRestController extends CommonRestController<LiuyaSchool,Integer> implements InitializingBean
{

    @Resource
    private LiuyaSchoolService liuyaSchoolService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="idFirst")                            Integer idFirst ,
        @RequestParam(required = false,value ="schoolIdFirst")                            Integer schoolIdFirst ,
        @RequestParam(required = false,value ="headportraitFirst")                            String headportraitFirst ,
        @RequestParam(required = false,value ="backgroundImgFirst")                            String backgroundImgFirst ,
        @RequestParam(required = false,value ="signatureFirst")                            String signatureFirst ,
        @RequestParam(required = false,value ="passwordFirst")                            String passwordFirst ,
        @RequestParam(required = false,value ="emailFirst")                            String emailFirst ,
        @RequestParam(required = false,value ="phoneFirst")                            String phoneFirst ,
        @RequestParam(required = false,value ="createtimeFirst")                            String createtimeFirst ,
        @RequestParam(required = false,value ="studentNumberFirst")                            Integer studentNumberFirst ,
        @RequestParam(required = false,value ="teacherNumberFirst")                            Integer teacherNumberFirst ,
        @RequestParam(required = false,value ="gradeFirst")                            Integer gradeFirst ,
        @RequestParam(required = false,value ="addressFirst")                            String addressFirst ,
        @RequestParam(required = false,value ="linkFirst")                            String linkFirst ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("idFirst",idFirst);
        query.put("schoolIdFirst",schoolIdFirst);
        query.put("headportraitFirst",coverBlankToNull(headportraitFirst));
        query.put("backgroundImgFirst",coverBlankToNull(backgroundImgFirst));
        query.put("signatureFirst",coverBlankToNull(signatureFirst));
        query.put("passwordFirst",coverBlankToNull(passwordFirst));
        query.put("emailFirst",coverBlankToNull(emailFirst));
        query.put("phoneFirst",coverBlankToNull(phoneFirst));
        query.put("createtimeFirst",coverBlankToNull(createtimeFirst));
        query.put("studentNumberFirst",studentNumberFirst);
        query.put("teacherNumberFirst",teacherNumberFirst);
        query.put("gradeFirst",gradeFirst);
        query.put("addressFirst",coverBlankToNull(addressFirst));
        query.put("linkFirst",coverBlankToNull(linkFirst));
        Integer count = liuyaSchoolService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,liuyaSchoolService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = liuyaSchoolService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
