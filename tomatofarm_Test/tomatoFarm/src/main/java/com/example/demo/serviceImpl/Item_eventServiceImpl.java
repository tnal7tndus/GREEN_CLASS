package com.example.demo.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.item_event;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Item_eventRepository;
import com.example.demo.service.Item_eventService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class Item_eventServiceImpl implements Item_eventService{

	Item_eventRepository item_eventRepository;
	
	@Override
	@Transactional
	public List<item_event> merge(List<item_event> list) {
		return item_eventRepository.merge(list);
	}

	@Override
	public List<item_event> selectEventWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return item_eventRepository.selectEventWhereNumber(searchRequest);
		} else {
			return item_eventRepository.selectEventWhereString(searchRequest);
		}
	}
}
