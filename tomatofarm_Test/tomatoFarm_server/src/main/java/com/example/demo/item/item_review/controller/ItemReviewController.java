package com.example.demo.item.item_review.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.item.item_review.entity.ItemReview;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_review.service.ItemReviewService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:3000")
@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value = "/itemreview")
public class ItemReviewController {
	private final ItemReviewService itemReviewService;

	@GetMapping("/select")
	public ResponseEntity<?> selectItem_reviewList(PageRequest pageRequest, SearchRequest searchRequest) {
		ResponseEntity<?> result = null;

		List<ItemReview> list = itemReviewService.selectItemRevieListIntegerWhereType(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@PostMapping("/insertmultipart")
	public ResponseEntity<?> iteminsert(HttpServletRequest request,  ItemReview entity) throws IOException {
		ResponseEntity<?> result = null;
		
			String realPath = request.getRealPath("/");
			log.info("\n\n\n** realPath => " + realPath);
		if (entity != null) {
//			String realPath = request.getRealPath("/");
//			log.info("\n\n\n** realPath => " + realPath);
//			realPath += "\\resources\\img\\itemReviewImg\\" + entity.getItemCode() + "\\";
//			File file = new File(realPath); // uploadImages 폴더에 화일존재 확인을 위함
//			if (!file.exists()) {
//				file.mkdir();
//			}
//
//			MultipartFile uploadfilef = entity.getUploadfilef();
//			if (uploadfilef != null && !uploadfilef.isEmpty()) {
//				String file1 = realPath + entity.getUserIdWriter() + "_" + uploadfilef.getOriginalFilename(); // 저장경로(relaPath+화일명)
//				uploadfilef.transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)
//				entity.setImage1(entity.getUserIdWriter() + "_" + uploadfilef.getOriginalFilename());
//			}
			result = ResponseEntity.status(HttpStatus.OK).body(itemReviewService.updateReview(entity));
		} 

		return result;
	}

}
