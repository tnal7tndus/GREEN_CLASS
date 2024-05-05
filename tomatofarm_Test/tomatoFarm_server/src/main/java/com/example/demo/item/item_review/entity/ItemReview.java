package com.example.demo.item.item_review.entity;

import java.time.LocalDateTime;

import javax.persistence.*;

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
public class ItemReview {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "seq")
	private Integer seq; //순번
	@Column(name = "item_code")
	private Integer itemCode; //제품코드
	@Column(name = "user_id_writer")
	private String userIdWriter;	//글쓴이
	@Column(name = "title")
	private String title;	//제목
	@Column(name = "contents")
	private String contents;	//내용
	@Column(name = "score")
	private Integer score; 	//조회수
	@Column(name = "regdate")
	private LocalDateTime regdate;	//날짜
	@Column(name = "likes")
	private Integer likes=0;	//공감수
	@Column(name = "image1")
	private String image1;
	@Column(name = "tag")
	private String tag;

	@Transient
	private MultipartFile uploadfilef;
	
}
