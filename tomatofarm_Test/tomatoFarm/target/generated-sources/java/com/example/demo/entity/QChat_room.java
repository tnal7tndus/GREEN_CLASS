package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QChat_room is a Querydsl query type for Chat_room
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QChat_room extends EntityPathBase<Chat_room> {

    private static final long serialVersionUID = -9835407L;

    public static final QChat_room chat_room = new QChat_room("chat_room");

    public final StringPath admin = createString("admin");

    public final NumberPath<Integer> ing = createNumber("ing", Integer.class);

    public final NumberPath<Integer> seq = createNumber("seq", Integer.class);

    public final StringPath type = createString("type");

    public final StringPath user = createString("user");

    public QChat_room(String variable) {
        super(Chat_room.class, forVariable(variable));
    }

    public QChat_room(Path<? extends Chat_room> path) {
        super(path.getType(), path.getMetadata());
    }

    public QChat_room(PathMetadata metadata) {
        super(Chat_room.class, metadata);
    }

}

