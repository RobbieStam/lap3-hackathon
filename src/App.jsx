import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
      
      </Route>
    </Routes>
  )
}

export default App
