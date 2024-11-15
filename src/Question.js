import React, { useState, useEffect } from 'react';

const Question = ({ question, onAnswer, lastQues: lastQuestion, message, isCorrect, setIsCorrect }) => {
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    if (isCorrect !== null) {
      setUserAnswer('');
    }
  }, [question]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(userAnswer);
  };

  return (
    <div>
      <h3>{question}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button type="submit">Cevapla</button>
      </form>
      {!lastQuestion && isCorrect === false && <p className="incorrect">Yanlış cevap, tekrar deneyin!</p>}
      {isCorrect === true && <p className="correct">{message}</p>}
      {lastQuestion && <div>
        <p>Benden bir ödül kazandın.🏆</p>
        <p>Ödülünü görmek ve devam etmek için: <a  href='https://mervedirin.com.tr'>Rahat bi' yer</a></p></div>}
    </div>
  );
};

export default Question;