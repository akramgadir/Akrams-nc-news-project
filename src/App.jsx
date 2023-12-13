import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Topics from './components/Topics';
import Topic from './components/Topic';
import Articles from './components/Articles';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <div id="content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Topics" element={<Topics />} />
          <Route path="/Topics/:topic" element={<Topic />} />
          <Route path="/Article/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
