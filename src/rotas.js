import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
import Home from './Paginas/Home';
export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/main' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
