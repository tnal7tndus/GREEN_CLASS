package com.main.tomatoFarm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.main.tomatoFarm.domain.SortDTO;
import com.main.tomatoFarm.model.SortDAO;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class SortServiceImpl implements SortService{
	
	SortDAO dao;
	
	@Override
	public List<SortDTO> selectSortList() {
		return dao.selectSortList();
	}
	@Override
	public List<SortDTO> selectSortbList() {
		return dao.selectSortbList();
	}
}
