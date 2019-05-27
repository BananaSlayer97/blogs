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
public class LiuyaArticle implements Serializable{

    private Integer id;//文章类型id
    private Integer userId;//文章的编写者id
    private String title;//文章的标题
    private Integer labelType;//标签的类型，
    private String content;//文章的内容
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp createtime;//文章的创建时间
    private Integer status;//文章的验证状态（0待验证，1是，2否）
    private Integer up;//文章的点赞数
    private Integer pageView;//文章的浏览量
    private Integer commentNumber;//文章的评论数量
    private Integer tread;//文章的踩数
    @DateTimeFormat( pattern = "yyyy-MM-dd HH:mm:ss" )
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Timestamp changeTime;//文章的更改时间


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

    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }

    public Integer getLabelType(){
        return labelType;
    }
    public void setLabelType(Integer labelType){
        this.labelType = labelType;
    }

    public String getContent(){
        return content;
    }
    public void setContent(String content){
        this.content = content;
    }

    public Timestamp getCreatetime(){
        return createtime;
    }
    public void setCreatetime(Timestamp createtime){
        this.createtime = createtime;
    }

    public Integer getStatus(){
        return status;
    }
    public void setStatus(Integer status){
        this.status = status;
    }

    public Integer getUp(){
        return up;
    }
    public void setUp(Integer up){
        this.up = up;
    }

    public Integer getPageView(){
        return pageView;
    }
    public void setPageView(Integer pageView){
        this.pageView = pageView;
    }

    public Integer getCommentNumber(){
        return commentNumber;
    }
    public void setCommentNumber(Integer commentNumber){
        this.commentNumber = commentNumber;
    }

    public Integer getTread(){
        return tread;
    }
    public void setTread(Integer tread){
        this.tread = tread;
    }

    public Timestamp getChangeTime(){
        return changeTime;
    }
    public void setChangeTime(Timestamp changeTime){
        this.changeTime = changeTime;
    }
}
