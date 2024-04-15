package com.main.tomatoFarm.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.main.tomatoFarm.service.ItemService;
import com.main.tomatoFarm.service.SortService;

import lombok.AllArgsConstructor;
@AllArgsConstructor
@Controller
public class HomeController {
	ItemService itemService;
	SortService sortSerivce;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = {"/","/home"}, method = RequestMethod.GET)
	public String home(Model model) {

		model.addAttribute("list", itemService.selectItemListBySales());
		model.addAttribute("fresheasyList", itemService.selectItemListWhereBrand("프레시지"));
		model.addAttribute("rlarndnjstjstodList", itemService.selectItemListWhereBrand("김구원선생"));
        model.addAttribute("mychefList", itemService.selectItemListWhereBrand("마이셰프"));
        model.addAttribute("sortbList", sortSerivce.selectSortbList());
		model.addAttribute("eventItemList", itemService.selectEventItemList());
		return "home";
	}
	
}
