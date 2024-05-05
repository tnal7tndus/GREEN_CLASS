package com.example.demo.user.user_cart.domain;

import java.time.LocalDate;

import lombok.*;

@Data
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@Builder
public class UserCartDTO {

	
	private Integer itemCode; // 상품코드
	private String userId; // 사용자 아이디
	private Integer amount = 0; // 장바구니 수량
	private Integer views = 1; // 조회수
	private Integer likeItem = 0; // 관심상품 등록 여부
	private LocalDate regdate; // 최근 조회 날짜

	private String itemName;
	private Integer price;
	private Integer delivery;
	private Integer vat;
	private Integer stock;
	private Integer eventCode;
	private Integer itemEventDiscount;

	public UserCartDTO(Integer itemCode, String userId, Integer amount, Integer likeItem,
					   String itemName, Integer price, Integer delivery, Integer stock, Integer itemEventDiscount) {
		this.itemCode = itemCode;
		this.userId = userId;
		this.amount = amount;
		this.likeItem = likeItem;
		this.itemName = itemName;
		this.price = price;
		this.delivery = delivery;
		this.stock = stock;
		this.itemEventDiscount = itemEventDiscount;
	}

	public  UserCartDTO(Integer itemCode, String itemName, Integer price, Integer delivery, Integer stock, Integer itemEventDiscount) {
		this.itemCode = itemCode;
		this.itemName = itemName;
		this.price = price;
		this.delivery = delivery;
		this.stock = stock;
		this.itemEventDiscount = itemEventDiscount;
	}
	
}
