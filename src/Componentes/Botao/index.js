import React from 'react';
import './Botao.css';
import { Link } from 'react-router-dom';
export default function Botao(props) {
  return (
    <div className='outer'>
      <button className='botao' id='boton'>
        <Link className='link' to={props.link}>
          {props.botao}
        </Link>
      </button>
    </div>
  )
}
