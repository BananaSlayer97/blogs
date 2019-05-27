package com.Westworld.blogs.web.webservice.mapper;

import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/

public interface WebLiuyaUserMapper {

    /**
     * 根据用户的id,查看某个人的详细信息
     *
     * @param user_id
     * @return
     */
    Map<String, Object> getUserByUserId(Integer user_id);


    /**
     * 根据用户的id,查看个人收藏文章
     *
     * @param user_id
     * @return
     */
    List<Map<String, Object>> getCollectsByUserId(Integer user_id);


    /**
     * 根据用户的id,查看个人发送过的文章
     *
     * @param user_id
     * @return
     */
    List<Map<String, Object>> getPublishByUserId(Integer user_id);


    /**
     * 根据用户的id,查看个人的评论
     *
     * @param user_id
     * @return
     */
    List<Map<String, Object>> getCommonsByUserId(Integer user_id);


    /**
     * 根据 用户的id, 查询所有的粉丝
     * @param user_id
     * @return
     */
    List<Map<String, Object>> getFansByUserId(Integer user_id);

    /**
     * 根据 用户的id, 查询所有的消息
     * @param user_id
     * @return
     */
    List<Map<String, Object>> getMessageByUserId(Integer user_id);

    /**
     * 根据 用户的id, 查询所有的关注人
     * @param user_id
     * @return
     */
    List<Map<String, Object>> getFollowByUserId(Integer user_id);


    /**
     * 检查邮箱是否已经被注册
     */
    int checkEmail(String email);

     /**
     * 登录方法
     * @param email
     * @param password
     * @return
     */
     Map<String, Object> login(@Param("email") String email,@Param("password")String password);




}
