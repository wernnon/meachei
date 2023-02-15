import React from 'react';
import './Botao.css';
export default function Botao(props) {
  return (
    <button className='botao' id='boton'>
      {props.botao}
    </button>
  )
}
