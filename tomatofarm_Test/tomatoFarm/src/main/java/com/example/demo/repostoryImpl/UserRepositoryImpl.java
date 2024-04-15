package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import com.example.demo.domain.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.UserRepository;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import io.github.classgraph.AnnotationInfoList;
import lombok.AllArgsConstructor;

import static com.example.demo.entity.QUser.user;

import java.util.ArrayList;
import java.util.List;

@Repository
@AllArgsConstructor
public class UserRepositoryImpl implements UserRepository {
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	
	
	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	@Override
	public User selectUser(User entity) {
		return jpaQueryfactory
				.selectFrom(user)
				.where(user.id.eq(entity.getId()))
				.fetchOne();
	}
	
	@Override
	public List<User> selectUserWhereString(SearchRequest searchRequest) {
		return jpaQueryfactory
				.selectFrom(user)
				.from(user)
				.where(Expressions.stringPath(searchRequest.getColumn())
						.contains(searchRequest.getKeyword()))
				.fetch();
	}
	
	@Override
	public List<User> selectUserWhereNumber(SearchRequest searchRequest) {
		return jpaQueryfactory
				.selectFrom(user)
				.from(user)
				.where(Expressions.numberPath(Integer.class, searchRequest.getColumn()).stringValue()
						.contains(searchRequest.getKeyword()))
				.fetch();
	}
	
	@Override
	@Transactional
	public int insertUser(UserDTO dto) {
		// SQL insert 사용시 EntityManager 사용
		return entityManager
					.createNativeQuery("INSERT INTO user(id,password,username,phonenumber"
											+ ",address2,email,email2,gender,birthdate) "
											+ "VALUE(?,?,?,?,?,?,?,?,?)")
					.setParameter(1, dto.getId())
					.setParameter(2, dto.getPassword())
					.setParameter(3, dto.getUsername())
					.setParameter(4, dto.getPhonenumber())
					.setParameter(5, dto.getAddress2())
					.setParameter(6, dto.getEmail())
					.setParameter(7, dto.getEmail2())
					.setParameter(8, dto.getGender())
					.setParameter(9, dto.getBirthdate())
					.executeUpdate();
	}

	@Override
	@Transactional
	public User updateUser(User entity) {
		return entityManager.merge(entity);
	}
	
	@Override
	public List<User> insertTest(List<User> list) {
		List<User> check = new ArrayList<User>();
		for(User user : list) {
			check.add(entityManager.merge(user));
		}
		return check;
	}
	
	
	

}
