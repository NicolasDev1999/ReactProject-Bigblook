import React, { useState } from 'react';

export const ComponenteBoton = () => {
  const [liked, setLiked] = useState(true);
  const [counter, setCounter] = useState(0);

  const toggleLike = () => {
    const newCounter = liked ? counter + 1 : counter - 1;
    setCounter(newCounter);
    setLiked(!liked);
  };

  return (
    <div>
      <button id="butonLiked" onClick={toggleLike}>
        {liked ? 'Me gusta' : 'No me gusta'}
      </button>
      <p className='count'>Me gusta: {counter}</p>
    </div>
  );
};
