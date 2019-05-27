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
public class LiuyaLabel implements Serializable{

    private Integer id;//id
    private String labelName;//标签名字


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public String getLabelName(){
        return labelName;
    }
    public void setLabelName(String labelName){
        this.labelName = labelName;
    }
}
