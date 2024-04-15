package com.main.tomatoFarm.service;

import com.main.tomatoFarm.domain.MemberDTO;

public interface MemberService {
	
	//selectOne - id
	public MemberDTO selectOne(String id);
	
	//insert
	public int insert(MemberDTO dto);
	
}
