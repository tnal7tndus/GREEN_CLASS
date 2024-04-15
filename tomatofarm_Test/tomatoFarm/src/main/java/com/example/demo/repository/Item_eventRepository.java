package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.item_event;
import com.example.demo.module.SearchRequest;

public interface Item_eventRepository {

	List<item_event> selectEventWhereNumber(SearchRequest searchRequest);
	List<item_event> selectEventWhereString(SearchRequest searchRequest);
	List<item_event> merge(List<item_event> list);
}
