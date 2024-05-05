package com.example.demo.user.user_cart.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserCartID  implements Serializable{

	private Integer itemCode; // 상품코드
	private String userId; // 사용자 아이디

}
