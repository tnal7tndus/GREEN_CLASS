package com.example.demo.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Item_reviewDTO;
import com.example.demo.domain.UserToken;
import com.example.demo.entity.Item_review;
import com.example.demo.entity.User;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.Item_reviewService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:3000")
@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value = "/itemreview")
public class Itme_reviewController {
	private final Item_reviewService item_reviewService;

	@GetMapping("/select")
	public ResponseEntity<?> selectItem_reviewList(PageRequest pageRequest, SearchRequest searchRequest) {
		ResponseEntity<?> result = null;

		List<Item_review> list = item_reviewService.selectItemRevieListIntegerWhereType(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@PostMapping("/insertmultipart")
	public ResponseEntity<?> iteminsert(HttpServletRequest request, Item_review entity, UserToken userToken) throws IOException {
		ResponseEntity<?> result = null;
		System.out.println("\n\n"+ entity +"\n\n");
		System.out.println("\n\n"+ userToken +"\n\n");
		
		if (entity != null) {
			String realPath = request.getRealPath("/");
			log.info("\n\n\n** realPath => " + realPath);
			realPath += "\\resources\\img\\itemReviewImg\\" + entity.getItem_code() + "\\";
			File file = new File(realPath); // uploadImages 폴더에 화일존재 확인을 위함
			if (!file.exists()) {
				file.mkdir();
			}

			MultipartFile uploadfilef = entity.getUploadfilef();
			if (uploadfilef != null && !uploadfilef.isEmpty()) {
				String file1 = realPath + entity.getWriter() + "_" + uploadfilef.getOriginalFilename(); // 저장경로(relaPath+화일명)
																										// 완성
				uploadfilef.transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)
				entity.setImage1(entity.getWriter() + "_" + uploadfilef.getOriginalFilename());
			}
			result = ResponseEntity.status(HttpStatus.OK).body(item_reviewService.updateReview(entity));
		} 

		return result;
	}

}
