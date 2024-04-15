package com.example.demo.entity;

import java.time.LocalDate;

import javax.persistence.EmbeddedId;
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
@Table(name = "keyword")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@IdClass(KeywordID.class)
public class Keyword {
	
	@Id
	private String keyword;
	@Id
	private LocalDate search_date;
	@Builder.Default private Integer search_count=1;
}
