package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QVisit_page is a Querydsl query type for Visit_page
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QVisit_page extends EntityPathBase<Visit_page> {

    private static final long serialVersionUID = -834250796L;

    public static final QVisit_page visit_page = new QVisit_page("visit_page");

    public final StringPath page = createString("page");

    public final NumberPath<Integer> visit_count = createNumber("visit_count", Integer.class);

    public final DatePath<java.time.LocalDate> visit_date = createDate("visit_date", java.time.LocalDate.class);

    public QVisit_page(String variable) {
        super(Visit_page.class, forVariable(variable));
    }

    public QVisit_page(Path<? extends Visit_page> path) {
        super(path.getType(), path.getMetadata());
    }

    public QVisit_page(PathMetadata metadata) {
        super(Visit_page.class, metadata);
    }

}

