package com.example.demo.page.page_keyword.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PageKeywordID implements Serializable{

	private String keyword;
	private String userId;
	private LocalDate searchDate;
	
}
