package com.example.demo.order.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.order.entity.OrderA;
import com.example.demo.order.repository.OrderRepositoryJPA;
import com.example.demo.user.user_cart.domain.UserCartDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.OrderDetail;
import com.example.demo.user.user_cart.entity.UserCart;
import com.example.demo.order.repository.ItemorderRepository;
import com.example.demo.order.repository.OrderDetailRepository;
import com.example.demo.user.user_cart.repository.UserCartRepository;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

	private final ItemorderRepository itemorderRepository;
	private final OrderRepositoryJPA orderRepositoryJPA;
	private final OrderDetailRepository orderdetailRepository;
	private final UserCartRepository userCartRepository;

	@Transactional
	@Override
	public OrderDTO order(OrderDTO dto, String userId) {

		OrderA orderA = OrderA.builder()
				.userId(userId)
				.addressCode(dto.getAddressCode())
				.address1(dto.getAddress1())
				.address2(dto.getAddress2())
				.orderprice(dto.getOrderprice())
				.deliveryprice(dto.getDeliveryprice())
				.usepoint(dto.getUsepoint())
				.orderdate(LocalDateTime.now())
				.deliverymessage(dto.getDeliverymessage())
				.build();
		orderA = orderRepositoryJPA.save(orderA);

		List<OrderDetail> list = new ArrayList<OrderDetail>();
		List<Integer> item_list = new ArrayList<Integer>();
		
		for (UserCartDTO e : dto.getItemList()) {
			item_list.add(e.getItemCode());
			list.add(OrderDetail.builder()
					.orderSeq(orderA.getSeq())
					.itemCode(e.getItemCode())
					.amount(e.getAmount())
					.discount(e.getItemEventDiscount())
					.build());
		}
		
		orderdetailRepository.batchInsert(list);

		if(!("anonymousUser".equals(userId))) {
			List<UserCart> userCart_list = userCartRepository.selectCartWhereUserIDItemList(userId, item_list);
			for(UserCart e : userCart_list) {
				e.setAmount(0);
			}
			userCartRepository.mergeAll(userCart_list);
		}
		OrderDTO result = (OrderDTO) itemorderRepository.selectOrderByCode(orderA.getSeq()).get(0);
		return result;
	}

}
