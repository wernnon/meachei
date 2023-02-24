import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Paginas/Login'
export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}
