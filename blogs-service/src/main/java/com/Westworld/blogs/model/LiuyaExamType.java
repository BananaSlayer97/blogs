package com.Westworld.blogs.model;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.math.*;
import java.io.Serializable;
import lombok.Data;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/
@Data
public class LiuyaExamType implements Serializable{

    private Integer id;//问题类型的唯一id
    private String examTypeName;//问题类型的分类名称
    private Integer examTypeStatus;//题目类型的验证状态（0待验证，1是，2否）


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public String getExamTypeName(){
        return examTypeName;
    }
    public void setExamTypeName(String examTypeName){
        this.examTypeName = examTypeName;
    }

    public Integer getExamTypeStatus(){
        return examTypeStatus;
    }
    public void setExamTypeStatus(Integer examTypeStatus){
        this.examTypeStatus = examTypeStatus;
    }
}
