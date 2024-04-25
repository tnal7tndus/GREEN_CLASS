package com.example.demo.module;

import java.time.LocalDate;
import java.util.List;

import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//** JPA Paging & Sort
		// => https://bnzn2426.tistory.com/135

		// ** PageList 요청 처리 DTO
		// => 재사용 가능 구조: 다양한 Table에 적용가능
		// => JPA 에서 사용하는 Pageable Type 객체 생성을 목표로함.

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SearchRequest {
	
	private String column; // 검색 컬럼
	private String keyword = ""; // 검색 키워드
	private String access;// 접근권한
	private OrderSpecifier<?> orderColumn;
	private String orderType;// 정렬 타입
	private String scending ;// 정렬 순서
	private Integer howMany=1;
	private String whichGroup = "";
	
	
	
	public SearchRequest(String keyword) {
		this.keyword=keyword;
	}
	public SearchRequest(String column, String keyword) {
		this.column=column;
		this.keyword=keyword;
	}
	
	public void makeOrder(SearchRequest searchRequest) {
		if (searchRequest.getScending() != null && searchRequest.getOrderType() != null ) {
			this.orderColumn = new OrderSpecifier<>(scending == "asc"? Order.ASC : Order.DESC, Expressions.stringPath(searchRequest.getOrderType()));
		} 
	}
}
