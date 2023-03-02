import React from 'react'
import './Insert.css'
export default function Insert(props) {
  return (
    <div>
        <div className='texto'>
          {props.texto}
        </div>
        <form className='outer'>
        <input class="insert" 
        type='text' 
        id={props.id} 
        name={props.name} 
        placeholder={props.holder} />
      </form>
    </div>
  )
}
