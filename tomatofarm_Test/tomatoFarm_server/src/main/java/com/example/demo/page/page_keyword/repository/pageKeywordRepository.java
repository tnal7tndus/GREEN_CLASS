package com.example.demo.page.page_keyword.repository;


import com.example.demo.page.page_keyword.entity.PageKeyword;
import com.example.demo.page.page_keyword.entity.PageKeywordID;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface pageKeywordRepository extends JpaRepository<PageKeyword, PageKeywordID>{

    List<PageKeyword> findByUserIdOrderBySearchDateDesc(String id);


}
