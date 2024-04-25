package com.example.demo.user.user_cart.repository;


import java.util.List;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.entity.UserCart;


public interface UserCartRepository{

	UserCart merge(UserCart entity);
	List<UserCart> mergeAll(List<UserCart> list);
	List<UserCartDTO> selectItemListWhereUserID(UserCart userCart);
	List<UserCart> selectCartWhereUserIDItemList(String user_id, List<Integer> item_codeList);
	void delete(List<UserCart> list);
}
