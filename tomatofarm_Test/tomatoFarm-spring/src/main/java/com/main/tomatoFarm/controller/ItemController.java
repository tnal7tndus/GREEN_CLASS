package com.main.tomatoFarm.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.main.tomatoFarm.domain.ItemDTO;
import com.main.tomatoFarm.service.ItemService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Controller
@RequestMapping("/item")
public class ItemController {

	ItemService itemService;

	
	@GetMapping("/detail")
	public void detail(Model model , @RequestParam("code") int code) {
		ItemDTO dto = itemService.selectItem(code);
		model.addAttribute("dto", dto);
	}
	
	
	
}
