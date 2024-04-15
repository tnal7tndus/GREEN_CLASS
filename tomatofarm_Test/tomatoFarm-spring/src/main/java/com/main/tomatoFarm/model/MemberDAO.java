package com.main.tomatoFarm.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.springframework.stereotype.Repository;

import com.main.tomatoFarm.domain.MemberDTO;

@Repository
public class MemberDAO {
	private static Connection cn = DBConnection.getConnection(); // CehckedException으로 try~catch 해줘야함. 익셉션 처리 해주지 않으면
	private static PreparedStatement pst;
	private static ResultSet rs;
	private static String sql;
	
	public MemberDTO selectOne(String id) {
		sql = "SELECT * FROM user WHERE id=?";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, id);
			rs = pst.executeQuery();
			if (rs.next()) {
				MemberDTO dto = new MemberDTO();
				dto.setId(rs.getString(1));
				dto.setPassword(rs.getString(2));
				dto.setName(rs.getString(3));
				dto.setPhonenumber(rs.getString(4));
				dto.setAddress(rs.getString(5));
				dto.setDelivery1(rs.getString(6));
				dto.setDelivery2(rs.getString(7));
				dto.setDelivery3(rs.getString(8));
				dto.setEmail(rs.getString(9));
				dto.setEmailback(rs.getString(10));
				dto.setGender(rs.getString(11));
				dto.setBirthday(rs.getString(12));
				return dto;
			} else {
				return null;
			}
		} catch (Exception e) {
			System.out.println("** selectOne Exception => " + e.toString());
			return null;
		}
	}// selectOne
	
	
	public int insert(MemberDTO dto) {
		sql = "INSERT INTO user VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
		System.out.println(dto);
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, dto.getId());
			pst.setString(2, dto.getPassword());
			pst.setString(3, dto.getName());
			pst.setString(4, dto.getPhonenumber());
			pst.setString(5, dto.getAddress());
			pst.setString(6, dto.getDelivery1());
			pst.setString(7, dto.getDelivery2());
			pst.setString(8, dto.getDelivery3());
			pst.setString(9, dto.getEmail());
			pst.setString(10, dto.getEmailback());
			pst.setString(11, dto.getGender());
			pst.setString(12, dto.getBirthday());
			
			return pst.executeUpdate();
		} catch (Exception e) {
			System.out.println("** insert Exception => " + e.toString());
			return 0;
		}
	}//insert
	
	
	
	
	
	
	
	
}//signUpDAO
