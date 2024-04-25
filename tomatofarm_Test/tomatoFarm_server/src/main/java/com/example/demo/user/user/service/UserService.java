package com.example.demo.user.user.service;

import java.util.List;

import com.example.demo.user.user.domain.SignForm;
import com.example.demo.user.user.domain.UserDTO;
import com.example.demo.user.user.domain.UserToken;
import com.example.demo.user.user.entity.User;
import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.entity.Item;
import com.example.demo.module.SearchRequest;

public interface UserService {
	
	default User dtotoEntity(UserDTO dto) {
		User entity = User.builder()
				.id(dto.getId())
				.password(dto.getPassword())
				.userLevelCode(dto.getUserLevelCode())
				.name(dto.getName())
				.phonenumber(dto.getPhonenumber())
				.point(dto.getPoint())
				.lastdate(dto.getLastdate())
				.build();
		return entity;
	}

	default UserDTO entityToDTO(User dto) {
		UserDTO entity = UserDTO.builder()
				.id(dto.getId())
				.password(dto.getPassword())
				.userLevelCode(dto.getUserLevelCode())
				.name(dto.getName())
				.phonenumber(dto.getPhonenumber())
				.point(dto.getPoint())
				.lastdate(dto.getLastdate())
				.build();
		return entity;
	}

	UserToken selectUser(User dto);
	boolean adminCheck(String userId);

	void signup(SignForm signForm);

	Boolean checkID(String id);

	List<UserDTO> selectUserWhere(SearchRequest searchRequest);
	
	List<User> saveAll(List<User> list);
	
	User merge(SignForm signForm);
	
	void delete(UserDTO dto);
	
//	=================================
	
}
