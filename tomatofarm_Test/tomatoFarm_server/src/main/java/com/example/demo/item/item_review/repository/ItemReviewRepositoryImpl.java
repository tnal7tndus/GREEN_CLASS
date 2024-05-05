package com.example.demo.item.item_review.repository;

import static com.example.demo.item.item_review.entity.QItemReview.itemReview;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.example.demo.item.item_review.entity.ItemReview;
import org.springframework.stereotype.Repository;

import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class ItemReviewRepositoryImpl implements ItemReviewRepository {
	
	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;
	
	@Override
	public List<ItemReview> selectItemRevieListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.selectFrom(itemReview)
				.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	@Override
	public List<ItemReview> selectItemRevieListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.selectFrom(itemReview)
				.where(Expressions.numberPath(Integer.class,searchRequest.getColumn()).stringValue().eq(searchRequest.getKeyword()))
				.orderBy(itemReview.regdate.desc())
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	
	@Override
	@Transactional
	public ItemReview updateReview(ItemReview entity) {
		return entityManager.merge(entity);
	}
	

	
	
	
}
