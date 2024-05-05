package com.example.demo.item.item_ask.repository;

import static com.example.demo.item.item_ask.entity.QItemAsk.itemAsk;
import static com.example.demo.item.item.entity.QItem.item;

import java.util.List;

import javax.persistence.EntityManager;

import com.example.demo.item.item_ask.entity.ItemAsk;
import org.springframework.stereotype.Repository;

import com.example.demo.item.item_ask.domain.ItemAskDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class ItemAskRepositoryImpl implements ItemAskRepository {

	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;

	@Override
	// ** 상품 리뷰 조회
	public List<ItemAskDTO> selectItemAskListStringWhereType(SearchRequest searchRequest) {
		return jPAQueryFactory
				.select(Projections.bean(ItemAskDTO.class, itemAsk.seq, itemAsk.itemCode, itemAsk.userIdWriter, itemAsk.title,
						itemAsk.type, itemAsk.contents, itemAsk.password, itemAsk.reply, itemAsk.userIdReplyer, itemAsk.regdate,
						item.name.as("item_name")))
				.from(itemAsk).leftJoin(item).on(itemAsk.itemCode.eq(item.code))
				.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
				.orderBy(itemAsk.seq.desc())
				.fetch();
	}

}
