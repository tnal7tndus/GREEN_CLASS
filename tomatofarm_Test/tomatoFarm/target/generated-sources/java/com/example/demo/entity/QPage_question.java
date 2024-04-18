package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QPage_question is a Querydsl query type for Page_question
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPage_question extends EntityPathBase<Page_question> {

    private static final long serialVersionUID = -5944539L;

    public static final QPage_question page_question = new QPage_question("page_question");

    public final StringPath content = createString("content");

    public final NumberPath<Integer> seq = createNumber("seq", Integer.class);

    public final StringPath title = createString("title");

    public final StringPath type = createString("type");

    public QPage_question(String variable) {
        super(Page_question.class, forVariable(variable));
    }

    public QPage_question(Path<? extends Page_question> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPage_question(PathMetadata metadata) {
        super(Page_question.class, metadata);
    }

}

