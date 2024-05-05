package com.example.demo.admin_todolist.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="page_todo")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PageTodo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long seq;
	
	@Column(name = "enddate")
	private LocalDate enddate;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "user_id_admin")
	private String userIdAdmin;
	
	@Column(name = "user_id_editor")
	private String userIdEditor;
	
	@Column(name = "state")
	private Integer state;

}
