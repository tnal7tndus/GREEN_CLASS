package com.example.demo.user.user_cart.controller;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.entity.UserCart;
import com.example.demo.module.jwtToken.TokenProvider;
import com.example.demo.user.user_cart.service.UserCartService;

import lombok.AllArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/usercart")
public class UserCartController {

//	@Autowired
	private final UserCartService userCartService;
	TokenProvider tokenProvider;

	@Transactional
	@PostMapping("/merge")
	public ResponseEntity<?> merge(@RequestBody List<UserCart> list, @AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;
		for (UserCart e : list)
			e.setUserId(userId);
		// 자료를 서비스를 통해서 저장
			userCartService.mergeAll(list); // 장바구니 DB에 들어갔어
			result = ResponseEntity.status(HttpStatus.OK).body(userCartService.findAllByuserId(userId));
		return result;
	}

	@GetMapping("/selectuser")
	public ResponseEntity<?> select(@AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;
		List<UserCartDTO> list = userCartService.findAllByuserId(userId);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	@PostMapping("/selectnouser")
	public ResponseEntity<?> selectnouser(@RequestBody List<Integer> itemlist) {
		System.out.println(itemlist);
		ResponseEntity<?> result = null;
		List<UserCartDTO> list = userCartService.findAllBy(itemlist);
		System.out.println(list);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@PostMapping("/delete")
	public ResponseEntity<?> delete(@RequestBody List<UserCart> list, HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		for(UserCart entity : list) {
			System.out.println(entity);
			entity.setUserId(id);
		}
		userCartService.delete(list);

		return result;

	}

}
