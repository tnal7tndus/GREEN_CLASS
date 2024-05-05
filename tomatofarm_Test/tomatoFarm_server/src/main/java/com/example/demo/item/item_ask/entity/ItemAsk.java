package com.example.demo.item.item_ask.entity;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item_ask")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemAsk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq")
    private Long seq; //순번
    @Column(name = "item_code")
    private Integer itemCode; //제품코드
    @Column(name = "user_id_writer")
    private String userIdWriter;    //글쓴이
    @Column(name = "title")
    private String title;    //제목
    @Column(name = "contents")
    private String contents;    //내용
    @Column(name = "password")
    private String password;    //비밀번호
    @Column(name = "reply")
    private String reply;    //답변
    @Column(name = "user_id_replyer")
    private String userIdReplyer;    //답변자
    @Column(name = "regdate")
    private LocalDateTime regdate;    //날짜
    @Column(name = "type")
    private String type;    //유형
}
