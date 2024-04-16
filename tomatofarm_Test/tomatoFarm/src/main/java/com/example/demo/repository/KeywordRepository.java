package com.example.demo.repository;


import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;

public interface KeywordRepository {
	
	public Keyword merge(Keyword keyword, KeywordID keywordID);
	
}
