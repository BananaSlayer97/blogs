package com.Westworld.blogs.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.Westworld.blogs.core",
        "com.Westworld.blogs.service",
        "com.Westworld.blogs.admin"
        })

public class YouyaBootAdminApplication {

    public static void main(String[] args) {
        SpringApplication.run(YouyaBootAdminApplication.class, args);
        }

}
