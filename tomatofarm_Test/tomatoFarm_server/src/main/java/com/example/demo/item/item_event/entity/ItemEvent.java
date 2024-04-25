package com.example.demo.item.item_event.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item_event")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemEvent {

    @Id
    @Column(name = "code")
    private Integer code;
    @Column(name = "name")
    private String name;
    @Column(name = "discount")
    private Integer discount;
    @Column(name = "startdate")
    private LocalDate startdate;
    @Column(name = "enddate")
    private LocalDate enddate;

}
