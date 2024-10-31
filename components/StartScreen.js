import Image from 'next/image';
import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className='flex flex-col w-full h-full items-center pb-[30px] justify-between'>
      <div className=' flex flex-col items-center '>
        <Image src="/logo.png" alt="Quiz app logo" width='50' height='50' />
        <h1 className=' mt-3 font-serif text-2xl font-bold text-purple-900'>Welcome to the Quiz</h1>
      </div>
      <button className=' font-serif py-[10px] w-[75%] max-w-[300px] rounded-xl text-white bg-red-500 ' onClick={onStart}>Start Quiz</button>
    </div>
  );
};

export default StartScreen;
