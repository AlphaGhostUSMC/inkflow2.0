import React from 'react';
import logo from './InkFlow Logo.svg';
import './App.css';

function App() {
  return (
    <header>
      <div className="logo">
        <a href="https://example.com">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav>
        <ul className="navigation">
          <li><a href="https://example.com">Technology</a></li>
          <li><a href="https://example.com">Food</a></li>
          <li><a href="https://example.com">Health</a></li>
          <li><a href="https://example.com">Finance</a></li>
          <li><a href="https://example.com">Arts</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <a href="https://example.com">Login</a>
        <a href="https://example.com">Sign Up</a>
      </div>
    </header>
  );
}

export default App;
