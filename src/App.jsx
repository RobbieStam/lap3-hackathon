import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.Home />}/>
        <Route path="/superheros" element={<Pages.Home />}/>
        <Route path="/search" element={<Pages.Home />}/>
      </Route>
    </Routes>
  )
}

export default App
