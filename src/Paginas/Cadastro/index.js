import React from 'react'
import Botao from '../../Componentes/Botao';
import Imagem from '../../Componentes/Imagem';
import Insert from '../../Componentes/Insert';
import Inferior from '../../Componentes/Inferior';
export default function Cadastro() {
  return (
    <div>
      <Imagem 
      name='https://picsum.photos/600/600'/>
      <Insert  texto='nome'/>
      <Insert  texto='E-mail' holder='usuario@gmail.com' />
      <Insert  texto='senha' mask="***********"/>
    </div>
  )
}