package com.example.demo.domain;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;


@Data
public class Visit_pageDTO {
	
	private int visit_count;
	private String page;
	private String visit_date;
	
}
