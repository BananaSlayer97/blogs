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
public class LiuyaUser implements Serializable{

    private Integer id;//用户的唯一id
    private String name;//用户的姓名
    private String email;//用户的邮箱
    private String signature;//用户的签名
    private String headportrait;//用户的头像
    private String password;//用户的密码
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp createtime;//用户的创建时间
    private Integer gender;//用户的性别，1男，0女
    private Integer age;//用户的年龄
    private Integer fans;//用户的粉丝量
    private Integer iq;//用户的iq量
    private Integer replyNumber;//用户的回帖数
    private String address;//用户的地址
    private String className;//用户的班级
    private String company;//用户的所处公司
    private String status;//用户是否已经验证
    private String nickname;//昵称
    private Integer phone;//手机号
    private Integer integral;//积分
    private String wantCity;//想去的城市
    private String job;//目前的工作
    private Integer roleId;//角色id
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp lastLogin;//上次登录时间
    private Integer schoolId;//学校的名字，外键
    private Integer follow;//关注人数


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

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getSignature(){
        return signature;
    }
    public void setSignature(String signature){
        this.signature = signature;
    }

    public String getHeadportrait(){
        return headportrait;
    }
    public void setHeadportrait(String headportrait){
        this.headportrait = headportrait;
    }

    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }

    public Timestamp getCreatetime(){
        return createtime;
    }
    public void setCreatetime(Timestamp createtime){
        this.createtime = createtime;
    }

    public Integer getGender(){
        return gender;
    }
    public void setGender(Integer gender){
        this.gender = gender;
    }

    public Integer getAge(){
        return age;
    }
    public void setAge(Integer age){
        this.age = age;
    }

    public Integer getFans(){
        return fans;
    }
    public void setFans(Integer fans){
        this.fans = fans;
    }

    public Integer getIq(){
        return iq;
    }
    public void setIq(Integer iq){
        this.iq = iq;
    }

    public Integer getReplyNumber(){
        return replyNumber;
    }
    public void setReplyNumber(Integer replyNumber){
        this.replyNumber = replyNumber;
    }

    public String getAddress(){
        return address;
    }
    public void setAddress(String address){
        this.address = address;
    }

    public String getClassName(){
        return className;
    }
    public void setClassName(String className){
        this.className = className;
    }

    public String getCompany(){
        return company;
    }
    public void setCompany(String company){
        this.company = company;
    }

    public String getStatus(){
        return status;
    }
    public void setStatus(String status){
        this.status = status;
    }

    public String getNickname(){
        return nickname;
    }
    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    public Integer getPhone(){
        return phone;
    }
    public void setPhone(Integer phone){
        this.phone = phone;
    }

    public Integer getIntegral(){
        return integral;
    }
    public void setIntegral(Integer integral){
        this.integral = integral;
    }

    public String getWantCity(){
        return wantCity;
    }
    public void setWantCity(String wantCity){
        this.wantCity = wantCity;
    }

    public String getJob(){
        return job;
    }
    public void setJob(String job){
        this.job = job;
    }

    public Integer getRoleId(){
        return roleId;
    }
    public void setRoleId(Integer roleId){
        this.roleId = roleId;
    }

    public Timestamp getLastLogin(){
        return lastLogin;
    }
    public void setLastLogin(Timestamp lastLogin){
        this.lastLogin = lastLogin;
    }

    public Integer getSchoolId(){
        return schoolId;
    }
    public void setSchoolId(Integer schoolId){
        this.schoolId = schoolId;
    }

    public Integer getFollow(){
        return follow;
    }
    public void setFollow(Integer follow){
        this.follow = follow;
    }
}
