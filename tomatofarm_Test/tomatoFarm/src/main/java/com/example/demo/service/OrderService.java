package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;

public interface OrderService {

	public ItemOrder order(ItemOrder order, List<OrderDetail> list);
}
