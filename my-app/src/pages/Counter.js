import React, { useState } from 'react';

const Counter = () => {
  const [num, setNumber] = useState(0); //const num = 0 이랑 같음 // {} <- 안의 ~~,set~~는 앞의 ~~의 값을 변경할수있게하는 값

  const increase = () => {
    setNumber(num + 1);
    //num = num + 1; 여거랑 같음
  };

  const decrease = () => {
    setNumber(num - 1);
  };

  return (
    <div>
      <button onClick={increase}>+1</button>
      {/* onClick 은 대문자 필수, ~~ {} 중괄호 필수, 안에 불러올 함수,값*/} ㅣ
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
