package com.example.demo.user.user_address.service;

import java.util.List;

import com.example.demo.module.SearchRequest;
import com.example.demo.user.user_address.domain.UserAddressDTO;
import com.example.demo.user.user_address.entity.UserAddress;

import io.micrometer.core.instrument.search.Search;

public interface UserAddressService {
	
	List<UserAddress> selectAddressWhereId(String id);
	UserAddress insertUserAddress(UserAddress entity);
	List<UserAddress> saveAll(List<UserAddress> list);
	void deleteAddress(UserAddress entity);
	
	List<UserAddressDTO> selectAddressWhere(SearchRequest searchRequest);
}
