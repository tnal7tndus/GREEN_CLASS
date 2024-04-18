package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSorttable is a Querydsl query type for Sorttable
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSorttable extends EntityPathBase<Sorttable> {

    private static final long serialVersionUID = -1622996993L;

    public static final QSorttable sorttable = new QSorttable("sorttable");

    public final StringPath sorta = createString("sorta");

    public final StringPath sortacode = createString("sortacode");

    public final StringPath sortb = createString("sortb");

    public final StringPath sortbcode = createString("sortbcode");

    public final StringPath sortc = createString("sortc");

    public final StringPath sortccode = createString("sortccode");

    public QSorttable(String variable) {
        super(Sorttable.class, forVariable(variable));
    }

    public QSorttable(Path<? extends Sorttable> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSorttable(PathMetadata metadata) {
        super(Sorttable.class, metadata);
    }

}

