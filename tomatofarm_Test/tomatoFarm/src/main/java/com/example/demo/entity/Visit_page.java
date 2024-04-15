package com.example.demo.entity;


import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "visit_page")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@IdClass(Visit_pageID.class)
public class Visit_page {

	
	@Id
	private String page;
	@Id
	@Column(name ="visit_date")
	private LocalDate visit_date;
	@Builder.Default
	@Column(name="visit_count")
	private Integer visit_count = 1;
}

