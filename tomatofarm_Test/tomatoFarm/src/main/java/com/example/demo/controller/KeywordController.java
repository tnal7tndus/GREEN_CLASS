package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Keyword;
import com.example.demo.service.KeywordService;

@RestController
@RequestMapping("/keyword")
public class KeywordController {
	
	private KeywordService keywordService;

	@GetMapping("/update")
	public void updateKeyword(Keyword keyword) {
//		keywordService.updateKeyword(keyword);
	}
}
