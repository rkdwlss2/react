import React from 'react';
import './App.css';

// 1. 실행 과정 (index.html) - SPA임
// 2. JSX 문법

// (1) return시에 하나의 dom만 리턴할 수 있다.
// (2) 변수 선은은 let 혹은 const로만 해야함.
// (3) if 사용 불가능 -> 3항 연산자 가능
// (4) 조건부 랜더링
// (5) css디자인
//   - 내부에 적는 방버
//   - 외부 파일에 적는 방법
//   - 라이브러리 사용

let a = 10;
const b = 20;
function App() {
  let c;
  // let d = undefined;
  console.log(1, c);

  const mystyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={mystyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">해딩테그 {b === 20 && '20입니다.'}</h1>
      <hr />
    </div>
  );
}

export default App;
