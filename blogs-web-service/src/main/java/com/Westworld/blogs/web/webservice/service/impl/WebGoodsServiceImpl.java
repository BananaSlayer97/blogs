
package com.Westworld.blogs.web.webservice.service.impl;

import com.Westworld.blogs.service.goods.service.GoodsService;
import com.Westworld.blogs.web.model.WebGoods;
import com.Westworld.blogs.web.webservice.mapper.WebGoodsMapper;
import com.Westworld.blogs.web.webservice.service.WebGoodsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 我这一层存在的意义在于
 *  1 blogs-service是代码自动生成，我不希望改动它，方便后续重复生成
 *  2 我为了解耦而存在，您的一些个性化业务都可以在我这个层完成 因为blogs-service
 *  不仅被我依赖 还被admin-service依赖 不能硬把我的代码让admin强制接受
 *  所以admin-service 跟web-service的目的相同
 */
@Service
public class WebGoodsServiceImpl implements WebGoodsService {
    //这个是我自定义的 非工具生成的mapper
    @Resource
    private WebGoodsMapper webGoodsMapper;

    //这个是被工具生成的 我可以复用
    @Resource
    private GoodsService goodsService;


    @Override
    public void getWebGoods(Long id) {
        WebGoods webGoods = webGoodsMapper.getWebGoods(null);

        System.out.println("上面2个我都能使用");
    }
}
