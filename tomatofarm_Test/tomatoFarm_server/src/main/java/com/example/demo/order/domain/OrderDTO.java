package com.example.demo.order.domain;

import java.time.LocalDateTime;
import java.util.List;

import com.example.demo.item.item.domain.ItemDTO;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.entity.UserCart;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
	
	private List<UserCartDTO> itemList;
	private String address1;
	private String address2;
	private String addressCode;
	private String addressName;
	private Integer deliveryprice;
	private String deliverymessage;
	private Integer discount;
	private String info;
	private Integer orderprice;
	private String phonenumber;
	private Integer usepoint;

	private Integer itemCode;
	private String itemName;
	private Integer orderSize;

	private LocalDateTime orderdate;

	public OrderDTO(String address1, String address2, String addressCode, Integer deliveryprice, String deliverymessage,Integer orderprice, Integer usepoint, LocalDateTime orderdate, Integer itemCode, String itemName, Integer orderSize) {
		this.address1 = address1;
		this.address2 = address2;
		this.addressCode = addressCode;
		this.deliveryprice = deliveryprice;
		this.deliverymessage = deliverymessage;
		this.orderprice = orderprice;
		this.usepoint = usepoint;
		this.orderdate = orderdate;
		this.itemCode = itemCode;
		this.itemName = itemName;
		this.orderSize = orderSize;
	}
}
