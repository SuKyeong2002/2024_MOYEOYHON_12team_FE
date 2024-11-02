import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Main from '@/pages/Main';
import Recommendation from './pages/Recommendation';


const AppRouter = ({ }) => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/main' element={<Main/>} />
            <Route path='/recommendation' element={<Recommendation/>} />
        </Routes>
    )
};

export default AppRouter;