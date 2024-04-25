package com.example.demo.order.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class OrderDetailID implements Serializable {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderSeq;
    private Integer itemCode;
}
