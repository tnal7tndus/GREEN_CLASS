package com.example.demo.user.user_address.repository;

import com.example.demo.user.user_address.entity.UserAddress;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

import static com.example.demo.user.user_address.entity.QUserAddress.userAddress;

public interface UserAddressRepositoryJPA extends JpaRepository<UserAddress, Long> {

}
