import React, { useState } from 'react';
import './App.css';
import Sub from './Sub';

function App() {
  // let list = [1, 2, 3];
  const [number, setNumber] = useState(1); // react 안에 hooks 라이브러리 상태값이 됨
  //let number = 1;
  const add = () => {
    setNumber(number + 1); // 리엑트 한테 number값 변경할께 라고 요청
    console.log('add', number);
  };

  return (
    <div>
      <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>더하기</button>
        <Sub />
      </div>
    </div>
  );
}

export default App;
