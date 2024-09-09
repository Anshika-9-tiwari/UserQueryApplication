import React from 'react'
import '../components/QueryResultForm.css'
import { useState } from 'react';
function QueryResult () {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const faqData = [
      {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
      {
        question: 'How do I get started with React?',
        answer: 'You can get started with React by installing it using npm or yarn, and then creating a new React project using a tool like create-react-app.',
      },
      {
        question: 'What is JSX ? also explain  ',
        answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
      },
      {
        question: 'How do I get started with React?',
        answer: 'You can get started with React by installing it using npm or yarn, and then creating a new React project using a tool like create-react-app.',
      },
      {
        question: 'What is JSX explain in short?',
        answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
      },
      {
        question: 'How do I get started with React.js?',
        answer: 'You can get started with React by installing it using npm or yarn, and then creating a new React project using a tool like create-react-app.',
      },
      {
        question: 'What is JSX?',
        answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
      },
      // Add more FAQ items here
    ];
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
        <>
            <div className="container">
               <div className='faq'>  
                  
                    <h1 className='mb-5 text-center' >Technical Responce</h1>
                       <div className='form-box'>   
                        <ul>
                           {faqData.map((item, index) => (
                           
                            <li key={index}>
                            <h2 onClick={() => handleToggle(index)}>
                                {item.question}
                                {activeIndex === index ? '' : ''}
                            </h2>
                            {activeIndex === index && (
                                <p>{item.answer}</p>
                            )}
                            </li>
                           
                           ))}
                        </ul>
                    </div>
                </div>
           </div>
       </>
    );
  };

export default QueryResult
