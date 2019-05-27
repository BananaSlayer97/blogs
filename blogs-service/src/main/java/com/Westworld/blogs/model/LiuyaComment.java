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
public class LiuyaComment implements Serializable{

    private Integer id;//id
    private Integer userId;//评论者id
    private Integer commentType;//评论类型
    private Integer objectId;//被评论者id，可能是视频，可能是文章，所以有重复的可能，所有查询大多要两条件
    private String content;//评论的内容
    private Integer up;//点赞数
    private Integer tread;//踩数
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp createtime;//评论时间
    private Integer objectUser;//被评论人的id


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

    public Integer getCommentType(){
        return commentType;
    }
    public void setCommentType(Integer commentType){
        this.commentType = commentType;
    }

    public Integer getObjectId(){
        return objectId;
    }
    public void setObjectId(Integer objectId){
        this.objectId = objectId;
    }

    public String getContent(){
        return content;
    }
    public void setContent(String content){
        this.content = content;
    }

    public Integer getUp(){
        return up;
    }
    public void setUp(Integer up){
        this.up = up;
    }

    public Integer getTread(){
        return tread;
    }
    public void setTread(Integer tread){
        this.tread = tread;
    }

    public Timestamp getCreatetime(){
        return createtime;
    }
    public void setCreatetime(Timestamp createtime){
        this.createtime = createtime;
    }

    public Integer getObjectUser(){
        return objectUser;
    }
    public void setObjectUser(Integer objectUser){
        this.objectUser = objectUser;
    }
}
