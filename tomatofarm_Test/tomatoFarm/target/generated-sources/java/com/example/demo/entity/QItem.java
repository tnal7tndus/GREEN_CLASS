package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QItem is a Querydsl query type for Item
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItem extends EntityPathBase<Item> {

    private static final long serialVersionUID = 133439140L;

    public static final QItem item = new QItem("item");

    public final StringPath admin = createString("admin");

    public final StringPath brand = createString("brand");

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final NumberPath<Integer> delivery = createNumber("delivery", Integer.class);

    public final NumberPath<Integer> event_code = createNumber("event_code", Integer.class);

    public final StringPath intro = createString("intro");

    public final NumberPath<Integer> likes = createNumber("likes", Integer.class);

    public final StringPath name = createString("name");

    public final StringPath origin = createString("origin");

    public final StringPath packing = createString("packing");

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    public final NumberPath<Integer> sales = createNumber("sales", Integer.class);

    public final StringPath sort1 = createString("sort1");

    public final StringPath sort2 = createString("sort2");

    public final StringPath sort3 = createString("sort3");

    public final NumberPath<Integer> stock = createNumber("stock", Integer.class);

    public final StringPath storage = createString("storage");

    public final NumberPath<Integer> vat = createNumber("vat", Integer.class);

    public final NumberPath<Integer> views = createNumber("views", Integer.class);

    public final StringPath weight = createString("weight");

    public QItem(String variable) {
        super(Item.class, forVariable(variable));
    }

    public QItem(Path<? extends Item> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItem(PathMetadata metadata) {
        super(Item.class, metadata);
    }

}

