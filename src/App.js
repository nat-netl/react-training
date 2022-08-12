import React, {useEffect, useMemo, useRef, useState, Navigate} from 'react'
import { BrowserRouter} from 'react-router-dom'
import AppRouter from './components.js/UI/AppRouter/AppRouter'
import Navbar from './components.js/UI/Navbar/Navbar'
import About from './pages/About'
import Error from './pages/Error'
import Posts from './pages/Posts'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter />      
    </BrowserRouter>
  )
}

export default App