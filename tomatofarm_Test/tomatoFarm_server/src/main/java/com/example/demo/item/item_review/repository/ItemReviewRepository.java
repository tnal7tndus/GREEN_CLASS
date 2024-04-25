package com.example.demo.item.item_review.repository;

import java.util.List;

import com.example.demo.item.item_review.entity.ItemReview;
import org.springframework.stereotype.Repository;

import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ItemReviewRepository {

	List<ItemReview> selectItemRevieListStringWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	List<ItemReview> selectItemRevieListIntegerWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	
	
	ItemReview updateReview(ItemReview entity);
	
}
