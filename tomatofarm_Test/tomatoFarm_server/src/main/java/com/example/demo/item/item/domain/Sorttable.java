package com.example.demo.item.item.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "sorttable")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Sorttable {

	@Id
	String sortccode;
	String sorta;
	String sorte;
	String sortacode;
	String sortb;
	String sortbcode;
	String sortc;
	
}
