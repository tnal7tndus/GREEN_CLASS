package com.example.demo.admin_todolist.repository;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.admin_todolist.entity.PageTodo;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class TodoListRepositoryImpl implements TodoListRepository{

	private final EntityManager entityManager;
	
	@Override
	public List<PageTodo> selectAll() {
		return entityManager.createNativeQuery("SELECT * "
				+ "FROM page_todo", PageTodo.class)
				.getResultList();
	}
	
	
	@Override
	public List<PageTodo> selectAllByDate(LocalDate regdate) {
		List<PageTodo> list = entityManager.createNativeQuery("SELECT *"
				+"FROM page_todo WHERE regdate = ?", PageTodo.class)
				.setParameter(1, regdate)
				.getResultList();
		return list;
	}
	
	@Override
	public int insert(PageTodo entity) {
		return entityManager.createNativeQuery("INSERT INTO page_todo(enddate, content) "
				+ "VALUE(?,?)")
				.setParameter(1, entity.getEnddate())
				.setParameter(2, entity.getContent())
				.executeUpdate();
	}
	
	@Override
	public int check(PageTodo entity) {
		return entityManager.createNativeQuery("UPDATE page_todo set state = 1 WHERE seq = ?")
				.setParameter(1, entity.getSeq())
				.executeUpdate();
	}
	
	@Override
	public int uncheck(PageTodo entity) {
		return entityManager.createNativeQuery("UPDATE page_todo set state = 0 WHERE seq = ?")
				.setParameter(1, entity.getSeq())
				.executeUpdate();
	}
	@Override
	public int delete(PageTodo entity) {
		return entityManager.createNativeQuery("DELETE from page_todo WHERE seq = ?")
				.setParameter(1, entity.getSeq())
				.executeUpdate();
	}
	
	@Override
	public int update(PageTodo entity) {
		return entityManager.createNativeQuery("UPDATE page_todo set content = ? WHERE seq = ?")
				.setParameter(1, entity.getContent())
				.setParameter(2, entity.getSeq())
				.executeUpdate();
	}
}
