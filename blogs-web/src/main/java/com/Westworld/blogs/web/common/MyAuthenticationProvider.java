package com.Westworld.blogs.web.common;

import com.Westworld.blogs.core.cache.redis.RedisUtil;
import com.Westworld.blogs.core.utils.StringUtil;
import com.Westworld.blogs.web.common.constant.PermissionConstant;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * author:www.magicalcoder.com
 * date:2018/7/16
 * function:自定义验证代码 可以同时拿到用户名 密码
 * 此类不再使用 页面跳转比较适合，但是这种联合登陆写的太死了
 */
@Component
public class MyAuthenticationProvider implements AuthenticationProvider {

    @Resource
    private RedisUtil redisUtil;
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        //password = realPassword|||sessionId|||验证码 我十分不理解 spring security 真是个无语的存在 随便一个小扩展 得写一大堆类 这里就不扩展了
        String password = (String)authentication.getCredentials();
        if(StringUtil.isBlank(username)){
            throw new BadCredentialsException("用户名不能为空");
        }
        String[] parr = password.split("\\|\\|\\|");
        password = parr[0].trim();//密码
        String sessionId = parr[1];//
        String code = parr[2].trim().toLowerCase();//验证码
        String storeCode = redisUtil.get(PermissionConstant.CODE_PREFIX+sessionId).toLowerCase();
        if(!code.equals(storeCode)){
            throw new BadCredentialsException("验证码错误");
        }
        if(StringUtil.isBlank(password)){
            throw new BadCredentialsException("密码不能为空");
        }


            return  null;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return true;
    }
}
