package com.example.demo.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

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

import com.example.demo.domain.UserDTO;
import com.example.demo.domain.UserToken;
import com.example.demo.entity.User;
import com.example.demo.jwtToken.TokenProvider;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping(value = "/user")
public class UserController {

	UserService userService;
	PasswordEncoder passwordEncoder;
	private TokenProvider tokenProvider;
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User entity) {
		ResponseEntity<?> result = null;
		String password = entity.getPassword(); // user가 입력한 password를 변수에 저장
		User user = userService.selectUser(entity); // user가 입력한 id로 userData를 조회 하여 dto를 채운다.

		if (user != null) { // 조회성공
			if (passwordEncoder.matches(password, user.getPassword())) {
				final String token = tokenProvider.create(user);
				final UserToken userToken = UserToken.builder().token(token).id(user.getId())
						.username(user.getUsername()).build();
				result = ResponseEntity.status(HttpStatus.OK).body(userToken);
			} else {
				result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("비밀번호가 일치하지 않습니다.");
			}
		} else { // 조회실패
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("일치하는 ID가 없습니다.");
		}

		return result;
	}

	@PostMapping("/signup")
	public ResponseEntity<?> singup(@RequestBody User entity) {
		ResponseEntity<?> result = null;
		System.out.println(entity);
		String password = entity.getPassword();
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		entity.setPassword(encoder.encode(password));

		if (userService.updateUser(entity) != null) {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_successed");
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_failed");
		}
		return result;
	}

	@GetMapping("/select")
	public ResponseEntity<?> selectUserWhereID(HttpServletRequest request) {
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		User entity = new User().builder().id(id).build();

		User user = userService.selectUser(entity);
		System.out.println(user);

		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectUserWhere(SearchRequest searchRequest) {
		List<User> list = null;
		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(userService.selectUserWhere(searchRequest));
		return result;
	}
	
	
	@PostMapping("/merge")
	public ResponseEntity<?> merge(@RequestBody List<User> list) {
		ResponseEntity<?> result = null;
		
		if (userService.insertTest(list).size() > 0)
			result = ResponseEntity.status(HttpStatus.OK).body(userService.selectUserWhere(new SearchRequest("username", "")));
		else
			result = ResponseEntity.status(HttpStatus.OK).body("데이터 입력 실패");
		
		return result;
	}

}
