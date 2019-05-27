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
public class LiuyaSchool implements Serializable{

    private Integer id;//id
    private Integer schoolId;//学校的名字,外键
    private String headportrait;//头像
    private String backgroundImg;//主页背景图
    private String signature;//签名
    private String password;//密码
    private String email;//联系邮箱
    private String phone;//联系电话
    private String createtime;//创建时间
    private Integer studentNumber;//学生人数
    private Integer teacherNumber;//老师人数
    private Integer grade;//等级值
    private String address;//详细地址
    private String link;//链接地址


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public Integer getSchoolId(){
        return schoolId;
    }
    public void setSchoolId(Integer schoolId){
        this.schoolId = schoolId;
    }

    public String getHeadportrait(){
        return headportrait;
    }
    public void setHeadportrait(String headportrait){
        this.headportrait = headportrait;
    }

    public String getBackgroundImg(){
        return backgroundImg;
    }
    public void setBackgroundImg(String backgroundImg){
        this.backgroundImg = backgroundImg;
    }

    public String getSignature(){
        return signature;
    }
    public void setSignature(String signature){
        this.signature = signature;
    }

    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getPhone(){
        return phone;
    }
    public void setPhone(String phone){
        this.phone = phone;
    }

    public String getCreatetime(){
        return createtime;
    }
    public void setCreatetime(String createtime){
        this.createtime = createtime;
    }

    public Integer getStudentNumber(){
        return studentNumber;
    }
    public void setStudentNumber(Integer studentNumber){
        this.studentNumber = studentNumber;
    }

    public Integer getTeacherNumber(){
        return teacherNumber;
    }
    public void setTeacherNumber(Integer teacherNumber){
        this.teacherNumber = teacherNumber;
    }

    public Integer getGrade(){
        return grade;
    }
    public void setGrade(Integer grade){
        this.grade = grade;
    }

    public String getAddress(){
        return address;
    }
    public void setAddress(String address){
        this.address = address;
    }

    public String getLink(){
        return link;
    }
    public void setLink(String link){
        this.link = link;
    }
}
