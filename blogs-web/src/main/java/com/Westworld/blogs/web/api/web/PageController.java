package com.Westworld.blogs.web.api.web;

import com.Westworld.blogs.core.serialize.ResponseMsg;
import com.Westworld.blogs.service.goods.service.GoodsService;
import com.Westworld.blogs.web.webservice.service.WebGoodsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/*大模块 跳转页面*/
@Controller
public class PageController {

    @Resource
    private GoodsService goodsService;

    @Resource
    private WebGoodsService webGoodsService;


    /*主页*/
    @RequestMapping(value = "/index")
    public String index(HttpSession session, ModelMap modelMap){
        modelMap.addAttribute("user",session.getAttribute("user"));
        return "index";
    }


    /*测试*/
    @RequestMapping(value = "/case")
    public String learn(HttpSession session, ModelMap modelMap){
        modelMap.addAttribute("user",session.getAttribute("user"));
        return "case/case";
    }



    /*这个是 返回josn 数据，样板先留着*/
    @RequestMapping("info")
    public ResponseMsg info(){
        goodsService.getModel(1L);
        webGoodsService.getWebGoods(1L);
        return new ResponseMsg("ok");
    }

}
