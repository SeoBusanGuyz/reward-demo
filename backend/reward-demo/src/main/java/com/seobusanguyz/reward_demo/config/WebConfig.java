package com.seobusanguyz.reward_demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")              // CORS 적용할 URL 패턴
                .allowedOrigins("http://localhost:5173") // 허용할 프론트 주소
                .allowedMethods("GET","POST","PUT","DELETE","OPTIONS") // 허용 메서드
                .allowedHeaders("*")                // 허용 헤더
                .allowCredentials(true);            // 쿠키 인증 허용 여부
    }
}