import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Categories from './components/Categories'
import Articles from './components/Articles'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>
    <Header/>
    <NavBar/>
    <Routes>
      <Route path="/" element = {<Home />} /> 
      <Route path="/Categories" element = {<Categories />} /> 
      <Route path="/Articles" element = {<Articles />} /> 
    </Routes>
    </>
  )
}

export default App
