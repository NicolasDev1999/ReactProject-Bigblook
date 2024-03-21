import React, { useState } from 'react';

export const ComponenteBoton = () => {
  const [liked, setLiked] = useState(true);
  const [counter, setCounter] = useState(0);

  const toggleLike = () => {
    {liked ? setCounter(counter+ 1) : setCounter(counter - 1)}
    setLiked(!liked);
  };
  return (
    <div >
      <button id="butonLiked" onClick={toggleLike}>
        {liked ? 'Me gusta' : 'No me gusta'}
      </button>
      <p class='count'>Me gusta: {counter}</p>
    </div>
  );
  return (
    <button id='butonLiked'></button>
  )
}
