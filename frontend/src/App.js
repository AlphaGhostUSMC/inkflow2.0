import React from 'react';
import './App.css';
import Post from './components/post';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import { UserContextProvider } from './components/userContext';
import CreatePost from './pages/createPost';
import PostPage from './pages/postPage';

function App() {
  return (
    <UserContextProvider>
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
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
