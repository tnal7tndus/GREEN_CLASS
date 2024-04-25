package com.example.demo.item.item.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.example.demo.item.item.repository.ItemRepositoryJPA;
import com.example.demo.page.page_keyword.entity.PageKeyword;
import com.example.demo.page.page_keyword.entity.PageKeywordID;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.domain.SortDTO;
import com.example.demo.item.item.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item.repository.ItemRepository;
import com.example.demo.page.page_keyword.repository.pageKeywordRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final ItemRepositoryJPA itemRepositoryJPA;
	private final pageKeywordRepository pageKeywordRepository;

	
	@Override
	public List<ItemDTO> selectItemListWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return itemRepository.selectItemListIntegerWhereType(pageRequest, searchRequest);
		} else {
			return itemRepository.selectItemListStringWhereType(pageRequest, searchRequest);
		}
	}
	
	@Override
	@Transactional
	public ItemDTO getDetailPage(PageRequest pageRequest, SearchRequest searchRequest) {
		ItemDTO itemDTO = itemRepositoryJPA.findByCode(Integer.parseInt(searchRequest.getKeyword()));
		itemDTO.setViews(itemDTO.getViews()+1);
		Item entity = dtotoEntity(itemDTO);
		itemRepositoryJPA.save(entity);
		return itemDTO;
	}
	
	@Override
	public List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListStringWhereTypeNotNull(pageRequest,searchRequest);
		return result;
	}
	
	@Override
	@Transactional
	public List<SortDTO> selectSortWhereKeyword(PageRequest pageRequest, SearchRequest searchRequest) {
		return itemRepository.selectSortWhereKeyword(pageRequest, searchRequest);
	}

	@Override
	public List<ItemDTO> selectItemWhereKeyword(PageRequest pageRequest,SearchRequest searchRequest, @AuthenticationPrincipal String userId) {
		LocalDate koreaTime = LocalDateTime.now().toLocalDate(); // 현재 시간

		PageKeywordID pageKeywordID = PageKeywordID.builder()
				.keyword(searchRequest.getKeyword())
				.userId(userId)
				.searchDate(koreaTime)
				.build();
		
		PageKeyword entity = PageKeyword.builder()
				.keyword(pageKeywordID.getKeyword())
				.searchDate(pageKeywordID.getSearchDate())
				.userId(pageKeywordID.getUserId())
				.build();
		
		Optional<PageKeyword> data = pageKeywordRepository.findById(pageKeywordID);
		if(data.isPresent()) {
			entity=data.get();
			entity.setSearch_count(entity.getSearch_count()+1);
		}
		pageKeywordRepository.save(entity);
		
		return itemRepository.selectItemWhereKeyword(pageRequest, searchRequest);
	}
	
	@Override
	public List<SortDTO> selectSortList() {
		return itemRepository.selectSortList();
	}

	@Override
	public Item merge(Item entity) {
		return itemRepository.merge(entity);
	}
	@Override
	public int mergeAll(List<Item> list) {
		return itemRepository.mergeAll(list);
	}
	
	@Override
	public int persist(List<Item> list) {
		return itemRepository.persist(list);
	}
	
	@Override
	public List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList) {
		return itemRepository.selectItemListWhereInCode(codeList);
	}
	
}
