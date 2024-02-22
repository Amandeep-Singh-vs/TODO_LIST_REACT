import React, { useState } from 'react'
import '../styles/form.css'
import uniqid from 'uniqid';
function Form({todos,setTodos,isEditing}) {
  const [todo, setTodo] = useState({name:"",id:"",done:false,edited:false})
  const AddTodo = (e)=>{
      e.preventDefault();
      if(todo.name.trim()==="")
      {
        alert("Cannot add an empty task!!!");
        setTodo({name:"",id:"",done:false,edited:false})
        return;
      }
      // todos.push(todo);
      // setTodos(todos);
      setTodos([...todos,todo])
      setTodo({name:"",id:"",done:false,edited:false})
  }
  const handleDeleteAll = () => {
    if(isEditing)
    {
      alert("Cannot delete all todos while editing!!!");
      return;
    }
    const confirmDelete = window.confirm("Are you sure you want to delete all todos ?");
    if(confirmDelete)
    {
      setTodos([]);
    }
    else{
      return;
    }
  };

  const handleMarkAll = () => {
    if(isEditing)
    {
      alert("Cannot mark all todos while editing!!!");
      return;
    }
    const markTodos = todos.map(todo => ({
      ...todo,
      done: true,
    }));
    setTodos(markTodos);
  };
  return (
    <div>
      <form className='todoForm'>
        <input value={todo.name} onChange={(e)=>setTodo({name:e.target.value,id:uniqid(),done:false,edited:false})} type='text' className='inputStyle' placeholder='Enter your task here...'/>
        <button onClick={AddTodo} type='submit' className='btn'>Add</button>
        {/* Another way of calling function for forms */}
        {/* <button onClick={(e)=>{AddTodo(e)}} type='submit'>Add</button> */}
      </form>
      <div className='allBtns'>
        <button onClick={handleDeleteAll} className='deleteAllBtn'>Delete All</button>
        <button onClick={handleMarkAll} className='markAllBtn'>Mark All</button>
      </div>
    </div>
  )
}

export default Form
