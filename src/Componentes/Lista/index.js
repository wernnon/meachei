import './Lista.css';
import React,{useState} from 'react';
export default function Lista(props) {
  const [show,setShow]=useState(true)
  return (
    <div className='fora'>
      <button class='boteum' onClick={()=>setShow(!show)} >{props.local}</button> 
      {
        show?
          <div>
            <div className='box'>
              {props.endereco}
            </div> 
            <div className='box'>
              {props.descricao}
            </div> 
            <div className='box'>
              {props.endereco_es}
            </div> 
            <div className='box'>
              {props.descricao_es}
            </div> 
            <div className='box'>
              {props.endereco_wa}
            </div> 
            <div className='box'>
              {props.descricao_wa}
            </div> 
          </div>:
        null
      }
    </div>
  )
}
