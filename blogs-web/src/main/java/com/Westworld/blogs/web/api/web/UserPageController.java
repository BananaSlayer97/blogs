package com.Westworld.blogs.web.api.web;

import com.Westworld.blogs.web.webservice.mapper.WebLiuyaUserMapper;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * author:www.magicalcoder.com
 * date:2018/8/23
 * function:
 */
/*用户 模块的跳转页面*/
@RequestMapping("/user")
@Controller
public class    UserPageController {

    //日志记录
    Logger log= Logger.getLogger(UserPageController.class);

    @Resource
    WebLiuyaUserMapper webLiuyaUserMapper;


    @RequestMapping(value = "/login")
    public String login(){
        return "user/login";
    }

    @RequestMapping(value = "/reg")
    public String reg(){
        return "user/reg";
    }


    @RequestMapping(value = "/index")
    public String index(ModelMap modelMap,HttpSession session){
        modelMap.addAttribute("user",session.getAttribute("user"));
        return "user/index";
    }

    @RequestMapping(value = "/home")
    public String home( HttpSession session, ModelMap modelMap){
        modelMap.addAttribute("user",session.getAttribute("user"));
        return  "user/home";
    }



}
