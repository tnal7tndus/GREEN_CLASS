package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QItem.item;
import static com.example.demo.entity.QItemorder.itemorder;
import static com.example.demo.entity.QOrderDetail.orderDetail;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Itemorder;
import com.example.demo.entity.ItemorderDTO;
import com.example.demo.entity.OrderDetail;
import com.example.demo.repository.ItemorderRepository;
import com.querydsl.core.QueryFactory;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemorderRepositoryImpl implements ItemorderRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public Itemorder merge(Itemorder entity) {
		return entityManager.merge(entity);
	}

}
