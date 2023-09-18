// Write your react code here
import React, { useState } from "react";
import "./Quiz.css"; // Import your CSS file

function App() {
  
  return (
    <div className="app-container">
      <h1>Quiz</h1>
      {!quizCompleted ? (
        <div className="question-container">
          <p>{questions[currentQuestionIndex].question}</p>
          <ul className="options-list">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`option ${
                  questions[currentQuestionIndex].userAnswer === index
                    ? "selected"
                    : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="result-container">
          <h2>Completed!</h2>
          <p>
            Your score: {score}/{questions.length}
          </p>
          <ul className="answers-summary">
            {questions.map((q, index) => (
              <li
                key={index}
                className={`answer ${
                  q.userAnswer === q.correctAnswer ? "correct" : "incorrect"
                }`}
              >
                Question {index + 1}:{" "}
                {q.userAnswer === q.correctAnswer ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
