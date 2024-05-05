package com.example.demo.page.page_keyword.entity;

import java.time.LocalDate;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "page_keyword")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@IdClass(PageKeywordID.class)
public class PageKeyword {
	
	@Id
	private String keyword;
	@Id
	@Column(name = "search_date")
	private LocalDate searchDate;
	@Id
	@Column(name = "user_id")
	private String userId;
	@Builder.Default
	private Integer search_count=1;
}
