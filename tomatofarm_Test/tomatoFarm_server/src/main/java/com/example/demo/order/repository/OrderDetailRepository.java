package com.example.demo.order.repository;

import java.util.List;

import com.example.demo.order.entity.OrderDetail;

public interface OrderDetailRepository {

	int batchInsert(List<OrderDetail> list);
}
