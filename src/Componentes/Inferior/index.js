import React from 'react'
import './Inferior.css'
export default function Inferior(props) {
  return (
    <div className="inferior">
      <div className='conteudo'>
       {props.texto1}
      </div>
      <div className='conteudo'>
       {props.texto2}
      </div>
    </div>

    
  )
}
