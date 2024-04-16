package com.example.demo.serviceImpl;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.KeywordRepository;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final KeywordRepository keywordRepository;
	private final EntityManager entityManager;
	
	
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
	public List<ItemDTO> selectItemDetail(PageRequest pageRequest, SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListIntegerWhereType(pageRequest,searchRequest);
		System.out.println(searchRequest);
		System.out.println(result);
		ItemDTO dto = result.get(0);
		dto.setViews(dto.getViews()+1);
		Item entity = dtotoEntity(dto);
		entityManager.merge(entity);
		return result;
	}
	
	
	@Override
	public List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListStringWhereTypeNotNull(pageRequest,searchRequest);
		return result;
	}
	
	@Override
	@Transactional
	public List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest) {
		return itemRepository.selectSortWhereKeyword(searchRequest);
	}

	@Override
	public List<ItemDTO> selectItemWhereKeyword(PageRequest pageRequest,SearchRequest searchRequest) {
		LocalDateTime KoreaTime = LocalDateTime.now() // 현재 시간
                .plus(9, ChronoUnit.HOURS); // +9 시간
		
		KeywordID keywordID = KeywordID.builder()
				.keyword(searchRequest.getKeyword())
				.search_date(KoreaTime.toLocalDate())
				.build();
		Keyword entity = Keyword.builder()
				.keyword(searchRequest.getKeyword())
				.search_date(KoreaTime.toLocalDate())
				.build();
		keywordRepository.merge(entity,keywordID);
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
	public int persist(List<Item> list) {
		return itemRepository.persist(list);
	}
	
	@Override
	public int itemListCount() {
		return 0;
	}
	
	@Override
	public Item updateItem(Item entity) {
		return entityManager.merge(entity);
	}
	
	@Override
	public List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList) {
		return itemRepository.selectItemListWhereInCode(codeList);
	}
	
}
