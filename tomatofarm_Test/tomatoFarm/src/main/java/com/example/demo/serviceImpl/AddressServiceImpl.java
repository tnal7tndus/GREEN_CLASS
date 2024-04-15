package com.example.demo.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.UserAddress;
import com.example.demo.repository.AddressRepository;
import com.example.demo.service.AddressService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AddressServiceImpl implements AddressService {

	AddressRepository addressRepository;

	@Override
	public List<UserAddress> selectAddressWhereId(String id) {
		return addressRepository.selectAddressWhereId(id);
	}

	@Transactional
	@Override
	public UserAddress insertUserAddress(UserAddress entity) {
		return addressRepository.insertUserAddress(entity);
	}
	
	@Transactional
	@Override
	public void deleteAddress(UserAddress entity) {
		addressRepository.deleteAddress(entity);
	}
}
