import React from 'react'
import './Icones.css';
export default function Icones(props) {
  return (
    <div>
        <div className="inferior">
            <div className='conteudo'>
                {props.icone}
            </div>
            <div className='conteudo'>
               {props.icone1}
            </div>
            <div className='conteudo'>
               {props.icone2}
            </div>
            <div className='conteudo'>
               {props.icone3}
            </div>
            <div className='conteudo'>
               {props.icone4}
            </div>
        </div>
    </div>
  )
}
