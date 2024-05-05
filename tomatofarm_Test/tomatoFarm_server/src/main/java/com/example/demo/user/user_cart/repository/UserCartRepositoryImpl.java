package com.example.demo.user.user_cart.repository;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.entity.UserCart;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.item.item.entity.QItem.item;
import static com.example.demo.user.user_cart.entity.QUserCart.userCart;
import static com.example.demo.item.item_event.entity.QItemEvent.itemEvent;
@Repository
@AllArgsConstructor
public class UserCartRepositoryImpl implements UserCartRepository {

	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	public List<UserCart> mergeAll(List<UserCart> list) {
		List<UserCart> result = new ArrayList<UserCart>();
		for (UserCart e : list) {
			result.add(entityManager.merge(e));
		}
		return result;
	}
	
	public UserCart merge(UserCart entity) {
		return entityManager.merge(entity);
	}

	@Override
	public List<UserCartDTO> selectItemListWhereUserID(UserCart entity) {
		return jpaQueryfactory
				.select(Projections.bean(UserCartDTO.class, userCart.itemCode, userCart.userId, userCart.amount,
						item.name.as("itemName"), item.price, item.delivery, item.vat, item.stock,
						itemEvent.code.as("eventCode"), itemEvent.discount))
				.from(userCart).leftJoin(item).on(userCart.itemCode.eq(item.code))
				.leftJoin(itemEvent).on(item.itemEventCode.eq(itemEvent.code))
				.where(userCart.userId.eq(entity.getUserId()).and(userCart.amount.gt(0)))
				.fetch();
	}

	@Override
	public List<UserCart> selectCartWhereUserIDItemList(String user_id, List<Integer> item_codeList) {
		return jpaQueryfactory
				.selectFrom(userCart)
				.where(userCart.userId.eq(user_id).and(userCart.itemCode.in(item_codeList)))
				.fetch();
	}
	
	@Override
	public void delete(List<UserCart> list) {
		for(UserCart entity : list) {
			entity = entityManager.merge(entity);
			entityManager.remove(entity);
		}
	}
}
