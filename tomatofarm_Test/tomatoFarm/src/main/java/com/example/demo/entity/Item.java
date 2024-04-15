package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Item {

	@Id
	private Integer code; // 제품코드
	private String sort1; // 대분류 (밀키트,식재료)
	private String sort2; // 중분류 (브랜드, 식품분류 ex) 야채, 육류...)
	private String sort3;	// 소분류 (상세 분류 ex) 양상추, 토마토...)
	private String brand; // 브랜드
	private String name; // 제품 명
	private String weight; // g, k g 량
	private String storage; // 저장방식 e x) 냉동,냉장
	private String packing; // 포장방식
	private Integer delivery; // 배송비
	private Integer price; // 가격
	private Integer vat; // 과세여부
	private String origin; // 원산지
	@Builder.Default private Integer sales=0; // 판매 수량
	private Integer stock; // 재고 수량
	@Builder.Default private Integer views=0; // 조회수
	@Builder.Default private Integer likes=0; // 좋아요수
	private Integer event_code; // 이벤트명
	private String admin; // 등록자
	private String intro; // 상품설명

}
