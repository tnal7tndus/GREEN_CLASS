package com.main.tomatoFarm.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.main.tomatoFarm.domain.KeywordDTO;

@Repository
public class KeywordDAO {

	private static Connection cn = DBConnection.getConnection();
	private static PreparedStatement pst;
	private static ResultSet rs;
	private static String sql;

	public int updateKeywordCnt(String keyword) {
		sql = "update search set cnt = cnt+1 where keyword ='" + keyword + "'";
		
		
		try {
			pst = cn.prepareStatement(sql);

			if (pst.executeUpdate() > 0) {
				return 1;
			} else {
				sql = "insert into search(keyword) values('" + keyword + "')";
				pst = cn.prepareStatement(sql);

				return pst.executeUpdate();
			}

		} catch (Exception e) {
			System.out.println("updateKeywordCnt Error => " + e.toString());
			return 0;
		}

	}

	public List<KeywordDTO> selectKeywordList() {
		sql = "select * from search orderby cnt desc";
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			List<KeywordDTO> list = new ArrayList<KeywordDTO>();
			if (rs.next()) {
				do {
					KeywordDTO dto = new KeywordDTO();

					dto.setKeyword(rs.getString(1));
					dto.setCnt(rs.getInt(2));

					list.add(dto);
					if(list.size() == 5) break;
					// 나중에는 검색키워드가 많아질테고
					// 우리가 보여주고자하는건 인기검색어 5~10개 정도
					// 그러면 반복문을 깨주는게 좋지 않을까
				} while (rs.next());
				

				return list;
			} else {
				System.out.println("selectKeywordList => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectKeywordList => :" + e.toString());
			return null;
		}

	}

}
