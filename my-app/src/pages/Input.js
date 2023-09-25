import React, { useState } from 'react';

const Input = () => {
  const [txtValue, setTextValue] = useState(''); //const num = 0 이랑 같음 // {} <- 안의 ~~,set~~는 앞의 ~~의 값을 변경할수있게하는 값

  const onChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChange} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
