package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.item_event;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.Item_eventService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/event")
public class EventController {

	Item_eventService item_eventService;

	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectEventWhere(SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		List<item_event> list = null;

		list = item_eventService.selectEventWhere(searchRequest);

		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@PostMapping("/merge")
	public ResponseEntity<?> merge(@RequestBody List<item_event> list) {
		ResponseEntity<?> result = null;

		if (item_eventService.merge(list).size() > 0)
			result = ResponseEntity.status(HttpStatus.OK).body(item_eventService.selectEventWhere(new SearchRequest("name", "")));
		else
			result = ResponseEntity.status(HttpStatus.OK).body("데이터 입력 실패");

		return result;
	}
}
