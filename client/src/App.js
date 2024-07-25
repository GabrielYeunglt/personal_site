import React, { useEffect, useState } from 'react';
import './App.css';
import Introduction from './components/Introduction';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Personal Introduction</h1>
        <p>{message}</p>
        <Introduction />
      </header>
    </div>
  );
}

export default App;
