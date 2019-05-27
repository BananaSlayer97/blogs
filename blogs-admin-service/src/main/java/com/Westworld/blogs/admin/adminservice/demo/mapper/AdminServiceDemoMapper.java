package com.Westworld.blogs.admin.adminservice.demo.mapper;

import com.Westworld.blogs.admin.model.MyDemo;
import com.Westworld.blogs.model.Goods;

import java.util.Map;

public interface AdminServiceDemoMapper {
    MyDemo daoDemoGoods(Map<String,Object> query);

}
