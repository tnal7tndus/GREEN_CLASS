package com.example.demo.serviceImpl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.module.SearchRequest;
import com.example.demo.repostoryImpl.VisitRepositoryImpl;
import com.example.demo.service.VisitService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class VisitServiceImpl implements VisitService {

	VisitRepositoryImpl visitRepository;

	@Override
	@Transactional
	public Visit_page update(Visit_page entity) {
//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//        LocalDate date = LocalDate.parse(entity.getVisit_date(), formatter);
		LocalDate now = LocalDateTime.now().plusHours(9).toLocalDate();
		
		Visit_pageID visitPageID
		= new Visit_pageID().builder()
//			.visit_date(entity.getVisit_date())
			.visit_date(now)
			.page(entity.getPage())
			.build();
		
		entity.setVisit_date(now);
		
		return visitRepository.update(entity, visitPageID);
	}
	
	public List<Visit_page> selectAll(SearchRequest searchRequest) {
		
		return visitRepository.selectAll(searchRequest);
	}
	

}
