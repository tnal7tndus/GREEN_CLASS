package com.example.demo.chat.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.chat.entity.ChatMessage;
import com.example.demo.chat.entity.ChatRoom;
import com.example.demo.user.user.domain.AdminChat;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.module.jwtToken.TokenProvider;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.chat.service.ChatService;

import lombok.AllArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/chat")
public class ChatController {

    private final ChatService chatService;

    @PostMapping("/insertroom")
    public ResponseEntity<?> insertroom(@RequestBody ChatRoom entity) {
        ResponseEntity<?> result = null;
        ChatRoom chatRoom = chatService.insertRoom(entity);
        result = ResponseEntity.status(HttpStatus.OK).body(chatRoom);
        return result;
    }

    @GetMapping("/endroom")
    public ResponseEntity<?> endroom(ChatRoom entity) {
        ResponseEntity<?> result = null;
        List<ChatRoomDTO> list = chatService.endRoom(entity);
        result = ResponseEntity.status(HttpStatus.OK).body(list);
        return result;
    }

    @PostMapping("/insertusermessage")
    public ResponseEntity<?> insertusermessage(@RequestBody ChatMessage entity, @AuthenticationPrincipal String userId) {
        ResponseEntity<?> result = null;
        entity.setUserIdWriter(userId);
        List<ChatMessageDTO> list = chatService.insertUserMessage(entity);
        result = ResponseEntity.status(HttpStatus.OK).body(list);
        return result;
    }

    @PostMapping("/insertadminmessage")
    public ResponseEntity<?> insertadminmessage(@RequestBody ChatMessage entity, @AuthenticationPrincipal String userId) {
        ResponseEntity<?> result = null;
        entity.setUserIdWriter(userId);
        AdminChat adminChat = chatService.insertAdminMessage(entity);
        result = ResponseEntity.status(HttpStatus.OK).body(adminChat);
        return result;
    }

    @GetMapping("/selectmessage")
    public ResponseEntity<?> selectmessage(ChatMessage entity, @AuthenticationPrincipal String userId) {
        ResponseEntity<?> result = null;
        entity.setUserIdWriter(userId);
        List<ChatMessageDTO> list = chatService.selectAllmessageWhereRoomSeq(entity);
        if (list != null) {
            result = ResponseEntity.status(HttpStatus.OK).body(list);
        } else {
            result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("selectmessage failed");
        }
        return result;
    }

    @GetMapping("/selectroom")
    public ResponseEntity<?> selectroom(@AuthenticationPrincipal String userId) {
        ResponseEntity<?> result = null;
        List<ChatRoomDTO> list = chatService.selectRoom(userId);
        result = ResponseEntity.status(HttpStatus.OK).body(list);
        return result;
    }
}
