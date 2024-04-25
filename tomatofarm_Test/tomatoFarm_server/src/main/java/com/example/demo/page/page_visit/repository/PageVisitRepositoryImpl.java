package com.example.demo.page.page_visit.repository;

import java.util.List;

import javax.persistence.EntityManager;

import com.example.demo.page.page_visit.entity.PageVisit;
import com.example.demo.page.page_visit.entity.PageVisitID;
import org.springframework.stereotype.Repository;

import static com.example.demo.page.page_visit.entity.QPageVisit.pageVisit;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class PageVisitRepositoryImpl implements PageVisitRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;
	
	public PageVisit update(PageVisit entity, PageVisitID visitPageID) {
		PageVisit check = entityManager.find(PageVisit.class, visitPageID);
		if (check != null) {
			Integer count = check.getCount();
			check.setCount(count + 1);
			return entityManager.merge(check);
		} else {
			return entityManager.merge(entity);
		}
	}

	public List<PageVisit> selectWhereString(SearchRequest searchRequest) {
		return jPAQueryFactory
				.select(Projections.bean(PageVisit.class,
						pageVisit.page,pageVisit.visitdate,pageVisit.count))
				.from(pageVisit)
				.where(Expressions.stringPath(searchRequest.getColumn()).stringValue()
						.eq(searchRequest.getKeyword()))
				.orderBy(pageVisit.visitdate.asc())
				.fetch();
	}
	public List<PageVisit> selectWhereNumber(SearchRequest searchRequest) {
		return jPAQueryFactory
				.select(Projections.bean(PageVisit.class,
						pageVisit.page,pageVisit.visitdate,pageVisit.count))
				.from(pageVisit)
				.where(Expressions.numberPath(Integer.class, searchRequest.getColumn()).stringValue()
						.eq(searchRequest.getKeyword()))
				.orderBy(pageVisit.visitdate.asc())
				.fetch();
	}
	

}
