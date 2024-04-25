package com.example.demo.item.item_event.service;

import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.item.item_event.entity.ItemEvent;
import org.springframework.stereotype.Service;

import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_event.repository.ItemEventRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ItemEventServiceImpl implements ItemEventService {

	ItemEventRepository item_eventRepository;
	
	@Override
	@Transactional
	public List<ItemEvent> merge(List<ItemEvent> list) {
		return item_eventRepository.merge(list);
	}

	@Override
	public List<ItemEvent> selectEventWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return item_eventRepository.selectEventWhereNumber(searchRequest);
		} else {
			return item_eventRepository.selectEventWhereString(searchRequest);
		}
	}
}
