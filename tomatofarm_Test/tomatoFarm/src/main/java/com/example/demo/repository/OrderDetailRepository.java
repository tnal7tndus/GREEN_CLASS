package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.Itemorder;
import com.example.demo.entity.OrderDetail;

public interface OrderDetailRepository {

	int batchInsert(List<OrderDetail> list);
}
