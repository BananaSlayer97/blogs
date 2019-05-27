package com.Westworld.blogs.web.api.liuyaarticle;

import com.Westworld.blogs.model.LiuyaArticle;
import com.Westworld.blogs.model.LiuyaComment;
import com.Westworld.blogs.service.liuyaarticle.service.LiuyaArticleService;
import com.Westworld.blogs.service.liuyacomment.service.LiuyaCommentService;
import com.Westworld.blogs.web.api.util.utils;
import com.Westworld.blogs.web.webservice.mapper.WebLiuyaArticleMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Api(value = "article-文章方面")
@RestController
@RequestMapping("/web/article")
public class WebLiuyaArticleController {

    //日志记录
    Logger log= Logger.getLogger(WebLiuyaArticleController.class);

   // 导入 代码生成器生成的服务类
    @Resource
    private LiuyaArticleService liuyaArticleService;

    //	导入 自己写的 评论服务类
    @Resource
    private LiuyaCommentService liuyaCommentService;

    //	导入 自己写的 文章服务类
    @Resource
    private WebLiuyaArticleMapper webLiuyaArticleMapper;


    /**
     * 写一个定时赋值评论数的方法，每隔一小时执行一下？
     * */
    public void setCommentNumber(){

        log.info("进入到了----/web/article/定时赋值评论数---");
        try {

          List<LiuyaArticle> list =   webLiuyaArticleMapper.getArticleAll();
          for (LiuyaArticle article:list) {
                /*得到id*/
                Integer id = article.getId();
                /*得到评论数*/
                Integer commentNumber = webLiuyaArticleMapper.getCommentNubmer(1,id);
                /*进行赋值*/
                webLiuyaArticleMapper.setArticleCommentNumber(id,commentNumber);
            }
      }catch (Exception e) {
          e.printStackTrace();
          log.info("----/web/article/定时赋值评论数---发生错误");
      }
    }

    /**
     * 定时任务
     * */
    public void timer() {
        // 单位: 毫秒
        final long timeInterval = 1000;
        Runnable runnable = new Runnable(){
            public void run() {
                while (true) {
                    try {
                        setCommentNumber();
                        Thread.sleep(timeInterval);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        };

        /*把创建的 定时任务放入到 定时器中*/
        Thread thread = new Thread(runnable);
        /*开始执行*/
        thread.start();
    }


    @ApiOperation(value = "得到首页的文章")
	@RequestMapping("/get/index/tops")
	public List<Map<String,Object>> getIndexTops(){
		
		log.info("进入到了----/web/article/get/index/left/top---");
		
		try {		
			return webLiuyaArticleMapper.getIndexTops();
		
		} catch (Exception e) {
			e.printStackTrace();
			log.info("----/web/article/get/index/left/tops---发生错误");
		}	
		return null;
	}


    @ApiOperation(value = "得到首页的推荐文章")
    @RequestMapping("/get/index/recommends")
	public List<Map<String,Object>> getIndexRecommend(@RequestParam(value = "label_id",required = false)Integer label_id){

        setCommentNumber();
        try {
            return webLiuyaArticleMapper.getIndexRecommends(label_id);

		} catch (Exception e) {
			e.printStackTrace();
			log.info("----/web/article/get/index/recommends---发生错误");
		}	
		return null;
	}
	

    @ApiOperation(value = "得到首页的本周热议")
    @RequestMapping("/get/index/hots")
	public List<Map<String, Object>>  getIndexHots(){
		
		log.info("进入到了----/web/article/get/index/hots---");
		
		try {			
			return webLiuyaArticleMapper.getIndexHots();
		
		} catch (Exception e) {
			e.printStackTrace();
			log.info("----/web/article/get/index/hots---发生错误");
		}	
		return  null;
	}


    @ApiOperation(value = "根据文章的id,返回文章的详情")
    @RequestMapping("/get/article/info")
    public Map<String,Object>  getArticleInfoById(Integer article_id){

        log.info("进入到了----/web/article/get/article/info---");
        log.info(article_id);
        try {
            Map<String,Object> article = webLiuyaArticleMapper.getArticleInfoById(article_id);

            /*得到评论数*/
            int commentNumber =  webLiuyaArticleMapper.getCommentNubmer(1,article_id);
            article.remove("comment_number");
            article.put("comment_number",commentNumber);

            return  article;

        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/article/get/article/info---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "获得所有的标签")
    @RequestMapping("/get/label")
    public List<Map<String, Object>>  getLabel(){
        try {
            return webLiuyaArticleMapper.getLabel();
        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/article/get/label---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "添加一个文章")
    @RequestMapping("/post/article")
    @ResponseBody
    public boolean  postArticle(@RequestBody LiuyaArticle liuyaArticle,HttpSession session){
        try {

            /*调用工具类方法，获取登录用户的id*/
            liuyaArticle.setUserId(utils.getLoginUserId(session));
            /*设置当前时间*/
            liuyaArticle.setCreatetime(utils.getTime());

            liuyaArticleService.insertModel(liuyaArticle);

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/article/post/article---发生错误");
        }
        return false;
    }


    @ApiOperation(value = "根据 objec_id 和 类型id,查询评论内容")
    @RequestMapping("/get/comment")
    @ResponseBody
    public List<Map<String, Object>>  getCommentByArticleID(
        @RequestParam("type_id")Integer type_id,
        @RequestParam("object_id")Integer object_id){

        try {
            return webLiuyaArticleMapper.getCommentByArticleID(type_id,object_id);

        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/article/get/comment---发生错误");
        }
        return null;
    }


    @ApiOperation(value = "添加一个评论")
    @RequestMapping("/post/comment")
    @ResponseBody
    public int  PostCommentByArticleID(@RequestBody LiuyaComment liuyaComment,HttpSession session){

        try {
            liuyaComment.setUserId(utils.getLoginUserId(session));
            liuyaComment.setCreatetime(utils.getTime());

            return liuyaCommentService.insertModel(liuyaComment);
        } catch (Exception e) {
            e.printStackTrace();
            log.info("----/web/article/post/comment---发生错误");
        }
        return 0;
    }

}
