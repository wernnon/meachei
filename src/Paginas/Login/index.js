import React from 'react'
import Botao from '../../Componentes/Botao';
import Imagem from '../../Componentes/Imagem';
import Insert from '../../Componentes/Insert';
export default function Login() {
  return (
    <div>
      <Imagem 
      name='https://picsum.photos/600/600'/>
      <Insert holder='E-mail'/>
      <Insert holder='Senha'/>
      <Botao 
      botao='Entrar'/>

    </div>
  )
}
