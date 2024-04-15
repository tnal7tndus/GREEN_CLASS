package com.example.demo.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.demo.domain.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.module.SearchRequest;

public interface UserService {

	
	default User dtotoEntity(UserDTO dto) {
		User entity = User.builder().id(dto.getId()).password(dto.getPassword()).level(dto.getLevel()).username(dto.getUsername())
				.phonenumber(dto.getPhonenumber()).address_code(dto.getAddress_code()).address1(dto.getAddress1()).address2(dto.getAddress2())
				.email(dto.getEmail()).email2(dto.getEmail2()).gender(dto.getGender()).birthdate(dto.getBirthdate())
				.point(dto.getPoint()).build();
		return entity;
	}

	
	
	default UserDTO entityToDTO(User entity) {
		UserDTO dto = UserDTO.builder().id(entity.getId()).password(entity.getPassword()).level(entity.getLevel()).username(entity.getUsername())
				.phonenumber(entity.getPhonenumber()).address_code(entity.getAddress_code()).address1(entity.getAddress1()).address2(entity.getAddress2())
				.email(entity.getEmail()).email2(entity.getEmail2()).gender(entity.getGender()).birthdate(entity.getBirthdate())
				.point(entity.getPoint()).build();
		return dto;
	}
	
	User selectUser(User dto);
	
	int insertUser(UserDTO dto);
	
	User updateUser(User entity);
	
	List<User> selectUserWhere(SearchRequest searchRequest);
	
	List<User> insertTest(List<User> list);
	
//	=================================
	
}
