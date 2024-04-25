package com.example.demo.item.item_event.repository;

import java.util.List;

import com.example.demo.item.item_event.entity.ItemEvent;
import com.example.demo.module.SearchRequest;

public interface ItemEventRepository {

	List<ItemEvent> selectEventWhereNumber(SearchRequest searchRequest);
	List<ItemEvent> selectEventWhereString(SearchRequest searchRequest);
	List<ItemEvent> merge(List<ItemEvent> list);
}
