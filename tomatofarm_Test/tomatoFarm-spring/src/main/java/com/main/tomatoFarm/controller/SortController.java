package com.main.tomatoFarm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.main.tomatoFarm.service.ItemService;
import com.main.tomatoFarm.service.SortService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Controller
@RequestMapping("/sort")
public class SortController {
	SortService service;
	
}
