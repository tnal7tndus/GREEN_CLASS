package com.example.demo.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Page_question;
import com.example.demo.repository.Page_questionRepository;
import com.example.demo.service.Page_questionService;

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
