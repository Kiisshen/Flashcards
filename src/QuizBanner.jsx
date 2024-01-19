import React from 'react'
import { useState } from 'react'
import './QuizBanner.css'

function QuizBanner() {
    return (
        <>
            <div onClick={ event =>  window.location.href='./quiz.html'} className='banner'>
                <h1>Title</h1>
                <p>Description</p>
            </div>
        </>
    )
}

export default QuizBanner
