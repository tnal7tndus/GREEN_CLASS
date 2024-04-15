package com.example.demo.entity;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

import javax.persistence.Embeddable;
import javax.persistence.Entity;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Setter
public class Visit_pageID implements Serializable{
	
	private String page;
//	@Builder.Default 
	private LocalDate visit_date;
//	= LocalDateTime.now().plus(9, ChronoUnit.HOURS).toLocalDate(); // +9시간;
}