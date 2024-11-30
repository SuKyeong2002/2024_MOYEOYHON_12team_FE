import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as He from '@/styles/HeaderStyle';
import Logo from '@/assets/LOGO.png';
import HomeIcon from '@/assets/Home.png'; 

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <He.Header>
            <He.HomeBtn onClick={handleHomeClick}>
                <img src={HomeIcon} alt="Home" />
                홈
            </He.HomeBtn>
            <He.Logo src={Logo} alt="Logo" />
            <div id='empty' />
        </He.Header>
    );
}

export default Header;
