import React, { useState, useEffect } from 'react';
import * as P from '@/styles/PlayersStyle';
import P1 from '@/assets/profile_1.png';
import P2 from '@/assets/profile_2.png';
import P3 from '@/assets/profile_3.png';
import P4 from '@/assets/profile_4.png';

const PlayerList = ({ isHost }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // 서버로부터 현재 참가자 리스트를 받아오는 로직
        setPlayers([
            { name: '모락이 방장', isHost: true, src: P1 },
            { name: '배고픈 모락이', isHost: false, src: P2 },
            { name: '집 가고 싶은 모락이', isHost: false, src: P3 },
            { name: '행복한 모락이', isHost: false, src: P4 },
        ]);
    }, []);

    return (
        <P.Container>
            <P.Title>참가자 목록</P.Title>
            <P.List>
                {players.map((player, index) => (
                    <P.PlayerItem key={index}>
                        <img src={player.src} alt={`profile-${index + 1}`} />
                        <P.Name>{player.name}</P.Name>
                        {player.isHost && <P.HostBadge>⭐</P.HostBadge>}
                    </P.PlayerItem>
                ))}
            </P.List>
            <P.BottomDiv>
                <P.Title2>4/6</P.Title2>
            </P.BottomDiv>
            {isHost && <P.InviteButton>초대하기</P.InviteButton>}
        </P.Container>
    );
};

export default PlayerList;
