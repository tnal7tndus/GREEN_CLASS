package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QItem_review is a Querydsl query type for Item_review
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItem_review extends EntityPathBase<Item_review> {

    private static final long serialVersionUID = 919459155L;

    public static final QItem_review item_review = new QItem_review("item_review");

    public final StringPath contents = createString("contents");

    public final StringPath image1 = createString("image1");

    public final StringPath image2 = createString("image2");

    public final StringPath image3 = createString("image3");

    public final NumberPath<Integer> item_code = createNumber("item_code", Integer.class);

    public final NumberPath<Integer> likes = createNumber("likes", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> regdate = createDateTime("regdate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> score = createNumber("score", Integer.class);

    public final NumberPath<Integer> seq = createNumber("seq", Integer.class);

    public final StringPath tag = createString("tag");

    public final StringPath title = createString("title");

    public final StringPath writer = createString("writer");

    public QItem_review(String variable) {
        super(Item_review.class, forVariable(variable));
    }

    public QItem_review(Path<? extends Item_review> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItem_review(PathMetadata metadata) {
        super(Item_review.class, metadata);
    }

}

