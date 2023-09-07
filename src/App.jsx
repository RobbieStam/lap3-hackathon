import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Page from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Page.Home />} />
        <Route path='/superhero' element={<Page.Superhero />} />
      </Route>
    </Routes>
  )
}

export default App
