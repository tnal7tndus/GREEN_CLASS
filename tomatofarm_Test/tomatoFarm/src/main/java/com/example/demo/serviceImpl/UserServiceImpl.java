package com.example.demo.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	private final UserRepository userRepository;

	@Override
	public User selectUser(User entity) {
		return userRepository.selectUser(entity);
	}

	@Override
	public int insertUser(UserDTO dto) {
		return userRepository.insertUser(dto);
	}

	@Override
	public User updateUser(User entity) {
		return userRepository.updateUser(entity);
	}

	@Override
	public List<User> selectUserWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return userRepository.selectUserWhereNumber(searchRequest);
		} else {
			return userRepository.selectUserWhereString(searchRequest);
		}
	}
	
	@Override
	@Transactional
	public List<User> insertTest(List<User> list) {
		return userRepository.insertTest(list);
	}
}
