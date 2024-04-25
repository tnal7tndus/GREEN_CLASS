package com.example.demo.module.jwtToken;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.demo.user.user.entity.User;

// => dependency 추가 필요함
import io.jsonwebtoken.Claims; 
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@Service
public class TokenProvider {
	private static final String SECRET_KEY = "NMA8JPctFuna59f5";

	// 1. JWT Token 생성
	public String create(User entity) {
		// 1.1) 유효기한 설정
		//	- 현재시간 으로부터 1일로 설정
		Date expiryDate = Date.from(
				Instant.now() // 현재 시간
				.plus(1, ChronoUnit.DAYS));  

		
		// 1.2) Jwts(JWT 관리 API) 클래스로 토큰 생성 보관  
		return Jwts.builder()
			// => header에 들어갈 내용 및 서명을 하기 위한 SECRET_KEY
			.signWith(SignatureAlgorithm.HS512, SECRET_KEY)
			// => payload에 들어갈 내용
			.setSubject(entity.getId())  // sub: subject(유일해야함->userID 보관)
			.setIssuer("tomatofarm") 	   // iss: Issuer, 발급 주체
			.setIssuedAt(new Date())   // iat: Issued At, 토큰 발급시간
			.setExpiration(expiryDate) // exp: Expiration, 토큰 만료시간
			.compact();
	}

	// 2. 검증
	public String validateAndGetUserId(String token) {
		Claims claims = Jwts.parser()
						.setSigningKey(SECRET_KEY)
						.parseClaimsJws(token)
						.getBody();

		return claims.getSubject();
	}
	
	public String parseBearerToken(HttpServletRequest request) {
		// => Http request 의 헤더를 파싱해 Bearer 토큰을 리턴한다.	
			
			String bearerToken = request.getHeader("Authorization");  
			if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
				return bearerToken.substring(7);
			}
			return null;
		}
} //class
