import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as B from "../styles/Bookmark";

const Bookmark = () => {
    const navigate = useNavigate();

    return (
        <B.Container>
            <B.Button type="button" onClick={() => navigate('/')}> 
                <B.StyledBox1>
                    <h3>M</h3>
                    <h3>O</h3>
                    <h3>Y</h3>
                    <h3>E</h3>
                    <h3>O</h3>
                </B.StyledBox1>
            </B.Button>

            <B.Button type="button" onClick={() => navigate('/game')}> 
                <B.StyledBox2>
                    <h3>모</h3>
                    <h3>락</h3>
                    <h3>모</h3>
                    <h3>락</h3>
                </B.StyledBox2>
            </B.Button>
        </B.Container>
    );
};

export default Bookmark;
