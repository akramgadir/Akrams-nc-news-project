import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Categories from './components/Categories'
import Articles from './components/Articles'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <NavBar/>
    <Routes>
      <Route path="/" element = {<Home />} /> 
      <Route path="/Categories" element = {<Categories />} /> 
      <Route path="/Articles" element = {<Articles />} /> 
      <Route path="/Footer" element = {<Footer />} /> 
    </Routes>
    </>
  )
}

export default App
