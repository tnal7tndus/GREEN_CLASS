package com.example.demo.chat.repository;

import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.chat.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChatRoomRepositoryJPA extends JpaRepository<ChatRoom, Long>{

    @Query(value = "select " +
            "new com.example.demo.chat.domain.ChatRoomDTO(cr.seq, cr.type, cr.userIdUser, cr.userIdAdmin, cr.ing, " +
            "(select max(cm.regdate) as regdate from ChatMessage cm where  cm.chatRoomSeq = cr.seq)) " +
            "from ChatRoom cr " +
            "order by cr.seq desc")
    List<ChatRoomDTO> findAllWithRegdate();

    @Query(value = "select " +
            "new com.example.demo.chat.domain.ChatRoomDTO(cr.seq, cr.type, cr.userIdUser, cr.userIdAdmin, cr.ing, " +
            "(select max(cm.regdate) as regdate from ChatMessage cm where  cm.chatRoomSeq = cr.seq)) " +
            "from ChatRoom cr " +
            "where cr.userIdUser = :userId " +
            "order by cr.seq desc")
    List<ChatRoomDTO> findAllWithRegdateByUserId(String userId);

}
