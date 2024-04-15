package com.main.tomatoFarm.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.main.tomatoFarm.domain.ItemDTO;
import com.main.tomatoFarm.domain.SortDTO;

@Repository
public class SortDAO {
	
	private static Connection cn = DBConnection.getConnection();
	private static PreparedStatement pst;
	private static ResultSet rs;
	private static String sql;
	
	public List<SortDTO> selectSortList() {
		try {
			sql="Select sorta, sortb, sortc From sorttable";
			pst=cn.prepareStatement(sql);
			rs=pst.executeQuery();
			List<SortDTO> list = new ArrayList<SortDTO>();
			if (rs.next()) {
				do {
					SortDTO dto = new SortDTO();
					dto.setSorta(rs.getString(1));
					dto.setSortb(rs.getString(2));
					dto.setSortc(rs.getString(3));
					list.add(dto);
				} while (rs.next());

				return list;
			} else {
				System.out.println("selectSortList => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectSortList => :" + e.toString());
			return null;
		}

	}
	
	public List<SortDTO> selectSortbList() {
		try {
			sql="Select sortb, concat(sortacode,sortbcode) From sorttable Group By sortb, sortacode, sortbcode";
			pst=cn.prepareStatement(sql);
			rs=pst.executeQuery();
			List<SortDTO> list = new ArrayList<SortDTO>();
			if (rs.next()) {
				do {
					SortDTO dto = new SortDTO();
					dto.setSortb(rs.getString(1));
					dto.setSortcode(rs.getString(2));
					list.add(dto);
				} while (rs.next());
				
				return list;
			} else {
				System.out.println("selectSortbList => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectSortbList => :" + e.toString());
			return null;
		}
		
	}
}
