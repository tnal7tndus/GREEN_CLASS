package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
public class HomeController {
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@GetMapping("/home")
	public void home() {
		
	}

	@GetMapping("/health")
	public ResponseEntity<?> health() {

		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body("Success Health Check");
		return result;
	}

}
