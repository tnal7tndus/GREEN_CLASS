package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.UserCartDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;

public interface UserCartService {

	List<UserCart> merge(List<UserCart> list);
	
	List<UserCartDTO> selectItemListWhereUserID(UserCart entity);
	
	void delete(List<UserCart> entity);
}
