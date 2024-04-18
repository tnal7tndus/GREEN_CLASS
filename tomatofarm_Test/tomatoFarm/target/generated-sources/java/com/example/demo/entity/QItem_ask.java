package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QItem_ask is a Querydsl query type for Item_ask
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItem_ask extends EntityPathBase<Item_ask> {

    private static final long serialVersionUID = -1645685154L;

    public static final QItem_ask item_ask = new QItem_ask("item_ask");

    public final StringPath contents = createString("contents");

    public final NumberPath<Integer> item_code = createNumber("item_code", Integer.class);

    public final StringPath password = createString("password");

    public final DateTimePath<java.time.LocalDateTime> regdate = createDateTime("regdate", java.time.LocalDateTime.class);

    public final StringPath reply = createString("reply");

    public final NumberPath<Integer> seq = createNumber("seq", Integer.class);

    public final StringPath title = createString("title");

    public final StringPath type = createString("type");

    public final StringPath writer = createString("writer");

    public QItem_ask(String variable) {
        super(Item_ask.class, forVariable(variable));
    }

    public QItem_ask(Path<? extends Item_ask> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItem_ask(PathMetadata metadata) {
        super(Item_ask.class, metadata);
    }

}

