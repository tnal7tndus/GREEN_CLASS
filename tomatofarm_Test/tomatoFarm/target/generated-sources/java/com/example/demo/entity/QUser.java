package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 133795676L;

    public static final QUser user = new QUser("user");

    public final StringPath address1 = createString("address1");

    public final StringPath address2 = createString("address2");

    public final NumberPath<Integer> address_code = createNumber("address_code", Integer.class);

    public final StringPath birthdate = createString("birthdate");

    public final StringPath email = createString("email");

    public final StringPath email2 = createString("email2");

    public final NumberPath<Integer> gender = createNumber("gender", Integer.class);

    public final StringPath id = createString("id");

    public final NumberPath<Integer> level = createNumber("level", Integer.class);

    public final StringPath password = createString("password");

    public final StringPath phonenumber = createString("phonenumber");

    public final NumberPath<Integer> point = createNumber("point", Integer.class);

    public final StringPath username = createString("username");

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

