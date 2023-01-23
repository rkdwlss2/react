import React, { useState } from 'react';
import './App.css';

function App() {
  // let list = [1, 2, 3];
  const [num, setNum] = useState(5);
  console.log(`App 실행됨`);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  //다운로드 받음
  const [users, setUsers] = useState(sample);

  const download = () => {
    // const a = sample.concat({ id: 5, name: '조자룡' });
    // console.log(sample);
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1 key={u.id}>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
