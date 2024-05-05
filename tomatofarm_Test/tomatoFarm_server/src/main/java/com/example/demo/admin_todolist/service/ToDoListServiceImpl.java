package com.example.demo.admin_todolist.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.admin_todolist.entity.PageTodo;
import com.example.demo.admin_todolist.repository.TodoListRepository;

import lombok.RequiredArgsConstructor;

@Transactional
@RequiredArgsConstructor
@Service
public class ToDoListServiceImpl implements ToDoListService {

	private final TodoListRepository todolistRepository;

	@Override
	public List<PageTodo> selectAll() {
		return todolistRepository.selectAll();
	}

	@Override
	public List<PageTodo> selectAllByDate(LocalDate regdate) {
		return todolistRepository.selectAllByDate(regdate);
	}

	@Override
	public List<PageTodo> insert(PageTodo entity) {
		todolistRepository.insert(entity);
		return todolistRepository.selectAll();
	}
	
	@Override
	public List<PageTodo> check(PageTodo entity) {
		todolistRepository.check(entity);
		return todolistRepository.selectAll();
	}
	
	@Override
	public List<PageTodo> uncheck(PageTodo entity) {
		todolistRepository.uncheck(entity);
		return todolistRepository.selectAll();
	}
	
	@Override
	public List<PageTodo> delete(PageTodo entity) {
		todolistRepository.delete(entity);
		return todolistRepository.selectAll();
	}
	
	@Override
	public List<PageTodo> update(PageTodo entity) {
		todolistRepository.update(entity);
		return todolistRepository.selectAll();
	}

}
