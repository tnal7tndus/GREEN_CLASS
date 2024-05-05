package com.example.demo.order.repository;

import com.example.demo.order.entity.OrderA;

import java.util.List;

public interface ItemorderRepository {

	OrderA merge(OrderA entity);

	List selectOrderByCode(Integer code);
}
