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
public class LiuyaExam implements Serializable{

    private Integer id;//问题的唯一id
    private String examTitle;//问题的标题
    private String examContent;//问题的内容
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp examCreatetime;//问题的创建时间
    private Integer userId;//问题的创建人
    private Integer examTypeId;//问题的类型
    private Integer examPageView;//问题的浏览量
    private Integer examUpNumber;//问题的点赞数
    private Integer examCheckStatus;//问题的验证状态（0待验证，1是，2否）
    private Integer examCommentNumber;//问题的评论数


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public String getExamTitle(){
        return examTitle;
    }
    public void setExamTitle(String examTitle){
        this.examTitle = examTitle;
    }

    public String getExamContent(){
        return examContent;
    }
    public void setExamContent(String examContent){
        this.examContent = examContent;
    }

    public Timestamp getExamCreatetime(){
        return examCreatetime;
    }
    public void setExamCreatetime(Timestamp examCreatetime){
        this.examCreatetime = examCreatetime;
    }

    public Integer getUserId(){
        return userId;
    }
    public void setUserId(Integer userId){
        this.userId = userId;
    }

    public Integer getExamTypeId(){
        return examTypeId;
    }
    public void setExamTypeId(Integer examTypeId){
        this.examTypeId = examTypeId;
    }

    public Integer getExamPageView(){
        return examPageView;
    }
    public void setExamPageView(Integer examPageView){
        this.examPageView = examPageView;
    }

    public Integer getExamUpNumber(){
        return examUpNumber;
    }
    public void setExamUpNumber(Integer examUpNumber){
        this.examUpNumber = examUpNumber;
    }

    public Integer getExamCheckStatus(){
        return examCheckStatus;
    }
    public void setExamCheckStatus(Integer examCheckStatus){
        this.examCheckStatus = examCheckStatus;
    }

    public Integer getExamCommentNumber(){
        return examCommentNumber;
    }
    public void setExamCommentNumber(Integer examCommentNumber){
        this.examCommentNumber = examCommentNumber;
    }
}
