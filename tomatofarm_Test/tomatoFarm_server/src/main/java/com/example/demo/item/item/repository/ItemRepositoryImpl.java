
package com.example.demo.item.item.repository;

import static com.example.demo.item.item.entity.QItem.item;
import static com.example.demo.item.item_event.entity.QItemEvent.itemEvent;

import java.util.List;

import javax.persistence.EntityManager;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.entity.Item;
import org.springframework.stereotype.Repository;

import com.example.demo.item.item.domain.SortDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.QBean;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemRepositoryImpl implements ItemRepository {

	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;
	private final QBean<ItemDTO> dtoBean = Projections.bean(ItemDTO.class, item.sort1, item.sort2, item.sort3, item.code, item.brand, item.name,
			item.delivery, item.price, item.storage, item.weight, item.packing, item.sales, item.stock, item.views,
			item.likes, item.itemEventCode, item.intro, item.userIdAdmin, itemEvent.discount.as("itemEventDiscount"), itemEvent.name.as("eventName"));

	// queryDSL 동적 정렬을 위해 OrderSpecifier객체를 이용한 동적 정렬
	public OrderSpecifier<?> getSortType(SearchRequest searchRequest) {
		if (searchRequest.getOrderType() != null) {
			switch (searchRequest.getOrderType()) {
			case "priceD":
				return new OrderSpecifier<>(Order.DESC, item.price);
			case "priceA":
				return new OrderSpecifier<>(Order.ASC, item.price);
			case "salesA":
				return new OrderSpecifier<>(Order.ASC, item.sales);
			case "codeD":
				return new OrderSpecifier<>(Order.DESC, item.code);
			case "views":
				return new OrderSpecifier<>(Order.DESC, item.views);
			}
		}
		return new OrderSpecifier<>(Order.DESC, item.sales);
	}

	@Override		
	// ** 동적 한 컬럼 검색
	public List<ItemDTO> selectItemListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.select(dtoBean)
				.from(item).leftJoin(itemEvent).on(item.itemEventCode.eq(itemEvent.code))
				.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
//				.orderBy(getSortType(searchRequest))
				.fetch();
	}
	
	@Override
	// ** 동적 한 컬럼 검색
	public List<ItemDTO> selectItemListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.select(dtoBean)
				.from(item).leftJoin(itemEvent).on(item.itemEventCode.eq(itemEvent.code))
				.where(Expressions.numberPath(Integer.class, searchRequest.getColumn()).stringValue().contains(searchRequest.getKeyword()))
				.fetch();
	}

	@Override
	// 이벤트 중인 상품 조회 시 사용
	public List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.select(dtoBean)
				.from(item).leftJoin(itemEvent).on(item.itemEventCode.eq(itemEvent.code))
				.where(Expressions.stringPath(searchRequest.getColumn()).isNotNull()).limit(pageRequest.getEndNum())
				.offset(pageRequest.getStartNum()).orderBy(getSortType(searchRequest)).fetch();
	}

	@Override
	// ** 키워드 상품 페이징 조회
	public List<ItemDTO> selectItemWhereKeyword(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.select(dtoBean)
				.from(item).leftJoin(itemEvent).on(item.itemEventCode.eq(itemEvent.code))
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort1.contains(searchRequest.getKeyword()))
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())))
				.orderBy(getSortType(searchRequest))
//				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}

	@Override
	public List<SortDTO> selectSortWhereKeyword(PageRequest pageRequest,SearchRequest searchRequest) {
		List<SortDTO> result = jPAQueryFactory
				.select(Projections.bean(SortDTO.class, item.sort1, item.sort2, item.sort2.count().as("count")))
				.from(item)
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.sort1.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())).and(item.sort1.ne("밀키트")))
				.groupBy(item.sort1, item.sort2)
				.orderBy(item.sort2.count().desc())
				.fetch();

		result.addAll(jPAQueryFactory
				.select(Projections
						.bean(SortDTO.class, item.sort1, item.brand.as("sort2"), item.sort2.count().as("count")))
				.from(item)
				.where(item.sort1.eq("밀키트")
						.and(item.sort2.contains(searchRequest.getKeyword())
								.or(item.sort3.contains(searchRequest.getKeyword()))
								.or(item.sort1.contains(searchRequest.getKeyword()))
								.or(item.brand.contains(searchRequest.getKeyword()))
								.or(item.name.contains(searchRequest.getKeyword()))))
				.groupBy(item.brand).orderBy(item.brand.count().desc()).fetch());

		return result;
	}

	@Override
	// ** 키워드 상품 분류 조회
	public List<SortDTO> selectSortList() {
		List<SortDTO> result = jPAQueryFactory
				.select(Projections.bean(SortDTO.class, item.sort1, item.brand.as("sort2"))).where(item.sort1.eq("밀키트"))
				.from(item).groupBy(item.sort1, item.brand).orderBy(item.brand.asc()).fetch();
		result.addAll(jPAQueryFactory.select(Projections.bean(SortDTO.class, item.sort1, item.sort2)).from(item)
				.where(item.sort1.ne("밀키트")).groupBy(item.sort1, item.sort2).orderBy(item.sort2.asc()).fetch());
		return result;
	}

	@Override
	// ** list에 있는 상품들 조회
	public List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList) {
		System.out.println(codeList);
		return jPAQueryFactory
				.select(Projections.bean(ItemDTO.class, item.code, item.brand, item.name.as("item_name"), item.delivery, item.price,
						item.storage, item.weight, item.packing, item.sales, item.stock, item.views, item.likes,
						item.itemEventCode, item.intro, itemEvent.discount, itemEvent.name.as("event_name")))
				.from(item).leftJoin(itemEvent).on(item.itemEventCode.eq(itemEvent.code)).where(item.code.in(codeList))
				.fetch();
	}

	@Override
	public Item merge(Item entity) {
		return entityManager.merge(entity);
	}
	
	@Override
	public int mergeAll(List<Item> list) {
		int result = 0;
		for(Item e : list) {
			entityManager.merge(e);
			result++;
		}
		return result;
	}
	
	@Override
	public int persist(List<Item> list) {
		int result = 0;
		for(Item e : list) {
			entityManager.persist(e);
			result++;
		}
		return result;
	}
}
