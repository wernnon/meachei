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
      <Insert  texto='Senha' />
      <Insert  texto="Data de Nascimento" holder="__/__/____"/>
      <Insert  texto="Etnia" />
      <Insert  texto="Telefone" holder="(  )_____-____" />
      <Botao   botao="Cadastrar"/>
      <Inferior texto1="Precisa de ajuda?"
      texto2="Envie sua duvida"/>
    </div>
  )
}