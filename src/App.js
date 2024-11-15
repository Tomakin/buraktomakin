import React, { useState } from 'react';
import Question from './Question';
import ShakingBox from './ShakingBox.js';
import './App.css';

const questions = [
  
  {
    question: '"Ad Soyad" kombinasyonumu biliyorsan yaz',
    answer: 'Burak Tomakin',
    alert: 'Demek tanışıyoruz :)'
  },
  {
    question: 'Bil bakalım nereliyim?',
    answer: 'Ordu',
    alert: 'Uiiy hemşerum bildun oni'
  },
  {
    question: 'Hangi mesleği yapıyorum? [Yazılımcı, Müzisyen]',
    answer: 'Yazılımcı',
    alert: 'if(cevap == "yazılımcı") return true;'
  },
  {
    question: 'Medeni Durumum?[Evli, Başı bağlı]',
    answer: 'Başı bağlı',
    alert: 'Şimdilik...'
  },
  {
    question: 'O\'nu aramak istediğimde attığım emoji nedir?(yazıyla)',
    answer: 'Arı',
    alert: 'Merve??? Is that you??'
  },
  {
    question: 'Çalmayı en sevdiğim müzik aleti?',
    answer: 'Gitar',
    alert: 'En sevdiğim ses ise seninki cimcime :)'
  },
  {
    question: 'Vücudumda kaç tane dövme var?(sayıyla)',
    answer: '0',
    alert: 'İlkini beraber yaptıralım mı güzellik :)'
  },
  {
    question: 'Skaler büyüklüklere bir örnek ver?',
    answer: 'Kamyonet',
    alert: 'Türetirsek de kamyonetler mi oluyordu hocam? 🤔'
  },
  {
    question: 'Kamyonetti bisikletti derken yine burada fazla zaman harcadık. Rahat bi\' yerlere geçelim mi?',
    answer: 'evet',
    alert: 'Harikasın'
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [message, setMessage] = useState("Soru-Cevap'a Hoşgeldin");
  const [lastQues, setLastQues] = useState(false);
  const [shake, setShake] = useState(false);


  const handleCorrectAnswer = () => {
    setShake(true);
    setTimeout(() => setShake(false), 1000);
  };

  const handleAnswer = (userAnswer) => {
    const correctAnswer = questions[currentQuestion].answer;
    const alert = questions[currentQuestion].alert;
    if (userAnswer.trim().toLocaleLowerCase("tr") === correctAnswer.toLocaleLowerCase("tr") || userAnswer.trim().toLocaleLowerCase("tr") === "geç".toLocaleLowerCase("tr")) {
      setIsCorrect(true);
      handleCorrectAnswer();
      setMessage(alert);
      setAnswers([...answers, userAnswer]);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setLastQues(true);
      }
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="question-container">
      {currentQuestion < questions.length ? (
        <div>
          <Question
            question={questions[currentQuestion].question}
            onAnswer={handleAnswer}
            message={message}
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
            lastQues={lastQues}
          />
          <ShakingBox
            shake={shake}
            lastQues = {lastQues}
          />
        </div>

      ) : (
        <h2>Tüm sorulara cevap verdiniz!</h2>
      )}
    </div>
  );
};

export default App;