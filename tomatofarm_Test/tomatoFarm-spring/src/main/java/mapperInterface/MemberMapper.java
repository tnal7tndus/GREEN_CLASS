package mapperInterface;

import com.main.tomatoFarm.domain.MemberDTO;

public interface MemberMapper {

	//selectOne - id
		public MemberDTO selectOne(String id);
		
		//insert
		public int insert(MemberDTO dto);
}
