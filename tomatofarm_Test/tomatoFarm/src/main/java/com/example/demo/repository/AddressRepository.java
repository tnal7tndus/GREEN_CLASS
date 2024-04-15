package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.UserAddress;

public interface AddressRepository {

	List<UserAddress> selectAddressWhereId(String id);
	
	UserAddress insertUserAddress(UserAddress entity);
	
	void deleteAddress(UserAddress entity);
}
