import React, { useState, useEffect } from 'react';
import './App.css'
import QuizBanner from './QuizBanner';

function App() {
    return (
        <>
            <h1>Welcome to quiz learning hommeli:Dd</h1>
            <p>Here you can learnigns many englandeses!(london!)<br/>canned go take quiz by clicked the banneres abovelow!:dD</p>
            <div className='bannerContainer'>
                <QuizBanner />
                <QuizBanner />
                <QuizBanner />
                <QuizBanner />
            </div>
        </>
    )
}
export default App;
