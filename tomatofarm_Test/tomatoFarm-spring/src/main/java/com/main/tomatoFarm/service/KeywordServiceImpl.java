package com.main.tomatoFarm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.main.tomatoFarm.domain.KeywordDTO;
import com.main.tomatoFarm.model.KeywordDAO;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class KeywordServiceImpl implements KeywordService{
	
	KeywordDAO dao;
	
	public int updateKeywordCnt(String keyword) {
		return dao.updateKeywordCnt(keyword);
	}

	public List<KeywordDTO> selectKeywordList() {
		return dao.selectKeywordList();
	}

}
