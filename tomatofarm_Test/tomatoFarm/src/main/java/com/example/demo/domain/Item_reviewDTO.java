package com.example.demo.domain;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;
import lombok.Setter;

@Data
@Builder
@Setter
public class Item_reviewDTO {

	private int seq; //순번
	private int item_code; //제품코드
	private String writer;	//글쓴이
	private String title;	//제목
	private String contents;	//내용
	private int score; 	
	private LocalDateTime regdate;	//날짜
	private int likes;	//공감수
	private String image1; 
	private String image2; 
	private String image3; 
	private String tag; 
	
}
