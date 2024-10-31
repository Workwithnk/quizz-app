import React from 'react'

function SingleQuestion({ isMultiSelect, data, currentAnswer, option, handleOptionChange }) {
  return (
    <div className={`w-full shadow-sm flex items-center justify-start bg-gray-100 my-2 p-2 rounded-xl `}>
      <input
        className=' w-[20px] h-[20px] bg-green-500 border-2 border-green-500 checked:bg-green-500 checked:border-green-500 focus:outline-none'
        type={isMultiSelect ? 'checkbox' : 'radio'}
        name={`question-${data.id}`}
        value={option}
        checked={isMultiSelect ? (Array.isArray(currentAnswer) && currentAnswer.includes(option)) : currentAnswer === option}
        onChange={(e) => { handleOptionChange(e); }}
      />
      <label className=' ml-2'>{option}</label>
    </div>
  )
}

export default SingleQuestion