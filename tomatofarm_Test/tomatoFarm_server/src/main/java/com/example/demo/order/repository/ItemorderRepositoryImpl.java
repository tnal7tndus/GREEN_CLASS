package com.example.demo.order.repository;

import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.EntityManager;
import javax.persistence.SqlResultSetMapping;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.OrderA;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

import io.micrometer.core.instrument.search.Search;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;




@Repository
@AllArgsConstructor
public class ItemorderRepositoryImpl implements ItemorderRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public OrderA merge(OrderA entity) {
		return entityManager.merge(entity);
	}

	@Override
	public List selectOrderByCode(Integer seq){
		String query = "SELECT o.address1, o.address2, o.address_code, " +
				"o.deliveryprice, o.delivery_message, o.orderprice, o.usepoint, o.orderdate, " +
				"(SELECT i.code " +
				" FROM order_detail od " +
				" LEFT JOIN item i ON od.item_code = i.code " +
				" WHERE od.order_seq = :seq LIMIT 1) as itemCode, " +
				"(SELECT i.name " +
				" FROM order_detail od " +
				" LEFT JOIN item i ON od.item_code = i.code " +
				" WHERE od.order_seq = :seq LIMIT 1) as itemName, " +
				"(SELECT COUNT(od.item_code) " +
				" FROM order_detail od " +
				" WHERE od.order_seq = o.seq) as orderSize " +
				"FROM order_a o WHERE o.seq = :seq";
		return entityManager.createNativeQuery(query, "OrderDTOMapping")
				.setParameter("seq",seq)
				.getResultList();
	}
}
