package com.Westworld.blogs.web.api.liuyauser;


import com.Westworld.blogs.model.LiuyaFollow;
import com.Westworld.blogs.model.LiuyaUser;
import com.Westworld.blogs.service.liuyafollow.service.LiuyaFollowService;
import com.Westworld.blogs.service.liuyauser.service.LiuyaUserService;
import com.Westworld.blogs.web.api.util.utils;
import com.Westworld.blogs.web.webservice.mapper.WebLiuyaUserMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.log4j.Logger;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;
@Api(value = "user-用户方面的增删改查")
@RestController
@RequestMapping("/web/user")
public class WebLiuyaUserController {

    //日志记录
    Logger log= Logger.getLogger(WebLiuyaUserController.class);

    // 导入 代码生成器生成的服务类
    @Resource
    private LiuyaUserService liuyaUserService;

    // 导入 代码生成器生成的服务类
    @Resource
    private LiuyaFollowService liuyaFollowService;

    //	导入 自己写的 服务类
    @Resource
    private WebLiuyaUserMapper webLiuyaUserMapper;


    @ApiOperation(value = "根据用户的id,查询用户的详细信息")
    @RequestMapping("/get/user")
    public Map<String, Object> getUserByUserId(@RequestParam("user_id") Integer user_id){

        log.info("进入到了----/web/user/get/user---");
        try {
            Map<String, Object> user  = webLiuyaUserMapper.getUserByUserId(user_id);
            log.info("----获得某个人的详细信息成功，---");
            return	user;
        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/get/user---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "根据用户的id,查询收藏的文章")
    @RequestMapping("/get/collects")
    public List<Map<String, Object>> getCollectsByUserId(@RequestParam("user_id")Integer userId){

        log.info("查看个人收藏文章,查询id为："+userId);

        log.info("进入到了----/web/user/get/collects---");
        try {

            return	webLiuyaUserMapper.getCollectsByUserId(userId);

        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/get/collects---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "根据用户的id,查看个人发布的文章")
    @RequestMapping("/get/publish")
    public List<Map<String, Object>> getPublishByUserId(@RequestParam("user_id")Integer user_id){

        log.info("查看个人发送的文章,查询id为："+user_id);

        log.info("进入到了----/web/user/get/publish---");
        try {
            return	webLiuyaUserMapper.getPublishByUserId(user_id);

        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/get/publish---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "根据用户的id,查看个人的所有的评论")
    @RequestMapping("get/commons")
    public List<Map<String, Object>> getCommonsByUserId(@RequestParam("user_id")Integer user_id){

        log.info("查看个人发送的文章,查询id为："+user_id);

        log.info("进入到了----/web/user/get/commons---");
        try {
            return	webLiuyaUserMapper.getCommonsByUserId(user_id);

        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/get/commons---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "根据用户的id,查看所有的粉丝")
    @RequestMapping("get/fans")
    public List<Map<String, Object>> getFansByUserId(@RequestParam("user_id")Integer user_id){

        try {
            return	webLiuyaUserMapper.getFansByUserId(user_id);

        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/get/fans---发生错误");
        }
        return null;
    }



    @ApiOperation(value = "根据用户的id,查看所有的消息")
    @RequestMapping("get/message")
    public List<Map<String, Object>> getMessageByUserId(@RequestParam("user_id")Integer user_id){

        try {
            return	webLiuyaUserMapper.getMessageByUserId(user_id);
        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/get/message---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "根据用户的id,查看所有的关注人")
    @RequestMapping("get/follow")
    public List<Map<String, Object>> getFollowByUserId(@RequestParam("user_id")Integer user_id){

        try {
            return	webLiuyaUserMapper.getFollowByUserId(user_id);

        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/get/follow---发生错误");
        }
        return null;
    }



    @ApiOperation(value = "用户登录方法")
    @RequestMapping("/post/login")
    @ResponseBody
    public int postLogin(@RequestBody LiuyaUser liuyaUser, ModelMap modelMap, HttpSession session){

        log.info("登录人的名字是："+liuyaUser.getName());

        log.info("进入到了----/web/user/post/login---");
        try {
            Map<String, Object> user =  webLiuyaUserMapper.login(liuyaUser.getEmail(),liuyaUser.getPassword());

                if(user != null){
                    log.info("登录成功，进行保存登录对象："+user);
                    session.setAttribute("user",user);
                    return  1;
                }
        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/user/post/login---发生错误");
        }
        return 0;
    }



    @ApiOperation(value = "判断用户是否已经登录")
    @RequestMapping("/get/login")
    public Boolean getLogin( HttpSession session){
        if(session.getAttribute("user")!=null){
            return  true;
        }
        return  false;
    }


    @ApiOperation(value = "进行关注")
    @RequestMapping(" /update/follow")
    public int  getLogin(@RequestParam("follow_id")Integer follow_id,HttpSession session){

        try {

            LiuyaFollow liuyaFollow = new LiuyaFollow();
            liuyaFollow.setFollowId(follow_id);
            liuyaFollow.setUserId(utils.getLoginUserId(session));
            liuyaFollow.setCreatetime(utils.getTime());

            return liuyaFollowService.insertModel(liuyaFollow);

        }catch (Exception e){
            e.printStackTrace();
            log.info("----/web/user/update/follow---发生错误");
        }
        return 0;
    }


    @ApiOperation(value = "判断是否已经注册邮箱")
    @RequestMapping("/check/email")
    public int checkEmail(@RequestParam("email")String email){

        try {
            return  webLiuyaUserMapper.checkEmail(email);

        }catch (Exception e){
            e.printStackTrace();
            log.info("----/web/user/check/email---发生错误");
        }
        return 0;
    }



    @ApiOperation(value = "注册用户")
    @RequestMapping("/insert/user")
    public int insertUser(@RequestBody LiuyaUser liuyaUser){

         try {
             liuyaUser.setCreatetime(utils.getTime());
             return  liuyaUserService.insertModel(liuyaUser);

            }catch (Exception e){
                e.printStackTrace();
             log.info("----/web/user/insert/user---发生错误");
         }
        return 0;
    }

}
