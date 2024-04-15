package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Visit_pageDTO;
import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.VisitService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/visit")
public class VisitController {
	
	VisitService visitService;
	
	@Transactional
	@GetMapping("/update")
	public void update(Visit_page entity) {
		visitService.update(entity); 
	}
	
	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectAll(SearchRequest searchRequest) {
		ResponseEntity result = null;
		
		System.out.println(searchRequest);
		
		List<Visit_page> list = visitService.selectAll(searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
}
