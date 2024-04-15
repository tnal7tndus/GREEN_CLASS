package com.example.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ItemRepository {
	// ** 동적 한 컬럼 검색
	List<ItemDTO> selectItemListStringWhereType(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> selectItemListIntegerWhereType(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest);
	Item selectItemIntegerWhereType(SearchRequest searchRequest);
	
	
	// ** 브랜드 상품 조회 
	List<ItemDTO> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 페이징 조회
	List<ItemDTO> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 단순 조회 -> 필터
	List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest);
	// ** 분류 검색 조회
	List<SortDTO> selectSortList();
	
	int batchInsert(List<Item> entity);
	List<ItemDTO> selectAll();
	void insertItem(Item entity);
	List<ItemDTO> adminStringColumn(SearchRequest searchRequest,PageRequest pageRequest);
	List<ItemDTO> adminIntegerColumn(SearchRequest searchRequest, PageRequest pageRequest);
	int itemListCount();
	Item updateItem(Item entity);
	List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList);
	List<Item> merge(List<Item> list);
}
