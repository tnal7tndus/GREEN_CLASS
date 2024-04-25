package com.example.demo.user.user.domain;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.domain.ChatRoomDTO;
import lombok.*;

import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AdminChat {

    private List<ChatMessageDTO> messageList;
    private List<ChatRoomDTO> roomList;
}
