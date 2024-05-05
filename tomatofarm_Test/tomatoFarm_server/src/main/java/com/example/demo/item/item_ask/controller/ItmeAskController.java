package com.example.demo.item.item_ask.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import com.example.demo.item.item_ask.entity.ItemAsk;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.item.item_ask.domain.ItemAskDTO;
import com.example.demo.module.jwtToken.TokenProvider;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_ask.service.ItemAskService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:3000")
@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value = "/itemask")
public class ItmeAskController {
	private final ItemAskService item_askService;

	TokenProvider tokenProvider;

	@GetMapping("/select")
	public ResponseEntity<?> select(SearchRequest searchRequest) {
		System.out.println(searchRequest);
		ResponseEntity<?> result = null;
		List<?> list = null;
		if (searchRequest.getColumn().equals("itemCode")) {
			list = item_askService.findAllByItemCodeOrderBySeqDesc(searchRequest);
		} else {
			list = item_askService.selectItemAskListStringWhereType(searchRequest);
		}
		result = ResponseEntity.status(HttpStatus.OK).body(list.size() > 0 ? list : null);
		return result;
	}

	@Transactional
	@PostMapping("/merge")
	public ResponseEntity<?> merge(@RequestBody ItemAsk entity, HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		if (entity.getUserIdWriter() == null) {
			entity.setUserIdWriter(id);
			if (entity.getPassword() != null) {
				String password = entity.getPassword();
				BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
				entity.setPassword(encoder.encode(password));
			}
		}
		item_askService.merge(entity);
		result = ResponseEntity.status(HttpStatus.OK).body(item_askService.selectItemAskListStringWhereType(new SearchRequest("title","")));
		
		return result;
	}

	// 비밀번호 확인하는 매서드

	/*
	 * 1. 엔티티에 리퀘스트바디 자료 바인딩 2. seq로 일치하는 데이터 1개 조회 3. 비밀번호 인코더(클래스) 매치(매서드) 이용해서
	 * 비밀번호 일치하는지 확인 4. 비밀번호 일치하면 -> 신호만 5. 일치하면 오픈 실패하면 catch
	 * 
	 */
	@PostMapping("/askpassword")
	public ResponseEntity<?> askpassword(@RequestBody ItemAsk entity) {
		ResponseEntity<?> result = null;
		System.out.println(entity);
		if (item_askService.checkPassword(entity)) {
			// 비밀번호 일치
			result = ResponseEntity.status(HttpStatus.OK).body(entity);
		} else {
			// 비밀번호 불일치
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("비밀번호 불일치");
		}
		return result;
	}

}
