package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUserAddress is a Querydsl query type for UserAddress
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUserAddress extends EntityPathBase<UserAddress> {

    private static final long serialVersionUID = -105650952L;

    public static final QUserAddress userAddress = new QUserAddress("userAddress");

    public final StringPath address1 = createString("address1");

    public final StringPath address2 = createString("address2");

    public final NumberPath<Integer> address_code = createNumber("address_code", Integer.class);

    public final StringPath address_name = createString("address_name");

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final StringPath delieverymessage = createString("delieverymessage");

    public final StringPath id = createString("id");

    public final StringPath info = createString("info");

    public final NumberPath<Integer> main_address = createNumber("main_address", Integer.class);

    public final StringPath phonenumber = createString("phonenumber");

    public QUserAddress(String variable) {
        super(UserAddress.class, forVariable(variable));
    }

    public QUserAddress(Path<? extends UserAddress> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserAddress(PathMetadata metadata) {
        super(UserAddress.class, metadata);
    }

}

