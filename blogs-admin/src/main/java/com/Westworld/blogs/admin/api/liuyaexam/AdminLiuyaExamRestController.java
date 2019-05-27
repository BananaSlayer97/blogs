package com.Westworld.blogs.admin.api.liuyaexam;

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
import com.Westworld.blogs.model.LiuyaExam;
import com.Westworld.blogs.service.liuyaexam.service.LiuyaExamService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/liuya_exam_rest/")
@RestController
public class AdminLiuyaExamRestController extends CommonRestController<LiuyaExam,Integer> implements InitializingBean
{

    @Resource
    private LiuyaExamService liuyaExamService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="idFirst")                            Integer idFirst ,
        @RequestParam(required = false,value ="examTitleFirst")                            String examTitleFirst ,
        @RequestParam(required = false,value ="examContentFirst")                            String examContentFirst ,
        @RequestParam(required = false,value ="examCreatetimeFirst")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date examCreatetimeFirst ,
        @RequestParam(required = false,value ="examCreatetimeSecond")                    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")Date examCreatetimeSecond ,
        @RequestParam(required = false,value ="userIdFirst")                            Integer userIdFirst ,
        @RequestParam(required = false,value ="examTypeIdFirst")                            Integer examTypeIdFirst ,
        @RequestParam(required = false,value ="examPageViewFirst")                            Integer examPageViewFirst ,
        @RequestParam(required = false,value ="examUpNumberFirst")                            Integer examUpNumberFirst ,
        @RequestParam(required = false,value ="examCheckStatusFirst")                            Integer examCheckStatusFirst ,
        @RequestParam(required = false,value ="examCommentNumberFirst")                            Integer examCommentNumberFirst ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("idFirst",idFirst);
        query.put("examTitleFirst",coverBlankToNull(examTitleFirst));
        query.put("examContentFirst",coverBlankToNull(examContentFirst));
        query.put("examCreatetimeFirst",examCreatetimeFirst);
        query.put("examCreatetimeSecond",examCreatetimeSecond);
        query.put("userIdFirst",userIdFirst);
        query.put("examTypeIdFirst",examTypeIdFirst);
        query.put("examPageViewFirst",examPageViewFirst);
        query.put("examUpNumberFirst",examUpNumberFirst);
        query.put("examCheckStatusFirst",examCheckStatusFirst);
        query.put("examCommentNumberFirst",examCommentNumberFirst);
        Integer count = liuyaExamService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,liuyaExamService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = liuyaExamService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
