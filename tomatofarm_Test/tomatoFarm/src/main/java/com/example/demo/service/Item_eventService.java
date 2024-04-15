package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.item_event;
import com.example.demo.module.SearchRequest;

public interface Item_eventService {

	List<item_event> selectEventWhere(SearchRequest searchRequest);
	List<item_event> merge(List<item_event> list);
}
