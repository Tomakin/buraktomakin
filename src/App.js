import React, { useState } from 'react';
import Question from './Question';
import './App.css';

const questions = [
  // {
  //   question: 'Birbirimizi aramak istediğimizde attığımız emoji (yazılı olarak) nedir?',
  //   answer: 'Arı',
  // },
  // {
  //   question: 'Son gittiğimiz ve bolca ıslandığımız konser kimin konseriydi',
  //   answer: 'Interstellar',
  // },
  {
    question: 'Bil bakalım nereliyim?',
    answer: 'Ordu',
    alert: 'Bildun oni'
  },
  {
    question: 'Hangi mesleği yapıyorum? [Yazılımcı, Müzisyen]',
    answer: 'Yazılımcı',
    alert: 'if(cevap == "yazılımcı") return true;'
  },
  {
    question: 'Vücudumda kaç tane dövme var?(sayıyla)',
    answer: '0',
    alert: 'İlkini beraber yaptıralım mı :)'
  },
  {
    question: 'En sevdiğim kadın ismi ne olabilir?',
    answer: 'Merve',
    alert: 'Aksi düşünülemezdi. Allah çarpar. O dokunmasa da Merve kesin çarpar.'
  },
  // Diğer soruları buraya ekleyebilirsin.
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [message, setMessage] = useState("");
  const [lastQues, setLastQues] = useState(false);

  const handleAnswer = (userAnswer) => {
    const correctAnswer = questions[currentQuestion].answer;
    const alert = questions[currentQuestion].alert;
    if (userAnswer.trim().toLocaleLowerCase("tr") === correctAnswer.toLocaleLowerCase("tr")) {
      setIsCorrect(true);
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
        <Question
          question={questions[currentQuestion].question}
          onAnswer={handleAnswer}
          message={message}
          isCorrect={isCorrect}
          setIsCorrect={setIsCorrect}
          lastQues = {lastQues}
        />
      ) : (
        <h2>Tüm sorulara cevap verdiniz!</h2>
      )}
    </div>
  );
};

export default App;