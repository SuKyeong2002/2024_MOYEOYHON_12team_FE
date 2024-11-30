import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as L from '@/styles/LoginStyle';
import { useNavigate, useLocation } from 'react-router-dom';

const WaitingPage = () => {
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');
    const [isJoining, setIsJoining] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // URL 파라미터에 roomId가 있는지 확인하여 참가/생성 구분
        const searchParams = new URLSearchParams(location.search);
        setIsJoining(searchParams.has('roomId'));
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isJoining) {
            // 참가하기 로직
            navigate(`/waiting?roomId=${searchParams.get('roomId')}&nickname=${nickname}`);
        } else {
            // 방만들기 로직
            try {
                const response = await axios.post('http://localhost:5000/createRoom', { nickname });
                if (response.status === 201) {
                    navigate(`/waiting?roomId=${response.data.roomId}&nickname=${nickname}&isHost=true`);
                }
            } catch (error) {
                setMessage('방 만들기에 실패했습니다. 다시 시도해 주세요.');
            }
        }
    };

    return (
        <L.LoginContainer>
            <L.Form onSubmit={handleSubmit}>
                <L.Title>{isJoining ? '방에 참가하기' : '게임을 만들어보세요'}</L.Title>
                <L.Input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="닉네임을 입력해주세요."
                />
                <L.Button type="submit">{isJoining ? '참가하기' : '방 만들기'}</L.Button>
            </L.Form>
            {message && <L.Message>{message}</L.Message>}
        </L.LoginContainer>
    );
};

export default WaitingPage;
