package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShopBasketDTO {

	private Integer code; //제품코드
	private String brand; //브랜드
	private String name; //제품명
	private String prcie;	//가격
	private Integer delivery; // 배송비
	private Integer sales; // 판매 수량
	
	
}
