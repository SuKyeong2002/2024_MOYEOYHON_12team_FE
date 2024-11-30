import React, { useEffect, useState } from 'react';
import * as T from '@/styles/TodayRecommend';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from "../assets/icons/Home.svg";
import StartIcon from "../assets/icons/Start.svg";
import ShareIcon from "../assets/icons/Share.svg";

const TodayRecommend = () => {
    const realUrl = "https://2024-moyeoyhon-12team-fe.vercel.app/";

    const shareContent = {
        title: '오늘의 추천',
        text: '아메리카노, 빵, 케익 등 오늘의 디저트를 확인해보세요!',
        url: realUrl
    };

    const share = () => {
        if (navigator.share) {
            navigator.share(shareContent)
                .then(() => console.log('공유 성공!'))
                .catch((error) => console.error('공유 실패:', error));
        } else {
            alert('이 기기에서는 공유 기능을 지원하지 않습니다.');
        }
    };

    const location = useLocation();
    const navigate = useNavigate();
    const { nickname } = location.state || {};
    const [recommendations, setRecommendations] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/recommendation', { state: { nickname } });
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate, nickname]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch('~/gpt/today/recommend', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status: "success",
                        message: "성공적으로 조회했습니다.",
                        data: {}
                    }),
                });

                if (!response.ok) {
                    throw new Error('네트워크 응답이 정상적이지 않습니다.');
                }

                const result = await response.json();
                setRecommendations(result.data.response);
            } catch (error) {
                console.error('가져오기 오류:', error);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <T.LoginContainer>
            <T.TodayRecommendContainer>
                <T.Title>오늘의 추천</T.Title>
                <T.Divider />
                <T.Message>{nickname ? `${nickname}님` : '님, 이런 영화는 어떠세요?'}</T.Message>
            </T.TodayRecommendContainer>
            <T.RecommendationsContainer>
                {recommendations.split('\n').map((item, index) => (
                    <T.RecommendationItem key={index}>
                        {item}
                    </T.RecommendationItem>
                ))}
            </T.RecommendationsContainer>
            <T.ButtonContainer>
                <T.Button type="button" onClick={() => navigate('/')}>
                    <img src={HomeIcon} alt="홈 아이콘" /> 홈
                </T.Button>
                <T.Button type="button" onClick={() => navigate('/game')}>
                    <img src={StartIcon} alt="다시 아이콘" /> 다시
                </T.Button>
                <T.Button type="button" onClick={share}>
                    <img src={ShareIcon} alt="공유 아이콘" /> 공유
                </T.Button>
            </T.ButtonContainer>
        </T.LoginContainer>
    );
};

export default TodayRecommend;
