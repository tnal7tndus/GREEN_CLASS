package com.example.demo.item.item.service;

import java.util.List;

import com.example.demo.item.item.entity.Item;
import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.domain.SortDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ItemService {

	// default method
	default Item dtotoEntity(ItemDTO dto) {
		Item entity = Item.builder()
				.code(dto.getCode())
				.sort1(dto.getSort1())
				.sort2(dto.getSort2())
				.sort3(dto.getSort3())
				.brand(dto.getBrand())
				.name(dto.getName())
				.weight(dto.getWeight())
				.storage(dto.getStorage())
				.packing(dto.getPacking())
				.delivery(dto.getDelivery())
				.price(dto.getPrice())
				.vat(dto.getVat())
				.origin(dto.getOrigin())
				.sales(dto.getSales())
				.stock(dto.getStock())
				.views(dto.getViews())
				.likes(dto.getLikes())
				.itemEventCode(dto.getItemEventCode())
				.userIdAdmin(dto.getUserIdAdmin())
				.intro(dto.getIntro())
				.build();
		return entity;
	}

	List<ItemDTO> selectItemListWhereType(PageRequest pageRequest,SearchRequest searchRequest);
	ItemDTO getDetailPage(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList);
	
	List<ItemDTO> selectItemWhereKeyword(PageRequest pageRequest, SearchRequest searchRequest, String id);
	List<SortDTO> selectSortWhereKeyword(PageRequest pageRequest, SearchRequest searchRequest);
	List<SortDTO> selectSortList();
	
	int mergeAll(List<Item> list);
	Item merge(Item entity);
	int persist(List<Item> list);
}
