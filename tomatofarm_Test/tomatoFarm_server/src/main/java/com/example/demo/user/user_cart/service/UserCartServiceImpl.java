package com.example.demo.user.user_cart.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.repository.UserCartRepository;
import com.example.demo.user.user_cart.repository.UserCartRepositoryJPA;
import org.springframework.stereotype.Service;

import com.example.demo.user.user_cart.entity.UserCart;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserCartServiceImpl implements UserCartService {

	UserCartRepository userCartRepository;
	UserCartRepositoryJPA userCartRepositoryJPA;

	@Transactional
	@Override
	public UserCart merge(UserCart entity) {
		return userCartRepository.merge(entity);
	}
	
	@Transactional
	@Override
	public List<UserCart> mergeAll(List<UserCart> list) {
		// LocalDate 클래스를 이용해서 entity에 등록일자 담기
		LocalDate today = LocalDate.now();
		for (UserCart e : list) {
			e.setRegdate(today);
		}
		userCartRepositoryJPA.saveAll(list);
		return null;
	}

	@Override
	public List<UserCartDTO> findAllByuserId(String userId) {
		return userCartRepositoryJPA.findAllByUserId(userId);
	}

	@Override
	public List<UserCartDTO> findAllBy(List<Integer> list) {
		return userCartRepositoryJPA.findAllByItemCodeIn(list);
	}

	@Override
	@Transactional
	public void delete(List<UserCart> list) {
		userCartRepository.delete(list);
	}
}
