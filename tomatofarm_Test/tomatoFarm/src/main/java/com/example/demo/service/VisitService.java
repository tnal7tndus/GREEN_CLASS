package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Visit_page;
import com.example.demo.module.SearchRequest;


public interface VisitService {

	
	public Visit_page update(Visit_page entity);
	public List<Visit_page> selectAll(SearchRequest searchRequest);
}
