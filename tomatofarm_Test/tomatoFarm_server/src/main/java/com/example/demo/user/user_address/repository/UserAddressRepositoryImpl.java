package com.example.demo.user.user_address.repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;import org.springframework.data.web.ProjectedPayload;
import org.springframework.stereotype.Repository;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.module.SearchRequest;
import com.example.demo.user.user_address.domain.UserAddressDTO;
import com.example.demo.user.user_address.entity.UserAddress;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.QBean;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.item.item.entity.QItem.item;
//import static com.example.demo.item.item_event.entity.Qitem_event.itemEvent;
import static com.example.demo.user.user_address.entity.QUserAddress.userAddress;

import java.util.List;

@Repository
@AllArgsConstructor
public class UserAddressRepositoryImpl implements UserAddressRepository {

	JPAQueryFactory factory;
	EntityManager entityManager;
	private final QBean<UserAddressDTO> dtoBean = Projections.bean(UserAddressDTO.class, 
			userAddress.seq, userAddress.userId, userAddress.info, userAddress.mainAddress, userAddress.addressCode, userAddress.addressCode,
			userAddress.address1, userAddress.address2, userAddress.phonenumber);

	
	@Override
	public List<UserAddress> selectAddressWhereId(String id) {
		System.out.println(id);
		return factory.selectFrom(userAddress)
				.from(userAddress)
				.where(userAddress.userId.eq(id))
				.fetch();
	}
	
	@Override
	public UserAddress insertUserAddress(UserAddress entity) {
		return entityManager.merge(entity);
	}
	
	@Transactional
	@Override
	public void deleteAddress(UserAddress entity) {
		UserAddress test = entityManager.merge(entity);
		entityManager.remove(test);
	}
	
	@Override
	public List<UserAddressDTO> selectAddressWhereNumber(SearchRequest searchRequest) {
		return factory.select(dtoBean)
				.from(userAddress)
				.where(Expressions.numberPath(Integer.class,searchRequest.getColumn()).stringValue().contains(searchRequest.getKeyword()))
				.fetch();
	}
	public List<UserAddressDTO> selectAddressWhereString(SearchRequest searchRequest) {
		return factory.select(dtoBean)
				.from(userAddress)
				.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
				.fetch();
	}
}
