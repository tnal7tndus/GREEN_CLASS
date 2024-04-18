package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUserCartID is a Querydsl query type for UserCartID
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QUserCartID extends BeanPath<UserCartID> {

    private static final long serialVersionUID = 2129707703L;

    public static final QUserCartID userCartID = new QUserCartID("userCartID");

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final StringPath id = createString("id");

    public QUserCartID(String variable) {
        super(UserCartID.class, forVariable(variable));
    }

    public QUserCartID(Path<? extends UserCartID> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserCartID(PathMetadata metadata) {
        super(UserCartID.class, metadata);
    }

}

