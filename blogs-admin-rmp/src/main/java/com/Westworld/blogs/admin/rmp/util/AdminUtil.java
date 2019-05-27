package com.Westworld.blogs.admin.rmp.util;

import com.Westworld.blogs.admin.rmp.dto.SysAdminUserDto;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * author:www.magicalcoder.com
 * date:2018/7/17
 * function:
 */
public class AdminUtil {

    public static SysAdminUserDto getAdmin(){
        SysAdminUserDto sysAdminUserDto = (SysAdminUserDto)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return sysAdminUserDto;
    }

    public static Long getAdminUid(){
        return getAdmin().getId();
    }

}
