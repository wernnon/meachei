import React from 'react'
import { Link } from 'react-router-dom'
import './Inferior.css'
export default function Inferior(props) {
  return (
    <div className="inferior">
      <div className='conteudo'>
       {props.texto1}
      </div>
      <div className='conteudo'>
       <Link to={props.link}>
       {props.texto2}
       </Link>
      </div>
    </div>

    
  )
}
