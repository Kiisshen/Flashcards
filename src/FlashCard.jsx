import React from 'react'
import { useState } from 'react'
import './FlashCard.css'

function FlashCard({wordEng, wordFi, descpEng, descpFi}) {
    const [doFlip, setFlip] = useState(true)
    return (
        <>
            <div className={doFlip ? "cardEng":"cardFi"} onClick={() => {
                setFlip(flip => !flip)
            }}>
            <h1>{doFlip ? wordEng:wordFi}</h1>
            <p>{doFlip ? descpEng:descpFi}</p>
            </div>
        </>
    )
}

export default FlashCard
