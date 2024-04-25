package com.example.demo.item.item.repository;

import java.util.List;

import com.example.demo.item.item.entity.Item;
import org.springframework.stereotype.Repository;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.domain.SortDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ItemRepository {
	
	// ** 동적 한 컬럼 검색
	List<ItemDTO> selectItemListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest);
	List<ItemDTO> selectItemListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest);
	
	// ** 이벤트 중인 상품 조회 시 사용
	List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest);
	
	// ** 키워드 상품 페이징 조회
	List<ItemDTO> selectItemWhereKeyword(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 단순 조회 -> 필터
	List<SortDTO> selectSortWhereKeyword(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 분류 검색 조회
	List<SortDTO> selectSortList();
	
	int mergeAll(List<Item> list);
	Item merge(Item entity);
	int persist(List<Item> list);
	
	// ** list에 있는 상품들 조회
	List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList);
	
	
}
