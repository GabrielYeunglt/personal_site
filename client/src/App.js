import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import WorkExp from './pages/WorkExp';
import Contact from './pages/Academic';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/academic" element={<Contact />} />
          <Route path="/work" element={<WorkExp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
