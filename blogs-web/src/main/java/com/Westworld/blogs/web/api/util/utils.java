package com.Westworld.blogs.web.api.util;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;

/**
 * @author liuya
 * @data 2018/12/26 - 1:27
 */
public class utils {

    /**
     * 得到登陆人的id
     * @param session
     * @return
     */
    public static Integer getLoginUserId(HttpSession session){

        /*得到登录人*/
        Map<String, Object> user =(Map<String, Object>)session.getAttribute("user");
       return Integer.parseInt(user.get("id").toString());
    }


    /**
     * 得到当前的时间
     * @return
     */
    public static Timestamp getTime(){
        Timestamp nousedate = new Timestamp(new Date().getTime());
        return  nousedate;
    }
}
