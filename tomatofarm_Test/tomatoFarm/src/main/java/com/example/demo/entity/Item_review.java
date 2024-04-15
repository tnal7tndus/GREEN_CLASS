package com.example.demo.entity;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item_review")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Item_review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer seq; //순번
	private Integer item_code; //제품코드
	private String writer;	//글쓴이
	private String title;	//제목
	private String contents;	//내용
	private Integer score; 	//조회수
	private LocalDateTime regdate;	//날짜
	private Integer likes=0;	//공감수
	private String image1; 
	private String image2; 
	private String image3; 
	private String tag; 
	

	@Transient
	private MultipartFile uploadfilef;
	
}
