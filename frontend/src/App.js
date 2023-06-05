import React from 'react';
import './App.css';
import Post from './components/post';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route index element={
          <Post />
        } />
        <Route path="/login" element={
          <LoginPage />
        } />
        <Route path="/signup" element={
          <RegisterPage />
        } />
      </Route>
    </Routes>
  );
}

export default App;
