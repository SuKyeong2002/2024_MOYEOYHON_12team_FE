import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as L from '@/styles/LoginStyle';
import { useNavigate, useLocation } from 'react-router-dom';
import P1 from '@/assets/profile_1.png';
import P2 from '@/assets/profile_2.png';
import P3 from '@/assets/profile_3.png';
import P4 from '@/assets/profile_4.png';
import P5 from '@/assets/profile_5.png';
import NextBtn from '@/assets/NextBtn.png';
import PrevBtn from '@/assets/PrevBtn.png';
import StartIcon from "@/assets/icons/Start.svg";

const profile = [
    { name: 'P1', src: P1 },
    { name: 'P2', src: P2 },
    { name: 'P3', src: P3 },
    { name: 'P4', src: P4 },
    { name: 'P5', src: P5 },
];

const roles = ['ADMIN', 'GUEST']; // 역할 목록

const Login = ({ language }) => {
    const [nickname, setNickname] = useState('');
    const [currentP, setCurrentP] = useState(0);
    const [selectedRole, setSelectedRole] = useState(roles[0]); // 기본 역할
    const [message, setMessage] = useState('');
    const [isJoining, setIsJoining] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNext = () => {
        setCurrentP((prevP) => (prevP + 1) % profile.length);
    };

    const handlePrev = () => {
        setCurrentP((prevP) =>
            prevP === 0 ? profile.length - 1 : prevP - 1
        );
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setIsJoining(searchParams.has('roomId'));
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userData = {
            profile: "sssss",
            username: nickname,
            role: selectedRole // 선택한 역할
        };
    
        try {
            // 사용자 프로필 저장 요청
            const response = await axios.post('http://52.71.176.111:8080/user/save', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                // 방에 참여하는 경우
                if (isJoining) {
                    const searchParams = new URLSearchParams(location.search);
                    navigate(`/waiting?roomId=${searchParams.get('roomId')}&nickname=${nickname}`);
                } else {
                    // 방 생성 요청
                    const createRoomResponse = await axios.post(`http://52.71.176.111:8080/api/room/create?roomId=${response.data.roomId}`, {}, {
                        headers: {
                            'accept': '*/*'
                        }
                    });
    
                    if (createRoomResponse.status === 200) {
                        const roomId = createRoomResponse.data.roomId; // 방 ID 가져오기
                        navigate(`/waiting?roomId=${roomId}&nickname=${nickname}&isHost=true`); // 방 대기 화면으로 이동
                    }
                }
            }
        } catch (error) {
            console.error('Error saving profile:', error); // 에러 로그 출력
            setMessage(language === 'ko' ? '프로필 저장에 실패했습니다. 다시 시도해 주세요.' : 'Failed to save profile. Please try again.');
        }
    };
    

    return (
        <L.LoginContainer>
            <L.Form onSubmit={handleSubmit}>
                <L.Title>{language === 'ko' ? '프로필을 만들어주세요' : 'Create Your Profile'}</L.Title>
                
                <L.Footer>
                    <button onClick={handlePrev}>
                        <img className='Btnimg' src={PrevBtn} alt="Previous" />
                    </button>
                    <L.Profile src={profile[currentP].src} alt={profile[currentP].name} />
                    <button onClick={handleNext}>
                        <img className='Btnimg' src={NextBtn} alt="Next" />
                    </button>
                </L.Footer>

                <L.Input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder={language === 'ko' ? '닉네임을 입력해주세요.' : 'Enter your nickname.'}
                />

                {/* 역할 선택 라디오 버튼 추가 */}
                <div>
                    {roles.map(role => (
                        <label key={role}>
                            <input
                                type="radio"
                                value={role}
                                checked={selectedRole === role}
                                onChange={(e) => setSelectedRole(e.target.value)}
                            />
                            {role}
                        </label>
                    ))}
                </div>

                <L.Button type="submit">
                    <img src={StartIcon} alt="다시 아이콘" />
                    {isJoining ? (language === 'ko' ? '참가하기' : 'Join Room') : (language === 'ko' ? '방 만들기' : 'Create Room')}
                </L.Button>
            </L.Form>
            {message && <L.Message>{message}</L.Message>}
        </L.LoginContainer>
    );
};

export default Login;
