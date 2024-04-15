package com.main.tomatoFarm.service;

import java.util.List;

import com.main.tomatoFarm.domain.ItemDTO;


public interface ItemService {

	public int itemListCount(String keyword);
	public List<ItemDTO> selectItemList(); // 전체상품
	public List<ItemDTO> selectItemListWhereKeyword(String keyWord); // 검색기능(브랜드 or 제품명)
	public List<ItemDTO> selectItemListBySales(); // 판매량 높은순서로 리스트 출력
//	========================================================================
//	public List<ItemDTO> selectItemListByDesc(); // 가격 내림차순
//	public List<ItemDTO> selectItemListByAsc(); // 가격 오름차순
//	public List<ItemDTO> selectItemListByDate(); // 최신등록상품순
//	==================================================================
	public ItemDTO selectItem(int Code); // 디테일 페이지
	public List<ItemDTO> selectItemListWhereBrand(String str); // 인덱스페이지
	public List<ItemDTO> selectItemListOrderBy(String col,String sort);
	public List<ItemDTO> selectBrandList(); //
	public List<ItemDTO> selectEventItemList();
//	=========================================================================
	

}
