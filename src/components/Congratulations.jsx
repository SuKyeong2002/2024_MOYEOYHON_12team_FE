// Congratulations.js
import React, { useEffect } from 'react';
import * as C from '@/styles/CongratulationsStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import CongratulationsIcon from "../assets/icons/Congratulations.svg";

const Congratulations = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { nickname } = location.state || {};

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/recommendation', { state: { nickname } });
        }, 5000); 

        return () => clearTimeout(timer); 
    }, [navigate, nickname]);

    return (
        <C.LoginContainer>
            <C.CongratulationsContainer>
                <C.Title>축하합니다!</C.Title>
                
                <C.FireIconWrapper>
                   {/* <img src={CongratulationsIcon} alt="Congratulations Icon" /> */ }
                </C.FireIconWrapper>
                
                <C.Message>{nickname ? `${nickname}` : '님'}</C.Message>
            </C.CongratulationsContainer>
        </C.LoginContainer>
    );
};

export default Congratulations;
