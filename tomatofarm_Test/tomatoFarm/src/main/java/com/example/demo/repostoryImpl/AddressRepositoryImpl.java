package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.UserAddress;
import com.example.demo.repository.AddressRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.QUserAddress.userAddress;

import java.util.List;

@Repository
@AllArgsConstructor
public class AddressRepositoryImpl implements AddressRepository {

	JPAQueryFactory factory;
	EntityManager entityManager;
	
	@Override
	public List<UserAddress> selectAddressWhereId(String id) {
		return factory.selectFrom(userAddress)
				.from(userAddress)
				.where(userAddress.id.eq(id))
				.fetch();
	}
	
	@Override
	public UserAddress insertUserAddress(UserAddress entity) {
		return entityManager.merge(entity);
	}
	
	@Transactional
	@Override
	public void deleteAddress(UserAddress entity) {
		UserAddress test = entityManager.merge(entity);
		entityManager.remove(test);
	}
}
