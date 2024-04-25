package com.example.demo.user.user_detail.repository;

import com.example.demo.user.user_detail.entity.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailRepositoryJPA extends JpaRepository<UserDetail, String> {
}
