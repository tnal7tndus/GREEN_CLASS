package com.example.demo.item.item.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemDTO{

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
	private Integer sales; // 판매 수량
	private Integer stock; // 재고 수량
	private Integer views; // 조회수
	private Integer likes; // 좋아요수
	private Integer itemEventCode; // 이벤트명
	private String userIdAdmin; // 등록자
	private String intro; // 상품설명
	
	/*  Join용 필드  */
	private Integer itemEventDiscount; // 이벤트 할인
	private String eventName; // 이벤트명
	
	/* user_cart 용 */
	private Integer amount;

	public ItemDTO(Integer code, String sort1, String sort2, String sort3, String brand, String name, String weight, String storage,
				   String packing, Integer delivery, Integer price, Integer vat, String origin, Integer sales, Integer stock, Integer views,
				   Integer likes, Integer itemEventCode, String userIdAdmin, String intro, Integer itemEventDiscount, String eventName) {
		this.code = code;
		this.sort1 = sort1;
		this.sort2 = sort2;
		this.sort3 = sort3;
		this.brand = brand;
		this.name = name;
		this.weight = weight;
		this.storage = storage;
		this.packing = packing;
		this.delivery = delivery;
		this.price = price;
		this.vat = vat;
		this.origin = origin;
		this.sales = sales;
		this.stock = stock;
		this.views = views;
		this.likes = likes;
		this.itemEventCode = itemEventCode;
		this.userIdAdmin = userIdAdmin;
		this.intro = intro;
		this.itemEventDiscount = itemEventDiscount;
		this.eventName = eventName;
	}
}
