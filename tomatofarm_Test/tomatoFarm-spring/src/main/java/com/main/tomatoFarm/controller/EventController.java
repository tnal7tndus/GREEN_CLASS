package com.main.tomatoFarm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.main.tomatoFarm.service.ItemService;
import com.main.tomatoFarm.service.KeywordService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Controller
public class EventController {

	KeywordService keywordService;
	ItemService itemService;
	
	@GetMapping("/eventPage")
	public void eventPage(Model model) {
		  model.addAttribute("keywordList", keywordService.selectKeywordList());
		  model.addAttribute("kimgoowon",itemService.selectItemListWhereBrand("김구원선생"));
		  model.addAttribute("fresheasy",itemService.selectItemListWhereBrand("프레시지"));
	}
}
