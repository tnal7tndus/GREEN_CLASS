package com.example.demo.serviceImpl;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.KeywordRepository;
import com.example.demo.service.KeywordService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class KeywordServiceImpl implements KeywordService{
	
	private KeywordRepository keywordRepository;

	
	@Transactional
	@Override
	public Keyword updateKeyword(SearchRequest searchRequest) {
		LocalDateTime KoreaTime = LocalDateTime.now() // 현재 시간
                .plus(9, ChronoUnit.HOURS); // +9 시간
		
		KeywordID keywordID = new KeywordID().builder()
				.keyword(searchRequest.getKeyword())
				.search_date(KoreaTime.toLocalDate())
				.build();
		Keyword entity = new Keyword().builder()
				.keyword(searchRequest.getKeyword())
				.search_date(KoreaTime.toLocalDate())
				.build();
		return keywordRepository.updateKeyword(entity,keywordID);
	}
}
