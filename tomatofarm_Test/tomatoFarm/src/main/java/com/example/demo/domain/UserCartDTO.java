package com.example.demo.domain;

import java.time.LocalDate;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserCartDTO {

	
//	private Integer item_code; // 상품코드
	private Integer code; // 상품코드
	private String id; // 사용자 아이디
//	private Integer item_amount = 0; // 장바구니 수량
	private Integer amount = 0; // 장바구니 수량
	private Integer views = 1; // 조회수
	private Integer like_item = 0; // 관심상품 등록 여부
	private LocalDate regdate; // 최근 조회 날짜

	private String item_name;
	private Integer price;
	private Integer delivery;
	private Integer vat;
	private Integer stock;
	private Integer event_code;
	private Integer discount;
	
}
