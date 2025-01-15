import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div>
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
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
 );
}

export default Button;