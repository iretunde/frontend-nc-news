import './App.css'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MainPage from './components/MainPage';
import Topics from './components/Topics';
import Articles from './components/Articles';
import SpecificArticle from './components/SpecificArticle';


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/main" element = {<MainPage />} />
          <Route path="/articles" element = {<Articles/>} />
          <Route path="/articles/:article_id" element = {<SpecificArticle/>} />
          <Route path="/topics" element = {<Topics/>} />
        </Routes>
      </div>
      

    </>
  )
}

export default App
