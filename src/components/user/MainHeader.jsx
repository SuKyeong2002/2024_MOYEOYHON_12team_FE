import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as MHe from '@/styles/MainHeaderStyle';
import Logo from '@/assets/LOGO.png';

const MainHeader = ({ language, setLanguage }) => {
    const navigate = useNavigate();
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
      };

    return (
        <MHe.Header>
            <MHe.Logo src={Logo} alt="Logo" />
            <MHe.StyledSelect value={language} onChange={handleLanguageChange}>
                <option value="ko">한국어</option>
                <option value="en">English</option>
            </MHe.StyledSelect>
            <div id='empty' />
        </MHe.Header>
    );
}

export default MainHeader;
