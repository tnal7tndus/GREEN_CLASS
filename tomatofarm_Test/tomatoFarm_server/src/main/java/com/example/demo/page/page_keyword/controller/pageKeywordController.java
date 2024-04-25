package com.example.demo.page.page_keyword.controller;

import com.example.demo.page.page_keyword.entity.PageKeyword;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/keyword")
@RequiredArgsConstructor
public class pageKeywordController {
    private final com.example.demo.page.page_keyword.service.pageKeywordService pageKeywordService;

	@GetMapping("/select")
	public ResponseEntity<?> select(PageKeyword entity, @AuthenticationPrincipal String userId){
		ResponseEntity<?> result = null;

		result = ResponseEntity.status(HttpStatus.OK).body(pageKeywordService.selectall(entity, userId));

		return result;
	}

}
