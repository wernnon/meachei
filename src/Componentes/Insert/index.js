import React from 'react'
import './Insert.css'
export default function Insert(props) {
  return (
    <div className='outer'>
      <form>
        <input class="insert" type='text' id={props.id} name={props.name} placeholder={props.holder}/>
      </form>
    </div>
  )
}
