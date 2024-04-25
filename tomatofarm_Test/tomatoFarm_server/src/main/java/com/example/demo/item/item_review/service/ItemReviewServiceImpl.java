package com.example.demo.item.item_review.service;


import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.item.item_review.entity.ItemReview;
import org.springframework.stereotype.Service;

import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_review.repository.ItemReviewRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@Service
public class ItemReviewServiceImpl implements ItemReviewService {


	private final ItemReviewRepository itemReviewRepository;
	
	@Override
	//** 상품리뷰 조회
	public List<ItemReview> selectItemRevieListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return itemReviewRepository.selectItemRevieListStringWhereType(pageRequest, searchRequest);
	}
	@Override
	//** 상품리뷰 조회
	public List<ItemReview> selectItemRevieListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return itemReviewRepository.selectItemRevieListIntegerWhereType(pageRequest, searchRequest);
	}

	@Transactional
	@Override
	public ItemReview updateReview(ItemReview entity) {
		LocalDateTime currentDateTime = LocalDateTime.now();
		
		entity.setRegdate(currentDateTime);
		return itemReviewRepository.updateReview(entity);
	}
	
	
	
	
	
	
}
	
