package com.example.demo.service;

import com.example.demo.entity.Keyword;
import com.example.demo.module.SearchRequest;

public interface KeywordService {
	
	public Keyword updateKeyword(SearchRequest searchRequest);
	
}
