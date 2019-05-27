package com.Westworld.blogs.model;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.math.*;
import java.io.Serializable;
import lombok.Data;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/
@Data
public class LiuyaClass implements Serializable{

    private Integer id;//id
    private String name;//班级名字
    private Integer schoolId;//学校
    private String teacher;//老师
    private String manage;//班主任
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp createtime;//创建时间


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public Integer getSchoolId(){
        return schoolId;
    }
    public void setSchoolId(Integer schoolId){
        this.schoolId = schoolId;
    }

    public String getTeacher(){
        return teacher;
    }
    public void setTeacher(String teacher){
        this.teacher = teacher;
    }

    public String getManage(){
        return manage;
    }
    public void setManage(String manage){
        this.manage = manage;
    }

    public Timestamp getCreatetime(){
        return createtime;
    }
    public void setCreatetime(Timestamp createtime){
        this.createtime = createtime;
    }
}
