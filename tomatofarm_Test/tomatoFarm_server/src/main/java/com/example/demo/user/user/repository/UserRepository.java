package com.example.demo.user.user.repository;


import java.util.List;

import com.example.demo.user.user.domain.UserDTO;
import com.example.demo.user.user.entity.User;
import org.springframework.stereotype.Repository;

import com.example.demo.module.SearchRequest;

@Repository
public interface UserRepository {
	public User selectUser(User entity);
	public List<UserDTO> selectUserWhereString(SearchRequest searchRequest);
	public List<UserDTO> selectUserWhereNumber(SearchRequest searchRequest);
	public User merge(User entity);
}
