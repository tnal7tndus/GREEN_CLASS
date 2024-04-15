package com.main.tomatoFarm.service;

import java.util.List;

import com.main.tomatoFarm.domain.SortDTO;

public interface SortService {

	public List<SortDTO> selectSortList();
	public List<SortDTO> selectSortbList();
}
