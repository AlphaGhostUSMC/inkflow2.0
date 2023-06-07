import { Link } from 'react-router-dom';
import logo from '../InkFlow Logo.svg';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './userContext';

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4008/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4008/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="navigation">
          <li><a href="#">Technology</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Health</a></li>
          <li><a href="#">Finance</a></li>
          <li><a href="#">Arts</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <a href="#" onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
}