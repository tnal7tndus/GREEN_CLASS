package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
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
				.event_code(dto.getEvent_code())
				.admin(dto.getAdmin())
				.intro(dto.getIntro())
				.build();
		return entity;
	}

	default ItemDTO entityToDTO(Item entity) {
		ItemDTO dto = ItemDTO.builder()
				.code(entity.getCode())
				.sort1(entity.getSort1())
				.sort2(entity.getSort2())
				.sort3(entity.getSort3())
				.brand(entity.getBrand())
				.name(entity.getName())
				.weight(entity.getWeight())
				.storage(entity.getStorage())
				.packing(entity.getPacking())
				.delivery(entity.getDelivery())
				.price(entity.getPrice())
				.vat(entity.getVat())
				.origin(entity.getOrigin())
				.sales(entity.getSales())
				.stock(entity.getStock())
				.views(entity.getViews())
				.likes(entity.getLikes())
				.event_code(entity.getEvent_code())
				.admin(entity.getAdmin())
				.intro(entity.getIntro())
				.build();
		return dto;
	}

	List<ItemDTO> selectItemListWhereType(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> selectItemDetail(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList);
	
	List<ItemDTO> selectItemWhereKeyword(PageRequest pageRequest,SearchRequest searchRequest);
	List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest);
	List<SortDTO> selectSortList();
	
	Item merge(Item entity);
	int persist(List<Item> list);
}
