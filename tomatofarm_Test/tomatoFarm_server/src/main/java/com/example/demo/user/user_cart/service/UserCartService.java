package com.example.demo.user.user_cart.service;

import java.util.List;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.entity.UserCart;

public interface UserCartService {

	UserCart merge(UserCart entity);
	List<UserCart> mergeAll(List<UserCart> list);
	
	List<UserCartDTO> findAllByuserId(String userId);

	List<UserCartDTO> findAllBy(List<Integer> list);
	
	void delete(List<UserCart> entity);
}
