package com.Westworld.blogs.web.api.web;

import com.Westworld.blogs.web.webservice.mapper.WebLiuyaArticleMapper;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Map;

/*jie 模块的跳转页面*/
@RequestMapping("/jie")
@Controller
public class JiePageController {

    //日志记录
    Logger log= Logger.getLogger(JiePageController.class);

    @Resource
    WebLiuyaArticleMapper webLiuyaArticleMapper;


    @RequestMapping(value = "/detail")
    public String detail(HttpSession session, ModelMap modelMap,
                         @RequestParam("article_id")Integer article_id){
        modelMap.addAttribute("user",session.getAttribute("user"));

        /*查询文章*/
        Map<String,Object> article =  webLiuyaArticleMapper.getArticleInfoById(article_id);
        modelMap.addAttribute("article",article);

        return  "jie/detail";
    }

    @RequestMapping(value = "/add")
    public String add(HttpSession session, ModelMap modelMap){
        modelMap.addAttribute("user",session.getAttribute("user"));
        return  "jie/add";
    }


}
