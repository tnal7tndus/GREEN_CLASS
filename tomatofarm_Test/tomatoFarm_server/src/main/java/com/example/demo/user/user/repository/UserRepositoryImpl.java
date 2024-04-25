package com.example.demo.user.user.repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.example.demo.user.user.domain.UserDTO;
import com.example.demo.user.user.entity.User;
import org.springframework.stereotype.Repository;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;

import lombok.AllArgsConstructor;

import static com.example.demo.item.item.entity.QItem.item;
import static com.example.demo.user.user_detail.entity.QUserDetail.userDetail;
import static com.example.demo.user.user_address.entity.QUserAddress.userAddress;
import static com.example.demo.item.item_event.entity.QItemEvent.itemEvent;
import static com.example.demo.user.user.entity.QUser.user;

import java.util.List;

@Repository
@AllArgsConstructor
public class UserRepositoryImpl implements UserRepository {
	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	@Override
	public User selectUser(User entity) {
		return jpaQueryfactory
				.selectFrom(user)
				.where(user.id.eq(entity.getId()))
				.fetchOne();
	}
	
	@Override
	public List<UserDTO> selectUserWhereString(SearchRequest searchRequest) {
	    return jpaQueryfactory
	            .select(Projections.bean(UserDTO.class, user.id, user.password, user.name, user.phonenumber, user.point, user.userLevelCode, userDetail.birthdate, userDetail.email))
	            .from(user).join(userDetail).on(user.id.eq(userDetail.userId))
	            .where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
	            .fetch();
	}

	

	@Override
	public List<UserDTO> selectUserWhereNumber(SearchRequest searchRequest) {
		return jpaQueryfactory
				.select(Projections.bean(UserDTO.class, user.id, user.password, user.name, user.phonenumber, user.point, user.userLevelCode, userDetail.birthdate, userDetail.email))
				.from(user).join(userDetail).on(user.id.eq(userDetail.userId))
				.where(Expressions.numberPath(Integer.class, searchRequest.getColumn()).stringValue()
						.contains(searchRequest.getKeyword()))
				.fetch();
	}
	
	@Override
	public User merge(User entity) {
		return entityManager.merge(entity);
	}

}
