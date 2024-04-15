package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

import com.example.demo.jwtToken.JwtAuthenticationFilter;

//** @EnableWebSecurity
//=> SpringBoot Auto Configuration @들 중의 하나이며, 손쉽게 Security 설정을 할수있도록해줌.
// 	 그러므로 설정파일을 의미하는 @Configuration 는 없어도 됨

@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	private JwtAuthenticationFilter jwtAuthenticationFilter;
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		// ** Filter 등록
		http.addFilterAfter(
				jwtAuthenticationFilter,
				CorsFilter.class);
		
		// ** http 시큐리티 빌더
		return http.httpBasic().disable() // token을 사용하므로 basic 인증 disable (사용안함)
                .csrf().disable() // csrf는 현재 사용하지 않으므로 disable
                .cors().and()     
                // .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                // => session 기반이 아님을 선언
				.authorizeRequests()
				.antMatchers("/", "/home","/resources/**","/item/**", "/itemask/**" , "/itemreview/**", "/keyword/**", "/user/**", "/visit/**", "/chatbot/**","/usercart/**","/test/**","/order/**").permitAll() 
				// => "/", "/home" 등의 경로는 인증 안해도 됨.
				.anyRequest().authenticated().and() 
				// => 위 이외의 모든 경로는 인증해야됨.
                .build();
    } 

} 
