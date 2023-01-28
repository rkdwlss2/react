import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    //다운로드 받고 (통신)
    let downloadData = 5;
    setData(downloadData);
  };

  // 실행시점: (1) App() 함수가 최초 실행될때
  // (2) 상태 변수가 변경될때 또 실행됨
  useEffect(() => {
    console.log('App() useEffect 실행됨');
    download();
  }, [search]);
  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색
      </button>
      <h1>데이터 :{data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
