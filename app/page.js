'use client';

import React, { useState, useEffect } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import ResultScreen from '@/components/ResultScreen';
import { fetchQuizData } from '@/utils/api';
import Image from 'next/image';

function Home() {
  const [step, setStep] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuizData = async () => {
      const data = await fetchQuizData(); //making API Call
      setQuizData(data);
      setLoading(false);
    };
    loadQuizData();
  }, []);

  const handleStartQuiz = () => setStep(1);

  const handleSubmitQuiz = (correctCount) => {
    const percentage = (correctCount / quizData.length) * 100;
    setScore(percentage);
    setStep(quizData.length + 1);
  };

  const handleRestartQuiz = () => {
    setStep(1);
    setScore(0);
    setAnswers([]);
  };

  return (
    <section className=" pt-[100px] bg-gradient-to-t from-purple-700 h-screen to-white flex justify-center items-start">
      <div className='flex flex-col items-center w-full h-full'>
        {loading && <div> <Image className=' mb-3' src="/logo.png" alt="Quiz app logo" width='50' height='50' />
          <p className=' font-sans '> Loading... </p>
        </div>}
        {!loading && step === 0 && <StartScreen onStart={handleStartQuiz} />}
        {!loading && step > 0 && step <= quizData.length && (
          <QuizScreen
            quizData={quizData}
            step={step}
            setStep={setStep}
            answers={answers}
            setAnswers={setAnswers}
            onSubmitQuiz={handleSubmitQuiz}
          />
        )}
        {!loading && step === quizData.length + 1 && <ResultScreen score={score} quizData={quizData} onRestart={handleRestartQuiz} />}
      </div>
    </section>
  );
}

export default Home;