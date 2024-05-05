package com.example.demo.page.page_keyword.service;

import com.example.demo.page.page_keyword.entity.PageKeyword;

import java.util.List;

public interface pageKeywordService {
	List<String> selectall(PageKeyword entity, String userId);
}
