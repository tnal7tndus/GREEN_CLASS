package com.example.demo.order.service;

import java.util.List;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.OrderA;

public interface OrderService {

	public OrderDTO order(OrderDTO dto, String userId);
}
