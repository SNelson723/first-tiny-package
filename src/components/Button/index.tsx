import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div className='bg-slate-800 text-white'>
      <button 
      query-id="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
      onClick={() => {
        switch (count) {
          case 0:
            setMessage('Click me again!');
            setCount(count + 1);
            break;
          case 1:
            setMessage('You click so well!');
            setCount(count + 1);
            break;
          case 2:
            setMessage('Woah, click too much?');
            setCount(count + 1);
            break;
          default:
            setMessage('Get a life...');
            break;
        }
      }}>
        {count < 3 ? 'Click me' : 'We are done here...'}
      </button>
      <div query-id="message">{message}</div>
    </div>
 );
}

export default Button;