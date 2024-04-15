package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.Itemorder;
import com.example.demo.entity.OrderDetail;

public interface ItemorderRepository {

	Itemorder merge(Itemorder entity);
}
