package com.example.demo.domain;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;
import lombok.Setter;
import lombok.ToString;

@Data
@Builder
@Setter
@ToString
public class Item_askDTO {

	private int seq; //순번
	private int item_code; //제품코드
	private String writer;	//글쓴이
	private String title;	//제목
	private String type;	//유형
	private String contents;	//내용
	private String password; 	// 비밀글 비밀번호
	private String reply;	//답변
	private LocalDateTime regdate;	//날짜
	
	private Boolean secret; //비밀글 유무
	
	
}
