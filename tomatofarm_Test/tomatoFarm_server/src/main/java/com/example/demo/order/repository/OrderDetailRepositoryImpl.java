package com.example.demo.order.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.order.entity.OrderDetail;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class OrderDetailRepositoryImpl implements OrderDetailRepository {

	private final EntityManager entityManager;

	@Override
	public int batchInsert(List<OrderDetail> list) {
		int result = 0;
		for (OrderDetail entity : list) {
			entityManager.persist(entity);
			result++;
		}
			
		return result;
	}

}
