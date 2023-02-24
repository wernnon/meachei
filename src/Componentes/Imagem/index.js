import React from 'react';
import './Imagem.css';

export default function Imagem(props) {
  return (
    <div className='container'>
      <img className='foto' src={props.name} />
    </div>
  )
}
