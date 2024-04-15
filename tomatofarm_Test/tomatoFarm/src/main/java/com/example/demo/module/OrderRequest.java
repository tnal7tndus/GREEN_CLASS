package com.example.demo.module;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.*;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;

import lombok.Data;

@Data
public class OrderRequest {
	
	public ItemOrder makeOrderEntity(OrderDTO dto, String id) {
		List<ItemDTO> itemList = dto.getItemList();
		LocalDate now = LocalDateTime.now().plusHours(9).toLocalDate(); // 주문시간
		String orderId = id; // 주문자 ID
		String orderName = itemList.get(0).getName()+ " 외 " + (itemList.size() - 1) + "건"; // 주문명
		Integer totalPrice = 0;
		Integer totalDelivery = 0;
		Integer totalPoint = 0; // 상품의 5%
		
		for(ItemDTO item : itemList) {
			double discount = 0; 
			if(item.getDiscount() != null) {
				discount = (double) item.getDiscount() / 100;
			}
			Integer disPrice = (int) (item.getPrice() * (1 - discount)); // 할인된 가격 계산
			totalPrice += disPrice * item.getAmount() + item.getDelivery(); // 총 가격에 할인된 가격과 배송비 추가
			totalDelivery += item.getDelivery();
			totalPoint += (int)Math.ceil((item.getPrice() * 0.05) * item.getAmount());
		}
		ItemOrder itemOrder = ItemOrder.builder()
								.orderDate(now)
								.id(orderId)
								.item_name(orderName)
								.price(totalPrice)
								.delivery(totalDelivery)
								.point(totalPoint)
								.addressCode(dto.getAddress_code())
								.address1(dto.getAddress1())
								.address2(dto.getAddress2())
								.order_message(dto.getDeliverymessage())
								.build();
		return itemOrder;
	}

	public List<OrderDetail> makeDetailEntity(OrderDTO dto, String id) {
		List<OrderDetail> detailList = new ArrayList<OrderDetail>();
		List<ItemDTO> itemList = dto.getItemList();
		for (ItemDTO one : itemList) {
			OrderDetail detail = new OrderDetail();
			detail.setItem_code(one.getCode());
			detail.setItem_amount(one.getAmount());
			detail.setDiscount(one.getDiscount());
			detailList.add(detail);
		}
		return detailList;
	}
}
