package com.Westworld.blogs.admin.adminservice.demo.service.impl;

import com.Westworld.blogs.admin.adminservice.demo.mapper.AdminServiceDemoMapper;
import com.Westworld.blogs.admin.adminservice.demo.service.AdminServiceDemoService;
import com.Westworld.blogs.admin.model.MyDemo;
import com.Westworld.blogs.core.utils.MapUtil;
import com.Westworld.blogs.model.Goods;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class AdminServiceDemoServiceImpl  implements AdminServiceDemoService {
    @Resource
    private AdminServiceDemoMapper adminServiceDemoMapper;

    @Override
    public MyDemo demoGoods(Long id) {
        return adminServiceDemoMapper.daoDemoGoods(MapUtil.buildMap("id",id));
    }
}
