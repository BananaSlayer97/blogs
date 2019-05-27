package com.Westworld.blogs.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.sql.Timestamp;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:323237052
*/
@Data
public class LiuyaArticleComment implements Serializable{

    private Integer id;//id
    private Integer userId;//评论者的id
    private Integer articleId;//评论文章的id

    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp commentCreatetime;//评论的时间
    private String commentContent;//评论的内容


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

    public Integer getArticleId(){
        return articleId;
    }
    public void setArticleId(Integer articleId){
        this.articleId = articleId;
    }

    public Timestamp getCommentCreatetime(){
        return commentCreatetime;
    }
    public void setCommentCreatetime(Timestamp commentCreatetime){
        this.commentCreatetime = commentCreatetime;
    }

    public String getCommentContent(){
        return commentContent;
    }
    public void setCommentContent(String commentContent){
        this.commentContent = commentContent;
    }
}
