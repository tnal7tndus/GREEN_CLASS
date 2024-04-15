package com.main.tomatoFarm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.tomatoFarm.domain.MemberDTO;
import com.main.tomatoFarm.model.MemberDAO;

import mapperInterface.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	MemberDAO dao;
	
	//selectOne - id
	@Override
	public MemberDTO selectOne(String id) {
		return dao.selectOne(id);
	}
		
	//insert
	@Override
	public int insert(MemberDTO dto) {
		return dao.insert(dto);
	}
	
}
