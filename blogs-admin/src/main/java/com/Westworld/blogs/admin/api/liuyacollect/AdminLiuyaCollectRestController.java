package com.Westworld.blogs.admin.api.liuyacollect;

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
import com.Westworld.blogs.model.LiuyaCollect;
import com.Westworld.blogs.service.liuyacollect.service.LiuyaCollectService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/liuya_collect_rest/")
@RestController
public class AdminLiuyaCollectRestController extends CommonRestController<LiuyaCollect,Integer> implements InitializingBean
{

    @Resource
    private LiuyaCollectService liuyaCollectService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="idFirst")                            Integer idFirst ,
        @RequestParam(required = false,value ="userIdFirst")                            Integer userIdFirst ,
        @RequestParam(required = false,value ="collectTypeFirst")                            String collectTypeFirst ,
        @RequestParam(required = false,value ="objectIdFirst")                            Integer objectIdFirst ,
        @RequestParam(required = false,value ="createtimeFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date createtimeFirst ,
        @RequestParam(required = false,value ="createtimeSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date createtimeSecond ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("idFirst",idFirst);
        query.put("userIdFirst",userIdFirst);
        query.put("collectTypeFirst",coverBlankToNull(collectTypeFirst));
        query.put("objectIdFirst",objectIdFirst);
        query.put("createtimeFirst",createtimeFirst);
        query.put("createtimeSecond",createtimeSecond);
        Integer count = liuyaCollectService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,liuyaCollectService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = liuyaCollectService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
