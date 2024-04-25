package com.example.demo.order.repository;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.OrderA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRepositoryJPA extends JpaRepository<OrderA, Integer> {

}
