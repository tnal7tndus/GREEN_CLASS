package com.example.demo.page.page_question.service;

import java.util.List;

import com.example.demo.page.page_question.entity.Page_question;
import com.example.demo.page.page_question.repository.Page_questionRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class Page_questionServiceImpl implements Page_questionService {
	private final Page_questionRepository page_questionRepository;
	
	@Override
	public List<Page_question> findall() {
		return page_questionRepository.findAll();
	}
}
