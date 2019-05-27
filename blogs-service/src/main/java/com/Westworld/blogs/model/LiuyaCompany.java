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
public class LiuyaCompany implements Serializable{

    private Integer id;//id
    private Integer companyId;//公司的名字id
    private String address;//详细地址
    private Integer cityId;//城市的id
    private String type;//公司类型
    private Integer number;//公司的人数
    private String link;//公司的主页


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public Integer getCompanyId(){
        return companyId;
    }
    public void setCompanyId(Integer companyId){
        this.companyId = companyId;
    }

    public String getAddress(){
        return address;
    }
    public void setAddress(String address){
        this.address = address;
    }

    public Integer getCityId(){
        return cityId;
    }
    public void setCityId(Integer cityId){
        this.cityId = cityId;
    }

    public String getType(){
        return type;
    }
    public void setType(String type){
        this.type = type;
    }

    public Integer getNumber(){
        return number;
    }
    public void setNumber(Integer number){
        this.number = number;
    }

    public String getLink(){
        return link;
    }
    public void setLink(String link){
        this.link = link;
    }
}
