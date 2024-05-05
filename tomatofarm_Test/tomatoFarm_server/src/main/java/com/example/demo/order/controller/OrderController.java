package com.example.demo.order.controller;

import java.util.List;

import com.example.demo.order.entity.OrderA;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.service.OrderService;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {

	private final OrderService orderService;
	
	@PostMapping("/order")
	public ResponseEntity<?> order(@RequestBody OrderDTO dto, @AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;
		dto = orderService.order(dto, userId);
		System.out.println(dto);
		if (dto !=null)
			result = ResponseEntity.status(HttpStatus.OK).body(dto);
		else
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("order failed");

		return result;
	}
	
}
