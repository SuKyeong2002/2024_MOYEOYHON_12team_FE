import React, { useState } from 'react';
import axios from 'axios';
import * as L from '@/styles/LoginStyle';
import { useNavigate } from 'react-router-dom';
import FireIcon from '../../assets/icons/Fire.svg';

const Login = () => {
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setNickname(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/userSignUp', { 
                nickname: nickname,
            });

            // 성공적인 응답 처리
            if (response.status === 201 && response.data.code === 201) {
                setMessage(response.data.message);
                navigate('/correct');
            }
        } catch (error) {
            console.error('Error:', error);
            // 에러 메시지 개선
            if (error.response) {
                setMessage(error.response.data.message || '닉네임 설정에 실패했습니다. 다시 시도해 주세요.');
            } else {
                setMessage('서버와의 연결에 실패했습니다. 나중에 다시 시도해 주세요.');
                navigate('/correct', { replace: true });

            }
        }
    };

    return (
        <>
        <L.LoginContainer>
            <L.Form onSubmit={handleSubmit}>
                <L.Title>방에 참여하도록 초대되었습니다!</L.Title>
                <L.LabelContainer>
                    <L.FireIconWrapper>
                       
                    </L.FireIconWrapper>
                    <L.NicknameContainer>
                        <L.Label>닉네임 선택</L.Label>
                        <L.Input
                            type="text"
                            value={nickname}
                            onChange={handleInputChange}
                            placeholder="닉네임을 입력해주세요."
                        />
                    </L.NicknameContainer>
                </L.LabelContainer>
                <L.Button type="submit">가입</L.Button>
            </L.Form>
            {message && <L.Message>{message}</L.Message>}
        </L.LoginContainer>
        </>
    );
};

export default Login;
