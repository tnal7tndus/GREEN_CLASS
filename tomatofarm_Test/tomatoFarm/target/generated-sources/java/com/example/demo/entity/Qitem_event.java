package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * Qitem_event is a Querydsl query type for item_event
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class Qitem_event extends EntityPathBase<item_event> {

    private static final long serialVersionUID = 1349815583L;

    public static final Qitem_event item_event = new Qitem_event("item_event");

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final NumberPath<Integer> discount = createNumber("discount", Integer.class);

    public final DatePath<java.time.LocalDate> enddate = createDate("enddate", java.time.LocalDate.class);

    public final StringPath name = createString("name");

    public final DatePath<java.time.LocalDate> startdate = createDate("startdate", java.time.LocalDate.class);

    public Qitem_event(String variable) {
        super(item_event.class, forVariable(variable));
    }

    public Qitem_event(Path<? extends item_event> path) {
        super(path.getType(), path.getMetadata());
    }

    public Qitem_event(PathMetadata metadata) {
        super(item_event.class, metadata);
    }

}

