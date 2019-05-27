package com.Westworld.blogs.admin.api.liuyacomment;

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
import com.Westworld.blogs.model.LiuyaComment;
import com.Westworld.blogs.service.liuyacomment.service.LiuyaCommentService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/liuya_comment_rest/")
@RestController
public class AdminLiuyaCommentRestController extends CommonRestController<LiuyaComment,Integer> implements InitializingBean
{

    @Resource
    private LiuyaCommentService liuyaCommentService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="idFirst")                            Integer idFirst ,
        @RequestParam(required = false,value ="userIdFirst")                            Integer userIdFirst ,
        @RequestParam(required = false,value ="commentTypeFirst")                            Integer commentTypeFirst ,
        @RequestParam(required = false,value ="objectIdFirst")                            Integer objectIdFirst ,
        @RequestParam(required = false,value ="treadFirst")                            Integer treadFirst ,
        @RequestParam(required = false,value ="objectUserFirst")                            Integer objectUserFirst ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("idFirst",idFirst);
        query.put("userIdFirst",userIdFirst);
        query.put("commentTypeFirst",commentTypeFirst);
        query.put("objectIdFirst",objectIdFirst);
        query.put("treadFirst",treadFirst);
        query.put("objectUserFirst",objectUserFirst);
        Integer count = liuyaCommentService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,liuyaCommentService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = liuyaCommentService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
