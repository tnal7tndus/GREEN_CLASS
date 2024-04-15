package com.example.demo.controller;

import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.entity.UserAddress;
import com.example.demo.jwtToken.TokenProvider;
import com.example.demo.module.OrderRequest;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

	OrderService orderService;
	TokenProvider tokenProvider; 
	
	@PostMapping("/order")
	public ResponseEntity<?> test(@RequestBody OrderDTO dto,HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = null;
			id = tokenProvider.validateAndGetUserId(token);
		OrderRequest orderRequest = new OrderRequest();
		ItemOrder orderEntity = orderRequest.makeOrderEntity(dto, id);
		List<OrderDetail> detailList = orderRequest.makeDetailEntity(dto,id);
		System.out.println("===================");
		System.out.println("===================");
		System.out.println(orderEntity.getId());
		System.out.println("===================");
		
		orderService.order(orderEntity, detailList);
		result = ResponseEntity.status(HttpStatus.OK).body("주문 성공");
		return null;
	}
	
}
