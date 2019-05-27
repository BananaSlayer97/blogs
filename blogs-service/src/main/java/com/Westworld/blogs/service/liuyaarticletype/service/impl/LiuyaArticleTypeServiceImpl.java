package com.Westworld.blogs.service.liuyaarticletype.service.impl;

import com.Westworld.blogs.service.liuyaarticletype.mapper.LiuyaArticleTypeMapper;
import com.Westworld.blogs.service.liuyaarticletype.service.LiuyaArticleTypeService;
import com.Westworld.blogs.model.LiuyaArticleType;
import com.Westworld.blogs.core.service.CommonServiceImpl;
import com.Westworld.blogs.core.utils.StringUtil;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import com.Westworld.blogs.core.utils.CopyUtil;
import org.springframework.beans.factory.InitializingBean;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.math.*;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

@Service
public class LiuyaArticleTypeServiceImpl extends CommonServiceImpl<LiuyaArticleType,Integer> implements LiuyaArticleTypeService,InitializingBean{
    @Resource
    private LiuyaArticleTypeMapper liuyaArticleTypeMapper;

    @Override
    public void afterPropertiesSet() {
        super.commonMapper = liuyaArticleTypeMapper;
    }
}
