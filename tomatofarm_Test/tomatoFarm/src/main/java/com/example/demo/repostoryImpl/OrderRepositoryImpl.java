package com.example.demo.repostoryImpl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.repository.OrderRepository;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class OrderRepositoryImpl implements OrderRepository {

	private final EntityManager entityManager;

	@Override
	public ItemOrder order(ItemOrder order) {
		return entityManager.merge(order);
	}

	@Override
	public List<OrderDetail> detailOrder(List<OrderDetail> list) {
		List<OrderDetail> detailList = new ArrayList<OrderDetail>();
		for (OrderDetail detail : list) {
			detailList.add(entityManager.merge(detail));
		}
		return detailList;
	}
}
