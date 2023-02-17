# React Note taking APP:
=> Can take note
=> Can edit note
=> Can delete note
=> Can Delete all Note at once


# The taken notes are saved in the local server so there no loss of data on reload


# Fuction to clear all note:
  const clearlist= ()=>{
    showalert(true,"success","Bud cleared")
    setList([]);
  }

# Function to delete one note:
  const removeitem=(id)=>{
    showalert(true,"success","Note removed")
    setList(list.filter((items)=>items.id!==id))
  }

# For Alert functionality:
const Alert = ({type,msg,removealert,list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>
    {
      removealert();
    },3000)
    return ()=> clearTimeout(timeout);
  }
  ,[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}


