import React from 'react';
import './Botao.css';
export default function Botao(props) {
  return (
    <div>
      <button className='botao' id='boton'>
        {props.botao}
      </button>
    </div>
  )
}
