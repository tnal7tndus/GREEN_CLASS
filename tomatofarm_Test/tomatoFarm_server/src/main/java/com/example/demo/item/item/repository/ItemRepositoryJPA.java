package com.example.demo.item.item.repository;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ItemRepositoryJPA extends JpaRepository<Item, Integer> {
    @Query(value = "select " +
            "new com.example.demo.item.item.domain.ItemDTO(i.code, i.sort1, i.sort2, i.sort3, i.brand, i.name, i.weight, " +
            "i.storage, i.packing, i.delivery, i.price, i.vat, i.origin, i.sales, i.stock, i.views, i.likes, i.itemEventCode, i.userIdAdmin, " +
            "i.intro, ie.discount, ie.name) " +
            "from Item i " +
            "left join ItemEvent ie on i.itemEventCode = ie.code " +
            "where i.code = :code")
    public ItemDTO findByCode(Integer code);
}
