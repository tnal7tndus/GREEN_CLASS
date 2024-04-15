package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;

public interface OrderRepository {

	ItemOrder order(ItemOrder order);
	List<OrderDetail> detailOrder(List<OrderDetail> list);
}
