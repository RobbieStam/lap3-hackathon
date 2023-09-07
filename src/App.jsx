import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.Home />}/>
        <Route path="/superheros" element={<Pages.SuperHeros />}/>
        <Route path="/superheros/:id" element={<Pages.SuperHero />}/>
        <Route path="/search" element={<Pages.Search />}/>
        <Route path='*' element={<Pages.NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App
