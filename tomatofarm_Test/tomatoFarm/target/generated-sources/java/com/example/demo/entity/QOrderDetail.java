package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QOrderDetail is a Querydsl query type for OrderDetail
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOrderDetail extends EntityPathBase<OrderDetail> {

    private static final long serialVersionUID = -1763721074L;

    public static final QOrderDetail orderDetail = new QOrderDetail("orderDetail");

    public final NumberPath<Integer> discount = createNumber("discount", Integer.class);

    public final NumberPath<Integer> item_amount = createNumber("item_amount", Integer.class);

    public final NumberPath<Integer> item_code = createNumber("item_code", Integer.class);

    public final NumberPath<Integer> order_code = createNumber("order_code", Integer.class);

    public QOrderDetail(String variable) {
        super(OrderDetail.class, forVariable(variable));
    }

    public QOrderDetail(Path<? extends OrderDetail> path) {
        super(path.getType(), path.getMetadata());
    }

    public QOrderDetail(PathMetadata metadata) {
        super(OrderDetail.class, metadata);
    }

}

