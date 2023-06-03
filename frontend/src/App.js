import React, { useState, useEffect } from 'react';
import logo from './InkFlow Logo.svg';
import './App.css';

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    let timeoutId;

    function handleMouseEnter() {
      clearTimeout(timeoutId);
      setShowNavBar(true);
    }

    function handleMouseLeave() {
      timeoutId = setTimeout(() => {
        setShowNavBar(false);
      }, 300);
    }

    function handleMouseMove(event) {
      const { clientX } = event;
      if (clientX <= 50) {
        handleMouseEnter();
      }
    }

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      {showNavBar && (
        <nav className="vertical-nav">
          <div className="logo">
            <a href="https://example.com">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <ul className="navigation">
            <li><a href="https://example.com">Technology</a></li>
            <li><a href="https://example.com">Food</a></li>
            <li><a href="https://example.com">Health</a></li>
            <li><a href="https://example.com">Finance</a></li>
            <li><a href="https://example.com">Arts</a></li>
          </ul>
          <div className="user-actions">
            <a href="https://example.com">Login</a>
            <a href="https://example.com">Sign Up</a>
          </div>
        </nav>
      )}
      {/* Rest of your app content */}
    </div>
  );
}

export default App;
