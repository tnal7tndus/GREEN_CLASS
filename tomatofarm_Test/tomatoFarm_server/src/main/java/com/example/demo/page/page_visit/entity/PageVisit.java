package com.example.demo.page.page_visit.entity;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "page_visit")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@IdClass(PageVisitID.class)
public class PageVisit {

	
	@Id
	private String page;
	@Id
	@Column(name ="visitdate")
	private LocalDate visitdate;
	@Builder.Default
	@Column(name="count")
	private Integer count = 1;
}

