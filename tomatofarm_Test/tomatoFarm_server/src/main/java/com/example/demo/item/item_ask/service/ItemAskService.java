package com.example.demo.item.item_ask.service;

import java.util.List;

import com.example.demo.item.item_ask.domain.ItemAskDTO;
import com.example.demo.item.item_ask.entity.ItemAsk;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ItemAskService {

	//** 상품문의 조회
		//* 글자 조회
	List<ItemAskDTO> selectItemAskListStringWhereType(SearchRequest searchRequest);
		//* 숫자 조회
	List<ItemAsk> findAllByItemCodeOrderBySeqDesc(SearchRequest searchRequest);
	
	//** 상품문의 등록
	 ItemAsk merge(ItemAsk entity);

	 Boolean checkPassword(ItemAsk entity);
	 
	 
}
