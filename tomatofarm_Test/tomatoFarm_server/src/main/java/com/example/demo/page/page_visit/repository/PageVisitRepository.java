package com.example.demo.page.page_visit.repository;


import java.util.List;

import com.example.demo.page.page_visit.entity.PageVisitID;
import com.example.demo.page.page_visit.entity.PageVisit;
import com.example.demo.module.SearchRequest;


public interface PageVisitRepository {


	public List<PageVisit> selectWhereString(SearchRequest searchRequest);
	public List<PageVisit> selectWhereNumber(SearchRequest searchRequest);
	
	public PageVisit update(PageVisit visitPage, PageVisitID visitPageID) ;
	
}
