package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.Item_askDTO;
import com.example.demo.entity.Item_ask;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface Item_askService {

	//** 상품문의 조회
		//* 글자 조회
	List<Item_ask> selectItemAskListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest);
		//* 숫자 조회
	List<Item_ask> selectItemAskListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest);
	
//	=================================
	
	//** 상품문의 등록
	 Item_ask merge(Item_ask entity);
	 
	 
	 
}
