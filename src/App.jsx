import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Topics from './components/Topics'
import Articles from './components/Articles'
import Article from './components/Article'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <NavBar/>
    <Routes>
      <Route path="/Home" element = {<Home />} /> 
      <Route path="/Topics" element = {<Topics />} /> 
      <Route path="/Articles" element = {<Articles />} /> 
      <Route path="/Article" element = {<Article />} /> 
      <Route path="/Footer" element = {<Footer />} /> 
    </Routes>
    </>
  )
}

export default App
