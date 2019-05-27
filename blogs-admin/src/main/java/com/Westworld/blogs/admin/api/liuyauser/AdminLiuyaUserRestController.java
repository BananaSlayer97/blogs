package com.Westworld.blogs.admin.api.liuyauser;

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
import com.Westworld.blogs.model.LiuyaUser;
import com.Westworld.blogs.service.liuyauser.service.LiuyaUserService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/liuya_user_rest/")
@RestController
public class AdminLiuyaUserRestController extends CommonRestController<LiuyaUser,Integer> implements InitializingBean
{

    @Resource
    private LiuyaUserService liuyaUserService;

    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="nameFirst")                            String nameFirst ,
        @RequestParam(required = false,value ="signatureFirst")                            String signatureFirst ,
        @RequestParam(required = false,value ="ageFirst")                            Integer ageFirst ,
        @RequestParam(required = false,value ="addressFirst")                            String addressFirst ,
        @RequestParam(required = false,value ="nicknameFirst")                            String nicknameFirst ,
        @RequestParam(required = false,value ="phoneFirst")                            Integer phoneFirst ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("nameFirst",coverBlankToNull(nameFirst));
        query.put("signatureFirst",coverBlankToNull(signatureFirst));
        query.put("ageFirst",ageFirst);
        query.put("addressFirst",coverBlankToNull(addressFirst));
        query.put("nicknameFirst",coverBlankToNull(nicknameFirst));
        query.put("phoneFirst",phoneFirst);
        Integer count = liuyaUserService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,liuyaUserService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = liuyaUserService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
