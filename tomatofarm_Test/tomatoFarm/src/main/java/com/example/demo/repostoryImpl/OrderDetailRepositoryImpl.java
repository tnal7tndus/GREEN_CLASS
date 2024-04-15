package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QOrderDetail.orderDetail;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;
import com.example.demo.entity.Itemorder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.repository.ItemorderRepository;
import com.example.demo.repository.OrderDetailRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class OrderDetailRepositoryImpl implements OrderDetailRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

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
