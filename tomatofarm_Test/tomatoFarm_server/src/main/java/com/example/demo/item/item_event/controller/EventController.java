package com.example.demo.item.item_event.controller;

import java.util.List;

import com.example.demo.item.item_event.entity.ItemEvent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_event.service.ItemEventService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/event")
public class EventController {

	ItemEventService item_eventService;

	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectEventWhere(SearchRequest searchRequest, @AuthenticationPrincipal String userid) {
		ResponseEntity<?> result = null;
		List<ItemEvent> list = null;

		list = item_eventService.selectEventWhere(searchRequest);

		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@PostMapping("/merge")
	public ResponseEntity<?> merge(@RequestBody List<ItemEvent> list) {
		ResponseEntity<?> result = null;

		if (item_eventService.merge(list).size() > 0)
			result = ResponseEntity.status(HttpStatus.OK).body(item_eventService.selectEventWhere(new SearchRequest("name", "")));
		else
			result = ResponseEntity.status(HttpStatus.OK).body("데이터 입력 실패");

		return result;
	}
}
