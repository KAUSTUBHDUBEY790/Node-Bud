import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeitem,editcon}) => {
  return <div className='grocery-list'>
    {items.map((item)=>{
      const {id,title} = item;
      return <article key={id} className='grocery-item'>
        <p className='title'>{title}</p>
        <div className='btn-contaniner'>
          <button type='button' className='edit-btn' onClick={()=>editcon(id)}><FaEdit/></button>
          <button type='button' className='delete-btn' onClick={()=>removeitem(id)}><FaTrash/></button>
        </div>
      </article>
      })}
  </div>
}

export default List
