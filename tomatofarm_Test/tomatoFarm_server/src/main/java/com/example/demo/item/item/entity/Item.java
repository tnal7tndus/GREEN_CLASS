package com.example.demo.item.item.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
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
	@Column(name = "code")
	private Integer code; // 제품코드
	@Column(name = "sort1")
	private String sort1; // 대분류 (밀키트,식재료)
	@Column(name = "sort2")
	private String sort2; // 중분류 (브랜드, 식품분류 ex) 야채, 육류...)
	@Column(name = "sort3")
	private String sort3;	// 소분류 (상세 분류 ex) 양상추, 토마토...)
	@Column(name = "brand")
	private String brand; // 브랜드
	@Column(name = "name")
	private String name; // 제품 명
	@Column(name = "weight")
	private String weight; // g, k g 량
	@Column(name = "storage")
	private String storage; // 저장방식 e x) 냉동,냉장
	@Column(name = "packing")
	private String packing; // 포장방식
	@Column(name = "delivery")
	private Integer delivery; // 배송비
	@Column(name = "price")
	private Integer price; // 가격
	@Column(name = "vat")
	private Integer vat; // 과세여부
	@Column(name = "origin")
	private String origin; // 원산지
	@Builder.Default
	@Column(name = "sales")
	private Integer sales=0; // 판매 수량
	@Column(name = "stock")
	private Integer stock; // 재고 수량
	@Builder.Default
	@Column(name = "views")
	private Integer views=0; // 조회수
	@Builder.Default
	@Column(name = "likes")
	private Integer likes=0; // 좋아요수

	@Column(name = "item_event_code")
	private Integer itemEventCode; // 이벤트명
	@Column(name = "user_id_admin")
	private String userIdAdmin; // 등록자
	@Column(name = "intro")
	private String intro; // 상품설명
	
}
