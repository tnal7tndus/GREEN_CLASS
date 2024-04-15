package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;
import com.example.demo.entity.UserCart;
import com.example.demo.jwtToken.TokenProvider;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.ItemService;
import com.example.demo.service.KeywordService;
import com.example.demo.service.UserCartService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:3000")
@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value = "/item")
public class ItemController {
	private final ItemService itemService;
	private final KeywordService keywordService;
	private final TokenProvider tokenProvider;

	@GetMapping("/selectnotnull")
	public ResponseEntity<?> selectItemWhereEvent(SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		PageRequest pageRequest = new PageRequest(1, 11);
		List<ItemDTO> list = itemService.selectItemListStringWhereTypeNotNull(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@GetMapping("/detailn")
	public ResponseEntity<?> selectItemWhereType(SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		PageRequest pageRequest = new PageRequest(1, 1);
		ItemDTO dto = itemService.selectItemListIntegerWhereType(pageRequest, searchRequest).get(0);
		result = ResponseEntity.status(HttpStatus.OK).body(dto);
		return result;
	}

	@GetMapping("/searchtype")
	public ResponseEntity<?> selectItemWherebrand(SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		PageRequest pageRequest = new PageRequest(1, 6);

		List<ItemDTO> list = itemService.selectItemWherebrand(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

//페이징 + 정렬 기능 되는 search
	@GetMapping("/search")
	public ResponseEntity<?> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		keywordService.updateKeyword(searchRequest);
		List<ItemDTO> list = itemService.selectItemWhereSearchType(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@GetMapping("/searchsort")
	public ResponseEntity<?> selectSortWhereKeyword(SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		List<SortDTO> list = itemService.selectSortList();
		List<SortDTO> countList = itemService.selectSortWhereKeyword(searchRequest);
		for (SortDTO a : countList) {
			for (SortDTO b : list) {
				if (a.getSort1().equals(b.getSort1())) {
					if (a.getSort2().equals(b.getSort2())) {
						b.setCount(a.getCount());
						break;
					}
				}
			}
		}
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@GetMapping("/sort")
	public ResponseEntity<?> selectSortList() {
		ResponseEntity<?> result = null;
		List<SortDTO> list = itemService.selectSortList();
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectwhere(SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		System.out.println(searchRequest);
		PageRequest pageRequest = new PageRequest();
		List<ItemDTO> itemList = itemService.selectItemListStringWhereType(pageRequest,searchRequest);
		if (itemList != null && itemList.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(itemList);
			log.info(itemList.size());
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("데이터 못찾겠다");
		}

		return result;
	}

	@PostMapping(value = "/merge")
	public ResponseEntity<?> insertItem(@RequestBody List<Item> list) {
		ResponseEntity<?> result = null;
		
		if (itemService.merge(list).size() > 0)
			result = ResponseEntity.status(HttpStatus.OK).body(itemService.selectItemListStringWhereType(new PageRequest(), new SearchRequest("sort1", "")));
		else
			result = ResponseEntity.status(HttpStatus.OK).body("데이터 입력 실패");
		return result;
	}

	@GetMapping("/admingraph")
	public ResponseEntity<?> adminStringColumn(SearchRequest searchRequest, PageRequest pageRequest) {
		ResponseEntity<?> result = null;
		List<ItemDTO> list =  itemService.searchForAdmin(searchRequest, pageRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@PostMapping("/selectin")
	public ResponseEntity<?> selectin(@RequestBody List<UserCart> list) {
		List<Integer> codeList = new ArrayList<>();
		for (UserCart e : list) {
			codeList.add(e.getCode());
		}
		List<ItemDTO> itemList = itemService.selectItemListWhereInCode(codeList);
			
		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(itemList);
		return result;
	}
	


}
