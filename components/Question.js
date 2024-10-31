import React, { useState } from 'react';
import Image from 'next/image';
import SingleQuestion from './SingleQuestion';

const Question = ({ data, onAnswerChange, currentAnswer }) => {
  const { question, options, imageUrl, isMultiSelect } = data;
  const [checkedState, setCheckedState] = useState(false);

  const handleOptionChange = (e) => {
    if (isMultiSelect) {
      const selectedOptions = currentAnswer || [];
      if (e.target.checked) {
        onAnswerChange(data.id - 1, true, [...selectedOptions, e.target.value]);
      } else {
        onAnswerChange(data.id - 1, true, selectedOptions.filter(opt => opt !== e.target.value));
      }
    } else {
      onAnswerChange(data.id - 1, false, e.target.value);
    }
  };

  return (
    <div className=' flex flex-col items-start w-[88%]'>
      <p className=' text-lg font-bold font-serif ' >{question}</p>
      {imageUrl && <Image className=' py-2 my-0 mx-auto ' width="150" height="150" src={imageUrl} alt="question" />}
      {options.map((option, index) => (
        <SingleQuestion key={index} checkedState={checkedState} isMultiSelect={isMultiSelect} data={data} currentAnswer={currentAnswer} option={option} handleOptionChange={handleOptionChange} />
      ))}
    </div>
  );
};

export default Question;
