package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.KeywordRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class KeywordRepositoryImpl implements KeywordRepository{

	private final EntityManager entityManager;
	
	@Override
	public Keyword merge(Keyword keyword, KeywordID keywordID ) {
		Keyword entity = entityManager.find(Keyword.class, keywordID);
		
		if(entity != null) {
			entity.setSearch_count(entity.getSearch_count() + 1);
			return entityManager.merge(entity);
		} else {
			return entityManager.merge(keyword);
		}
		
	}
	
}
