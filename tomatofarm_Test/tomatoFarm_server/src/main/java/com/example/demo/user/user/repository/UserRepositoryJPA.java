package com.example.demo.user.user.repository;


import com.example.demo.user.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositoryJPA extends JpaRepository<User, String> {

}
