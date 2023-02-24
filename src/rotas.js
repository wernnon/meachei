import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}
