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
public class LiuyaExamComment implements Serializable{

    private Integer id;//评论id,
    private Integer userId;//用户的id
    private Integer examId;//题目的id
    private String commentContent;//评论的内容
    private Integer commentUpNumber;//评论的点赞数
    private Integer commentAccept;//是否被采纳
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp commentCreatetime;//评论的创建时间
    private Integer commentDownNumber;//文章的踩


    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }

    public Integer getUserId(){
        return userId;
    }
    public void setUserId(Integer userId){
        this.userId = userId;
    }

    public Integer getExamId(){
        return examId;
    }
    public void setExamId(Integer examId){
        this.examId = examId;
    }

    public String getCommentContent(){
        return commentContent;
    }
    public void setCommentContent(String commentContent){
        this.commentContent = commentContent;
    }

    public Integer getCommentUpNumber(){
        return commentUpNumber;
    }
    public void setCommentUpNumber(Integer commentUpNumber){
        this.commentUpNumber = commentUpNumber;
    }

    public Integer getCommentAccept(){
        return commentAccept;
    }
    public void setCommentAccept(Integer commentAccept){
        this.commentAccept = commentAccept;
    }

    public Timestamp getCommentCreatetime(){
        return commentCreatetime;
    }
    public void setCommentCreatetime(Timestamp commentCreatetime){
        this.commentCreatetime = commentCreatetime;
    }

    public Integer getCommentDownNumber(){
        return commentDownNumber;
    }
    public void setCommentDownNumber(Integer commentDownNumber){
        this.commentDownNumber = commentDownNumber;
    }
}
