package com.example.demo.admin_todolist.repository;

import java.time.LocalDate;
import java.util.List;

import com.example.demo.admin_todolist.entity.PageTodo;

public interface TodoListRepository {
	List<PageTodo> selectAll();
	List<PageTodo> selectAllByDate(LocalDate regdate);
	int insert(PageTodo entity);
	int check(PageTodo entity);
	int uncheck(PageTodo entity);
	int delete(PageTodo entity);
	int update(PageTodo entity);
}
