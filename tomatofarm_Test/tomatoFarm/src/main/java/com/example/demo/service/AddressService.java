package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.UserAddress;

public interface AddressService {
	
	List<UserAddress> selectAddressWhereId(String id);
	UserAddress insertUserAddress(UserAddress entity);
	void deleteAddress(UserAddress entity);
}
