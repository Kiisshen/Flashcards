import React, { useState, useEffect } from 'react';
import './Quiz.css';
import data from './basicwordsquizz.json';
import FlashCard from './flashCard';

function Quiz() {
  const [messages, setMessages] = useState([]);
  const [currentCard, setCard] = useState(0);
  const quiz = data

  for (let i = 0; i < quiz.quiz.length; i++) {
    useEffect(() => {
      setMessages((mess) => [
        ...mess,
        <FlashCard
          key={quiz.quiz[i].key}
          wordEng={quiz.quiz[i].wordEng}
          wordFi={quiz.quiz[i].wordFi}
          descpEng={quiz.quiz[i].descpEng}
          descpFi={quiz.quiz[i].descpFi}
        />
      ]);
    }, []);
  } 

return (
    <>
      <div className="app">
        <h1>Learn Londonese</h1>
        <p>With greatarna flip carderna!</p>
        <div className="cardContainer">
          <button
            id={currentCard === 0 ? "noMoreCards" : "moreCards"}
            className="scrollLeft"
            onClick={() => {
              currentCard > 0 ? setCard(currentCard - 1):setCard(currentCard);
            }}
          >
            <h1>{"<"}</h1>
          </button>
          {messages[currentCard]}
          <button
            id={currentCard === messages.length - 1 ? "noMoreCards" : "moreCards"}
            className="scrollRight"
            onClick={() => {
              currentCard < messages.length - 1 ? setCard(currentCard + 1):setCard(currentCard);
            }}
          >
            <h1>{">"}</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default Quiz;
