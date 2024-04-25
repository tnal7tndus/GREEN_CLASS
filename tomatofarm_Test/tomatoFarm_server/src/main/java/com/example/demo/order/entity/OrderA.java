package com.example.demo.order.entity;

import java.time.LocalDateTime;

import javax.persistence.*;

import com.example.demo.order.domain.OrderDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@SqlResultSetMapping(
        name = "OrderDTOMapping",
        classes = @ConstructorResult(
                targetClass = OrderDTO.class,
                columns = {
                        @ColumnResult(name = "address1", type = String.class),
                        @ColumnResult(name = "address2", type = String.class),
                        @ColumnResult(name = "address_code", type = String.class),
                        @ColumnResult(name = "deliveryprice", type = Integer.class),
                        @ColumnResult(name = "delivery_message", type = String.class),
                        @ColumnResult(name = "orderprice", type = Integer.class),
                        @ColumnResult(name = "usepoint", type = Integer.class),
                        @ColumnResult(name = "orderdate", type = LocalDateTime.class),
                        @ColumnResult(name = "itemCode", type = Integer.class),
                        @ColumnResult(name = "itemName", type = String.class),
                        @ColumnResult(name = "orderSize", type = Integer.class)
                }
        )
)

@Entity
@Table(name = "order_a") // order 테이블과 매핑
@Data
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class OrderA {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer seq;
    @Column(name = "user_id")
    private String userId;
    @Column(name = "address_code")
    private String addressCode;
    @Column(name = "address1")
    private String address1;
    @Column(name = "address2")
    private String address2;
    @Column(name = "orderprice")
    private Integer orderprice;
    @Column(name = "deliveryprice")
    private Integer deliveryprice;
    @Column(name = "usepoint")
    private Integer usepoint;
    
    @Column(name = "orderdate")
    private LocalDateTime orderdate;
    
    @Builder.Default
    @Column(name="status")
    private Integer status=0;

    @Column(name="deliverydate")
    private LocalDateTime deliverydate;

    @Column(name="delivery_message")
    private String deliverymessage;

    @Transient
    private Integer orderSize;
    @Transient
    private String itemName;


}
