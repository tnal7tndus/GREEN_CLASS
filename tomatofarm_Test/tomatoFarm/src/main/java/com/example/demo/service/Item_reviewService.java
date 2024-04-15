package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.Item_reviewDTO;
import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface Item_reviewService {

	//** 상품리뷰 조회
		//* 글자조회
	List<Item_review> selectItemRevieListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest);
		//* 숫자조회
	List<Item_review> selectItemRevieListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest);
	
	Item_review updateReview(Item_review entity);
	
}
