package com.example.demo.page.page_keyword.service;

import com.example.demo.page.page_keyword.entity.PageKeyword;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class pageKeywordServiceImpl implements pageKeywordService {

	com.example.demo.page.page_keyword.repository.pageKeywordRepository pageKeywordRepository;

	@Override
	@Transactional
	public List<String> selectall(PageKeyword entity, String userId) {

		List<PageKeyword> pageKeyword_list = pageKeywordRepository.findByUserIdOrderBySearchDateDesc(userId);
		List<String> keyword = new ArrayList<>();
		for (PageKeyword e : pageKeyword_list){
			keyword.add(e.getKeyword());
		}
		return keyword;
	}
}
