package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QKeywordID is a Querydsl query type for KeywordID
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QKeywordID extends BeanPath<KeywordID> {

    private static final long serialVersionUID = 1702838227L;

    public static final QKeywordID keywordID = new QKeywordID("keywordID");

    public final StringPath keyword = createString("keyword");

    public final DatePath<java.time.LocalDate> search_date = createDate("search_date", java.time.LocalDate.class);

    public QKeywordID(String variable) {
        super(KeywordID.class, forVariable(variable));
    }

    public QKeywordID(Path<? extends KeywordID> path) {
        super(path.getType(), path.getMetadata());
    }

    public QKeywordID(PathMetadata metadata) {
        super(KeywordID.class, metadata);
    }

}

