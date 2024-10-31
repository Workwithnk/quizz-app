import React, { useState } from 'react';
import Question from './Question';

const QuizScreen = ({ quizData, step, setStep, answers, setAnswers, onSubmitQuiz }) => {
  const handleAnswerChange = (questionId, isMultiSelect, selectedAnswer) => {
    const updatedAnswers = [...answers];
    if (isMultiSelect) {
      updatedAnswers[questionId] = selectedAnswer;
    } else {
      updatedAnswers[questionId] = selectedAnswer;
    }
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (step < quizData.length) {
      setStep(step + 1);
    } else {
      const correctCount = quizData.reduce((count, question, index) => {
        const correctAnswer = question.answer;
        const userAnswer = answers[index];
        return count + (JSON.stringify(correctAnswer) === JSON.stringify(userAnswer) ? 1 : 0);
      }, 0);
      onSubmitQuiz(correctCount);
    }
  };

  return (
    <div className=' relative w-full h-full bg-white flex flex-col max-w-[400px] shadow-lg pt-[70px] pb-[30px] rounded-tl-[20px] rounded-tr-[20px] justify-between items-center '>

      <h2 className=' w-[100px] h-[100px] absolute bg-white top-[-53px] flex justify-center items-center rounded-full' >
        <p className=' text-base text-gray-400'><span className=' text-black font-sans text-3xl'> {step}</span>/{quizData.length}</p>
      </h2>
      <Question
        data={quizData[step - 1]}
        onAnswerChange={handleAnswerChange}
        currentAnswer={answers[step - 1]}
      />
      <button className=' w-[88%] font-serif py-[10px] rounded-full text-white bg-red-500' onClick={handleNext}>
        {step === quizData.length ? 'Submit Quiz' : 'Next'}
      </button>
    </div>
  );
};

export default QuizScreen;
