import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Game from '@/pages/Game';
import Recommendation from './pages/Recommendation';
import Confirm from './pages/Confirm';


const AppRouter = ({ }) => {
    
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/game' element={<Game/>} />
            <Route path='/recommendation' element={<Recommendation/>} />
            <Route path='/confirm' element={<Confirm />} />
        </Routes>
    )
};

export default AppRouter;