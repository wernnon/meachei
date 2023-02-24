import React from 'react'
import Botao from '../../Componentes/Botao';
import Imagem from '../../Componentes/Imagem';
import Insert from '../../Componentes/Insert';
import Inferior from '../../Componentes/Inferior';
export default function Login() {
  return (
    <div>
      <Imagem 
      name='https://picsum.photos/600/600'/>
      <Insert holder='E-mail'/>
      <Insert holder='Senha'/>
      <Botao botao='Entrar'/>
      <Inferior texto1='Não é cadastrado?'
      texto2='Toque aqui para criar sua conta' />
    </div>
  )
}
