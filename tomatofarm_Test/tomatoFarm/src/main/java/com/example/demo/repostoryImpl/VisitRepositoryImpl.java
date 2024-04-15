package com.example.demo.repostoryImpl;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.QItem;
import com.example.demo.entity.QVisit_page;
import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.VisitRepository;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.QVisit_page.visit_page;

@Repository
@AllArgsConstructor
public class VisitRepositoryImpl implements VisitRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;
	
	public OrderSpecifier<?> getSortType(SearchRequest searchRequest) {
		if (searchRequest.getOrderType() != null) {
			switch (searchRequest.getOrderType()) {
			case "visit_count":
				return new OrderSpecifier<>(Order.DESC, QVisit_page.visit_page.visit_count);
			case "priceA":
				return new OrderSpecifier<>(Order.ASC, QItem.item.price);
			case "salesA":
				return new OrderSpecifier<>(Order.ASC, QItem.item.sales);
			case "codeD":
				return new OrderSpecifier<>(Order.DESC, QItem.item.code);
			case "views":
				return new OrderSpecifier<>(Order.DESC, QItem.item.views);
			}
		}
		return new OrderSpecifier<>(Order.DESC, QItem.item.sales);
	}

	public Visit_page update(Visit_page entity, Visit_pageID visitPageID) {
		Visit_page check = entityManager.find(Visit_page.class, visitPageID);
		if (check != null) {
			Integer count = check.getVisit_count();
			check.setVisit_count(count + 1);
			return entityManager.merge(check);
		} else {
			return entityManager.merge(entity);
		}
	}

	public List<Visit_page> selectAll(SearchRequest searchRequest) {
		return jPAQueryFactory
				.select(Projections.bean(Visit_page.class,
						visit_page.page,visit_page.visit_date,visit_page.visit_count))
				.from(visit_page)
//				.where(Expressions.numberPath(Integer.class, searchRequest.getColumn()).stringValue()
//						.eq(searchRequest.getKeyword()))
				.limit(searchRequest.getHowManyRecords())
				.orderBy(getSortType(searchRequest))
				.fetch();
	}
	

}
