package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailID implements Serializable {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer order_code;
    private Integer item_code;
}
