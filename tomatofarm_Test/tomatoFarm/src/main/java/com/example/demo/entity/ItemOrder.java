package com.example.demo.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "itemorder") // order 테이블과 매핑
@Data
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ItemOrder {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;
    @Column(name = "user_id")
    private String id;
    @Column(name = "name")
    private String item_name;
    @Column(name = "address_code")
    private Integer addressCode;
    @Column(length = 50)
    private String address1;
    @Column(length = 50)
    private String address2;
    private Integer price;
    @Column(name = "deliveryprice")
    private Integer delivery;
    private Integer point;
    
    @Column(name = "orderdate")
    private LocalDate orderDate;
    
    @Column(name="deliverydate")
    private LocalDate deliveryDate;
    
    private String order_message;

    private boolean checked;
    
    
    

}
