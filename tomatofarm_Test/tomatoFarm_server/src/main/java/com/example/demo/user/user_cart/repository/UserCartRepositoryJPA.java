package com.example.demo.user.user_cart.repository;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.entity.UserCart;
import com.example.demo.user.user_cart.entity.UserCartID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserCartRepositoryJPA extends JpaRepository<UserCart, UserCartID> {

    @Query(value = "select " +
            "new com.example.demo.user.user_cart.domain.UserCartDTO(" +
            "uc.itemCode, uc.userId, uc.amount, uc.likeItem, i.name, i.price, i.delivery, i.stock, ie.discount) " +
            "from UserCart uc " +
            "left join Item i on uc.itemCode = i.code " +
            "left join  ItemEvent ie on i.itemEventCode = ie.code " +
            "where uc.userId = :userId and uc.amount > 0")
    List<UserCartDTO> findAllByUserId(String userId);

    @Query(value = "select " +
            "new com.example.demo.user.user_cart.domain.UserCartDTO(" +
            "i.code, i.name, i.price, i.delivery, i.stock, ie.discount) " +
            "from Item i " +
            "left join  ItemEvent ie on i.itemEventCode = ie.code " +
            "where i.code in :itemCodes")
    List<UserCartDTO> findAllByItemCodeIn(List<Integer> itemCodes);

}
