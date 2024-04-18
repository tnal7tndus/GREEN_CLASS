package com.example.demo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QChat_message is a Querydsl query type for Chat_message
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QChat_message extends EntityPathBase<Chat_message> {

    private static final long serialVersionUID = -1373707087L;

    public static final QChat_message chat_message = new QChat_message("chat_message");

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> regdate = createDateTime("regdate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> room_seq = createNumber("room_seq", Integer.class);

    public final NumberPath<Integer> seq = createNumber("seq", Integer.class);

    public final StringPath writer = createString("writer");

    public QChat_message(String variable) {
        super(Chat_message.class, forVariable(variable));
    }

    public QChat_message(Path<? extends Chat_message> path) {
        super(path.getType(), path.getMetadata());
    }

    public QChat_message(PathMetadata metadata) {
        super(Chat_message.class, metadata);
    }

}

