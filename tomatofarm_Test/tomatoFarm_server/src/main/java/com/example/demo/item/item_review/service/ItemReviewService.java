package com.example.demo.item.item_review.service;

import java.util.List;

import com.example.demo.item.item_review.entity.ItemReview;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ItemReviewService {

	//** 상품리뷰 조회
		//* 글자조회
	List<ItemReview> selectItemRevieListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest);
		//* 숫자조회
	List<ItemReview> selectItemRevieListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest);
	
	ItemReview updateReview(ItemReview entity);
	
}
