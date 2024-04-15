package com.example.demo.serviceImpl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService{

	private final OrderRepository orderRepository;
	
	@Transactional
	@Override
	public ItemOrder order(ItemOrder order,List<OrderDetail> list) {
		ItemOrder ordered = orderRepository.order(order);
		for(OrderDetail detail : list) {
			detail.setOrder_code(ordered.getCode());
		}
		orderRepository.detailOrder(list);
		return ordered;
	}
	
}
