import React from 'react';
import './App.css';

function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map((n) => (
          // eslint-disable-next-line react/jsx-key
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
