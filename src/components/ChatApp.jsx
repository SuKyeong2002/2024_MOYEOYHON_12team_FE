import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import * as C from '@/styles/ChatStyle';
import Congrats from '@/components/Congrats';
import Send from '@/assets/send.png';


function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isCelebrating, setIsCelebrating] = useState(false);
  const stompClient = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // SockJS 인스턴스를 생성하고 올바르게 설정
    const socket = new SockJS(`${process.env.REACT_APP_SOCKET_URL}/ws-stomp`);
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, () => {
      // 연결 성공 시 '/topic/chat/message' 구독
      stompClient.current.subscribe('/sub/chat/message', (msg) => {
        const receivedMessage = JSON.parse(msg.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      });
    }, (error) => {
      console.error('Connection error', error);
    });

    // 컴포넌트가 제거될 때 연결 해제
    return () => {
      if (stompClient.current) {
        stompClient.current.disconnect();
      }
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && stompClient.current) {
      stompClient.current.send('/pub/chat/message', {}, JSON.stringify({ content: message }));
      setMessage('');
    }
  };

  const handleCelebrate = () => {
    setIsCelebrating(true);
  };

  const handleCloseCelebrate = () => {
    setIsCelebrating(false);
    navigate('/recommendation')
  };

  return (
    <C.ChatApp>
      <C.ChatBox>
        {messages.map((msg, index) => (
          <C.textBox key={index}>{msg.content}</C.textBox>
        ))}
      </C.ChatBox>
      <C.SearchBar>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="질문을 입력해주세요"
          />
          <C.SubmitBtn type="submit">
            <img src={Send} alt="메시지 전송" />
          </C.SubmitBtn>
          <C.CongratsBtn onClick={handleCelebrate}>
            정답!
          </C.CongratsBtn>
        </form>
      </C.SearchBar>

      {isCelebrating && <Congrats message="축하합니다!" onClose={handleCloseCelebrate} />}
    </C.ChatApp>
  );
}

export default ChatApp;
