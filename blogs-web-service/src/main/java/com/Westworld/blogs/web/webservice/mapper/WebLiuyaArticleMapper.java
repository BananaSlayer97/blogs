package com.Westworld.blogs.web.webservice.mapper;

import com.Westworld.blogs.model.LiuyaArticle;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface WebLiuyaArticleMapper {

    /**
     * 首页，得到置顶文章
     * @return
     */
     List<Map<String,Object>> getIndexTops();


    /**
     * 根据文章id,得到一个文章的详细信息
     * @param article_id
     * @return
     */
     Map<String,Object>  getArticleInfoById(@Param("article_id") Integer article_id);


    /**
     * 首页，得到推荐的文章
     * @return
     */
     List<Map<String, Object>> getIndexRecommends(@Param("label_id")Integer label_id);


    /**
     * 首页，得到本周热议
     * @return
     */
     List<Map<String, Object>>  getIndexHots();


    /**
     * 获得所有的标签
     * @return
     */
    List<Map<String, Object>>  getLabel();


    /**
     * 获得评论
     * @return
     */
    List<Map<String, Object>>  getCommentByArticleID(@Param("type_id") Integer type_id,
                                                     @Param("object_id")Integer object_id);

    /**
     * 获得评论数
     * @return
     */
    int getCommentNubmer(@Param("type_id") Integer type_id,
                         @Param("object_id")Integer object_id);


    /**
     *得到所有的评论
     */
    List<LiuyaArticle>  getArticleAll();

    /**
     * 给评论赋评论数
     * */
    void setArticleCommentNumber(
        @Param("id")Integer id,
        @Param("commentNumber")Integer commentNumber);
}
