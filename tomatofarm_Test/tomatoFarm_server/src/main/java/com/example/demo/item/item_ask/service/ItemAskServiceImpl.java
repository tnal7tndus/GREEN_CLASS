package com.example.demo.item.item_ask.service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import com.example.demo.item.item_ask.entity.ItemAsk;
import com.example.demo.item.item_ask.repository.ItemAskRepositoryJPA;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.item.item_ask.domain.ItemAskDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_ask.repository.ItemAskRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ItemAskServiceImpl implements ItemAskService {

	PasswordEncoder passwordEncoder;

	private final ItemAskRepositoryJPA itemAskRepositoryJPA;
	private final ItemAskRepository itemAskRepository;

	@Override
	public List<ItemAskDTO> selectItemAskListStringWhereType(SearchRequest searchRequest) {
		return itemAskRepository.selectItemAskListStringWhereType(searchRequest);
	}

	@Override
	public List<ItemAsk> findAllByItemCodeOrderBySeqDesc(SearchRequest searchRequest) {
		return itemAskRepositoryJPA.findAllByItemCodeOrderBySeqDesc(Integer.parseInt(searchRequest.getKeyword()));
	}
	
	public ItemAsk merge(ItemAsk entity) {
		LocalDateTime date = LocalDateTime.now();
		entity.setRegdate(date);
		return itemAskRepositoryJPA.save(entity);
	}

	public Boolean checkPassword(ItemAsk entity) {
		String password = entity.getPassword();
		Optional<ItemAsk> optionalItemAsk = itemAskRepositoryJPA.findById(entity.getSeq());
		if(optionalItemAsk.isPresent()){
			entity = optionalItemAsk.get();
			if(passwordEncoder.matches(password,entity.getPassword()))
				return true;
		}
		return false;
	}
	
	
}
	
