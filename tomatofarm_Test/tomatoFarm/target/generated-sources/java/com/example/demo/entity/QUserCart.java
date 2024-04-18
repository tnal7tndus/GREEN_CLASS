package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUserCart is a Querydsl query type for UserCart
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUserCart extends EntityPathBase<UserCart> {

    private static final long serialVersionUID = 1204449436L;

    public static final QUserCart userCart = new QUserCart("userCart");

    public final NumberPath<Integer> amount = createNumber("amount", Integer.class);

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final StringPath id = createString("id");

    public final NumberPath<Integer> like_item = createNumber("like_item", Integer.class);

    public final DatePath<java.time.LocalDate> regdate = createDate("regdate", java.time.LocalDate.class);

    public final NumberPath<Integer> views = createNumber("views", Integer.class);

    public QUserCart(String variable) {
        super(UserCart.class, forVariable(variable));
    }

    public QUserCart(Path<? extends UserCart> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserCart(PathMetadata metadata) {
        super(UserCart.class, metadata);
    }

}

