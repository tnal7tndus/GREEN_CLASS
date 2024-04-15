package com.example.demo.domain;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import javax.persistence.Column;

import com.example.demo.entity.Item;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
	
	private List<ItemDTO> itemList; 
	private String address1;
	private String address2;
	private Integer address_code;
	private Integer phonenumber;
	private String deliverymessage;
	private Integer price;
	private Integer discount;
	private Integer deliveryprice;
	private Integer point;
	
	private String id;
	
//	========= 임시 ========
//	======================
//    private String item_name;
//    private Integer addressCode;
//    private String address1;
//    private String address2;
//    private Integer price;
//    private Integer delivery; 
//    private Integer point;
//    private LocalDate orderDate;
//    private LocalDate deliveryDate;
//
//    private int code; // 의도한건 OrderDetail 에 들어갈 item_code 다.
//    // userAddress 엔티티와 item_total 컴포넌트에서 보내는 아이템리스트의 code 가 곂치게 될텐데
//    // 바이딩에서 문제가 생기는지 확인해야 한다.
//    private Integer amount;
//    private Integer discount;
//    
//    // 얘는 묶음배송할때 필요 할 것 같다.
//    private String brand;
//    
//    private String message;


}
