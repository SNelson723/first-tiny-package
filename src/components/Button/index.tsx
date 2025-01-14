import { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
    onClick={() => {
      switch (count) {
        case 0:
          alert('Click me again!');
          setCount(count + 1);
          break;
        case 1:
          alert('You click so well!');
          setCount(count + 1);
          break;
        case 2:
          alert('Woah, click too much?');
          setCount(count + 1);
          break;
        default:
          alert('Get a life...');
          break;
      }
    }}>
      {count < 2 ? 'Click me' : 'We are done here...'}
    </button>
 );
}

export default Button;