package com.example.demo.page.page_visit.entity;
import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Setter
public class PageVisitID implements Serializable{
	
	private String page;
//	@Builder.Default 
	private LocalDate visitdate;
//	= LocalDateTime.now().plus(9, ChronoUnit.HOURS).toLocalDate(); // +9시간;
}