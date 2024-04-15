package com.example.demo.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserCartID  implements Serializable{

	private Integer code; // 상품코드
	private String id; // 사용자 아이디

}
