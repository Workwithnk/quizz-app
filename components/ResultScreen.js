import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ResultScreen = ({ score, quizData, onRestart }) => {
  const correctCount = Math.floor(score / 100 * quizData.length);
  const incorrectCount = quizData.length - correctCount;

  return (
    <div className='w-full h-full bg-white flex flex-col max-w-[400px] shadow-lg pt-[70px] pb-[30px] rounded-tl-[20px] rounded-tr-[20px] justify-between items-center'>
      <div className=' w-[88%]'>
        <h2 className=' text-center font-serif font-bold'>Your Results</h2>
        <div className=' relative mt-3 border border-gray-300 mx-auto my-0 bg-white w-[100px] h-[100px] rounded-full shadow-xl flex justify-center items-center' >
          <p className=' font-bold font-serif text-xl'> {score}%</p>
          <div className=' w-[100px] absolute top-[-1px]'>
            <CircularProgressbar styles={buildStyles({ pathColor: '#32e432', trailColor: '#f3f4f6' })} value={score} maxValue={100} />
          </div>
        </div>
        <p className=' my-3 shadow-sm w-full flex items-center rounded-xl bg-green-200 py-3 px-2'> <span className=' mr-2 block w-3 h-3 rounded-full bg-green-500'></span> <span className=' font-bold mr-2'>{correctCount}</span> Correct </p>
        <p className=' w-full shadow-sm flex items-center rounded-xl bg-red-200 py-3 px-2'> <span className=' mr-2 block w-3 h-3 rounded-full bg-red-500'></span> <span className=' font-bold mr-2'>{incorrectCount}</span> Incorrect </p>
      </div>
      <button className='w-[88%] font-serif py-[10px] rounded-full text-white bg-red-500' onClick={onRestart}>Start Again</button>
    </div>
  );
};

export default ResultScreen;
