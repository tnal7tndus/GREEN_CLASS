package com.example.demo.page.page_visit.service;

import java.util.List;

import com.example.demo.page.page_visit.entity.PageVisit;
import com.example.demo.module.SearchRequest;


public interface PageVisitService {

	
	public PageVisit update(PageVisit entity);
	public List<PageVisit> selectWhere(SearchRequest searchRequest);
}
