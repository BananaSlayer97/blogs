
blogs是blogs系列框架，默认数据库引擎采用mysql,如需要其他数据库，请至www.magicalcoder.com下载对应引擎
配置模板时 请设置 模板版本=blogs

1 如何启动
    管理后台：blogs-admin
            
        安装环境
            框架需要redis服务，请自行下载或者双击project/redis/redis-启动.bat
        配置环境
           blogs\blogs-admin\src\main\resources\application-publish.yml
           请根据实际情况配置 mysql redis
        导入数据库
            blogs\blogs.sql 导入上面配置的数据库
        运行
            blogs\blogs-admin\src\main\java\com\magicalcoder\blogs\admin\YouyaBootAdminApplication.java
            main函数即可启动
        
        也可以打成jar启动也行
        方式1 java -jar blogs-admin.jar
        方式2 nohup>nohupGps java -jar blogs-admin.jar --spring.profiles.active=deploy 2>&1 &
        
        启动成功后 浏览器访问
        http://localhost:18080/blogs-admin
            默认 admin/admin登陆
        
2 声明
    blogs 为个人练手项目，会持续不断的更新，在使用过程中遇到问题 欢迎联系作者 QQ 1093033993
