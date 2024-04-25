package com.example.demo.user.user.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.example.demo.page.page_keyword.entity.PageKeyword;
import com.example.demo.page.page_keyword.repository.pageKeywordRepository;
import com.example.demo.user.user.domain.SignForm;
import com.example.demo.user.user.domain.UserDTO;
import com.example.demo.user.user.repository.UserRepositoryJPA;
import com.example.demo.user.user_address.entity.UserAddress;
import com.example.demo.user.user_address.repository.UserAddressRepositoryJPA;
import com.example.demo.user.user_detail.entity.UserDetail;
import com.example.demo.user.user_detail.repository.UserDetailRepositoryJPA;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.user.user.domain.UserToken;
import com.example.demo.user.user.entity.User;
import com.example.demo.module.jwtToken.TokenProvider;
import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.entity.Item;
import com.example.demo.module.SearchRequest;
import com.example.demo.user.user.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final UserAddressRepositoryJPA userAddressRepositoryJPA;
	private final UserDetailRepositoryJPA userDetailRepositoryJPA;
	private final UserRepositoryJPA userRepositoryJPA;
	private final pageKeywordRepository pageKeywordRepository;
	private final PasswordEncoder passwordEncoder;
	private final TokenProvider tokenProvider;
	
	
	
	@Override
	public UserToken selectUser(User entity) {
		UserToken userToken = new UserToken();
		
		String password = entity.getPassword();
		entity = userRepository.selectUser(entity);
		
		if (entity != null) { 
			// 로그인성공
			if (passwordEncoder.matches(password, entity.getPassword())) {
				 List<PageKeyword> pageKeyword_list = pageKeywordRepository.findByUserIdOrderBySearchDateDesc(entity.getId());
				 List<String> keyword = new ArrayList<>();
				 for (PageKeyword e : pageKeyword_list){
					 keyword.add(e.getKeyword());
				 }
				final String token = tokenProvider.create(entity);
				userToken = UserToken.builder()
						.token(token)
						.id(entity.getId())
						.username(entity.getName())
						.admin(entity.getUserLevelCode() < 100)
						.keyword(keyword)
						.build();
			} else {
				userToken.setError("비밀번호가 일치하지 않습니다.");
			}
		} else { // 조회실패
			userToken.setError("일치하는 ID가 없습니다.");
		}
		
		return userToken;
	}
	
	@Override
	public boolean adminCheck(String userId) {
		boolean result = false;
		Optional<User> optionalUser=userRepositoryJPA.findById(userId);
		if(optionalUser.isPresent()){
			User user = optionalUser.get();
			if (user.getUserLevelCode() < 100)
				result = true;
		}
		return result;
	}

	@Transactional
	@Override
	public void signup(SignForm signForm) {
		User user = User.builder()
				.id(signForm.getId())
				.password(passwordEncoder.encode(signForm.getPassword()))
				.name(signForm.getName())
				.phonenumber(signForm.getPhonenumber())
				.build();
		userRepositoryJPA.save(user);

		UserAddress userAddress = UserAddress.builder()
				.userId(signForm.getId())
				.mainAddress(0)
				.addressCode(signForm.getAddressCode())
				.address1(signForm.getAddress1())
				.address2(signForm.getAddress2())
				.build();
		userAddressRepositoryJPA.save(userAddress);

		UserDetail userDetail = UserDetail.builder()
				.userId(signForm.getId())
				.email(signForm.getEmail())
				.gender(signForm.getGender())
				.birthdate(signForm.getBirthdate())
				.regdate(LocalDate.now())
				.build();
		userDetailRepositoryJPA.save(userDetail);
	}

	@Override
	public Boolean checkID(String id) {
		Boolean result = false;
		System.out.println(id);
		if(userRepositoryJPA.findById(id).isPresent())
			result = true;

		return result;
	}

	@Override
	public List<UserDTO> selectUserWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return userRepository.selectUserWhereNumber(searchRequest);
		} else {
			return userRepository.selectUserWhereString(searchRequest);
		}
	}
	
	@Override
	@Transactional
	public List<User> saveAll(List<User> list) {
		List<User> checkList = null;
//		for(User user : list) {
//			checkList.add()
//		}
		return userRepositoryJPA.saveAll(list);
	}
	
	@Transactional
	@Override
	public void delete(UserDTO dto) {
		User entity = dtotoEntity(dto);
		userRepositoryJPA.delete(entity);
	}
	
	@Transactional
	@Override
	public User merge(SignForm signForm) {
		UserDTO dto = userRepository.selectUserWhereString(new SearchRequest("id",signForm.getId())).get(0);
		String password = passwordEncoder.encode(signForm.getPassword());
		User entity = dtotoEntity(dto);
		entity.setPassword(password);
		entity.setName(signForm.getName());
		entity.setPhonenumber(signForm.getPhonenumber());
		
		return userRepository.merge(entity);
	}
}
