import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage=()=>{
  let list = localStorage.getItem('list');
  if(list)
  {
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return [];
  }
}

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [isedit,setisedit] = useState('');
  const [editID,setEditID]= useState(null);
  const [alert,setAlert]= useState({show:false,msg:"",type:''})
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name)
    {
      showalert(true,"danger","No input")

    }
    else if(name && isedit)
    {
      setList(list.map((item)=>{
        if(item.id===editID){
          return {...item,title:name}
        }
        return item;
      }))
      setEditID(null);
      setisedit(false);
      setName("");

    }
    else{
      const newItem = {id: new Date().getTime().toString(),title:name}
      setList([...list,newItem]);
      setName('');
      showalert(true,"success","Note Added")
    }
  }
  const showalert = (show=false,type="",msg="")=>{
    setAlert({show,type,msg})
  }
  const clearlist= ()=>{
    showalert(true,"success","Bud cleared")
    setList([]);
  }
  const removeitem=(id)=>{
    showalert(true,"success","Note removed")
    setList(list.filter((items)=>items.id!==id))
  }
  const editcon=(id)=>{
    showalert(true,"success","You are in edit mode")
    const edititem = list.find((item)=>item.id===id)
    setName(edititem.title)
    setisedit(true)
    setEditID(id)
  }
  useEffect(()=>{localStorage.setItem('list',JSON.stringify(list))},[list])
  return (
    <>
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removealert={showalert} list={list}/>}
      <h3>Note bud</h3>
      <div className='form-control'>
        <input type='text' placeholder='e.g. Games' className='grocery' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button className='submit-btn' type='submit' >{isedit ? 'Edit': 'Add'}</button>
      </div>
      </form>
      {list.length>0 && (
            <div className='grocery-container'>
            <List items={list} removeitem={removeitem} editcon={editcon}/>
            <button className='clear-btn' onClick={clearlist}>Clear Item</button>
            </div>
      )}





    </section>
    </>
  )
}

export default App
