package com.example.demo.item.item_ask.repository;

import com.example.demo.item.item_ask.entity.ItemAsk;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemAskRepositoryJPA extends JpaRepository<ItemAsk, Long> {
    public List<ItemAsk> findAllByItemCodeOrderBySeqDesc(Integer itemCode);
}
