package com.example.demo.page.page_visit.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.page.page_visit.entity.PageVisit;
import com.example.demo.page.page_visit.entity.PageVisitID;
import com.example.demo.page.page_visit.repository.PageVisitRepositoryImpl;
import org.springframework.stereotype.Service;

import com.example.demo.module.SearchRequest;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class PageVisitServiceImpl implements PageVisitService {

	PageVisitRepositoryImpl visitRepository;

	@Override
	@Transactional
	public PageVisit update(PageVisit entity) {
//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//        LocalDate date = LocalDate.parse(entity.getVisit_date(), formatter);
		LocalDate now = LocalDateTime.now().plusHours(9).toLocalDate();
		
		PageVisitID visitPageID
		= new PageVisitID().builder()
//			.visit_date(entity.getVisit_date())
			.visitdate(now)
			.page(entity.getPage())
			.build();
		
		entity.setVisitdate(now);
		
		return visitRepository.update(entity, visitPageID);
	}
	
	public List<PageVisit> selectWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return visitRepository.selectWhereNumber(searchRequest);
		} else {
			return visitRepository.selectWhereString(searchRequest);
		}
	}
	

}
