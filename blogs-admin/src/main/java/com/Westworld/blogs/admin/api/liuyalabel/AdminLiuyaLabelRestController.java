package com.Westworld.blogs.admin.api.liuyalabel;

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
import com.Westworld.blogs.model.LiuyaLabel;
import com.Westworld.blogs.service.liuyalabel.service.LiuyaLabelService;

import com.Westworld.blogs.core.utils.ListUtil;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.core.utils.StringUtil;


/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@RequestMapping("/admin/liuya_label_rest/")
@RestController
public class AdminLiuyaLabelRestController extends CommonRestController<LiuyaLabel,Integer> implements InitializingBean
{

    @Resource
    private LiuyaLabelService liuyaLabelService;

    @RequestMapping(value = "search")
    public ResponseMsg search(
        @RequestParam(required = false) String uniqueField,
        @RequestParam(required = false) Integer uniqueValue,
        @RequestParam(required = false,defaultValue = "20") Integer limit,
        @RequestParam(required = false) String keyword
    ){
        limit = Math.min(PageConstant.MAX_LIMIT,limit);
        List<LiuyaLabel> list = null;
        Map<String,Object> query = new HashedMap();
        query.put("limit",limit);
        query.put("notSafeOrderBy","id desc");
        if(uniqueValue!=null){//说明是来初始化的
            query.put(uniqueField,uniqueValue);
            list = liuyaLabelService.getModelList(query);
        }else {//正常搜索
            if(ListUtil.isBlank(list)){
                query.put("idFirst",keyword);
                list = liuyaLabelService.getModelList(query);
                query.remove("idFirst");
            }
            if(ListUtil.isBlank(list)){
                query.put("labelNameFirst",keyword);
                list = liuyaLabelService.getModelList(query);
                query.remove("labelNameFirst");
            }
        }
        return new ResponseMsg(list);
    }
    //分页查询
    @RequestMapping(value={"page"}, method={RequestMethod.GET})
    public ResponseMsg page(
        @RequestParam(required = false,value ="idFirst")                            Integer idFirst ,
        @RequestParam(required = false,value ="labelNameFirst")                            String labelNameFirst ,
        @RequestParam int page,@RequestParam int limit,@RequestParam(required = false) String safeOrderBy)
    {
        limit = Math.min(limit, PageConstant.MAX_LIMIT);
        int start = (page - 1) * limit;
        Map<String,Object> query = new HashedMap();
        query.put("idFirst",idFirst);
        query.put("labelNameFirst",coverBlankToNull(labelNameFirst));
        Integer count = liuyaLabelService.getModelListCount(query);
        query.put("start",start);
        query.put("limit",limit);
        if(StringUtil.isBlank(safeOrderBy)){
            query.put("notSafeOrderBy","id desc");
        }else{
            query.put("safeOrderBy",safeOrderBy);
        }
        return new ResponseMsg(count,liuyaLabelService.getModelList(query));
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        super.commonService = liuyaLabelService;
        super.primaryKey = "id";//硬编码此实体的主键名称
    }
}
