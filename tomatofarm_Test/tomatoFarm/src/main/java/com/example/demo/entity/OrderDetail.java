package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_detail") // order_detail 테이블과 매핑
@IdClass(OrderDetailID.class) // 복합 기본 키 클래스를 지정
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetail {

    @Id
    @Column(name = "order_code")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_code;

    @Id
    @Column(name = "item_code")
    private int item_code;

    @Column(name = "item_amount")
    private Integer item_amount;

    private Integer discount;

    // Getter and Setter methods
}