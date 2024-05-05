package com.example.demo.user.user_address.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.module.SearchRequest;
import com.example.demo.user.user_address.domain.UserAddressDTO;
import com.example.demo.user.user_address.entity.UserAddress;
import com.example.demo.user.user_address.repository.UserAddressRepository;
import com.example.demo.user.user_address.repository.UserAddressRepositoryJPA;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserAddressServiceImpl implements UserAddressService {

	UserAddressRepository userAddressRepository;
	UserAddressRepositoryJPA jpaRepository;

	@Override
	public List<UserAddress> selectAddressWhereId(String id) {
		System.out.println(id);
		return userAddressRepository.selectAddressWhereId(id);
	}

	@Transactional
	@Override
	public UserAddress insertUserAddress(UserAddress entity) {
		return userAddressRepository.insertUserAddress(entity);
	}
	
	@Transactional
	@Override
	public void deleteAddress(UserAddress entity) {
		userAddressRepository.deleteAddress(entity);
	}
	
	@Override
	public List<UserAddressDTO> selectAddressWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return userAddressRepository.selectAddressWhereNumber(searchRequest);
		} else {
			return userAddressRepository.selectAddressWhereString(searchRequest);
		}
	}
	
	@Override
	public List<UserAddress> saveAll(List<UserAddress> list) {
		return jpaRepository.saveAll(list);
	}
	
}
