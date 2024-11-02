// Recommendation.js
import React from 'react';
import MainHeader from '@/components/user/MainHeader';
import * as H from '@/styles/HomeStyle';
import TodayRecommend from '@/components/TodayRecommend';
import { useLocation } from 'react-router-dom';

const Recommendation = () => {
    const location = useLocation();
    const { nickname } = location.state || {};

    return (
        <>
            <H.Home>
                <H.Tab>
                    <MainHeader />
                    <H.RowBox>
                        <TodayRecommend />
                    </H.RowBox>
                </H.Tab>
            </H.Home>
        </>
    );
};

export default Recommendation;
