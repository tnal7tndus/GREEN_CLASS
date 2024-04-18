package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QItemOrder is a Querydsl query type for ItemOrder
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItemOrder extends EntityPathBase<ItemOrder> {

    private static final long serialVersionUID = 509083402L;

    public static final QItemOrder itemOrder = new QItemOrder("itemOrder");

    public final StringPath address1 = createString("address1");

    public final StringPath address2 = createString("address2");

    public final NumberPath<Integer> addressCode = createNumber("addressCode", Integer.class);

    public final BooleanPath checked = createBoolean("checked");

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final NumberPath<Integer> delivery = createNumber("delivery", Integer.class);

    public final DatePath<java.time.LocalDate> deliveryDate = createDate("deliveryDate", java.time.LocalDate.class);

    public final StringPath id = createString("id");

    public final StringPath item_name = createString("item_name");

    public final StringPath order_message = createString("order_message");

    public final DatePath<java.time.LocalDate> orderDate = createDate("orderDate", java.time.LocalDate.class);

    public final NumberPath<Integer> point = createNumber("point", Integer.class);

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    public QItemOrder(String variable) {
        super(ItemOrder.class, forVariable(variable));
    }

    public QItemOrder(Path<? extends ItemOrder> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItemOrder(PathMetadata metadata) {
        super(ItemOrder.class, metadata);
    }

}

