import React, { useEffect, useState } from 'react'
import '../styles/todoitem.css'
const TodoItem = ({item,todos,setTodos,isEditing,setIsEditing}) => {
  const [isEdit,setIsEdit] = useState(false);
  const [changedTodo, setChangedTodo] = useState(item.name);
  function handleDelete(item){
    setTodos(todos.filter((todo)=> todo!== item));
  }
  const saveMember = (itemID) => {
    if(changedTodo.trim() ==='')
    {
      setChangedTodo(item.name)
      alert('Cannot save an empty todo!!!')
      return;
    }
    if(changedTodo === item.name)
    {
      setChangedTodo(item.name)
      alert('Cannot give same name to todo!!!')
      return;
    }
    const confirmSave = window.confirm("Are you sure you want to save?");
    if (confirmSave) {
      setTodos((prevTodo) =>
        prevTodo.map((todo) => {
          if (todo.id === itemID) {
            return { ...todo, name: changedTodo,edited:true };
          }
          return todo;
        })
      );
    }
    else return;
    setIsEdit(false);
    setIsEditing(false);
  };
  function handleComplete(Id){
    if(isEditing)
    {
      alert( "Please finish editing before marking as completed.");
      return ;
    }
    const updatedTodos = todos.map((todo)=>todo.id===Id ? { ...todo,done:!todo.done} : todo);
    setTodos(updatedTodos);
    console.log(todos)
  }
  const complete = item.done ? "completed":"";
    return (
      <div className={item.done ? "item colored":"item"}>
        <div className='itemName'>
          {isEdit?(
            <input
            className="editTodo"
            type="text"
            value={changedTodo}
            onChange={(e) => setChangedTodo(e.target.value)}
          />
          ):(
            <span className={complete} onClick={()=>{handleComplete(item.id)}}>{item.name} {item.edited ? (<span style={{fontSize:'10px',color:'green'}}>Edited</span>):(<></>)}</span>
          )}
            {(isEdit && isEditing) ? (
              <span className='btns'>
                <button className="cancel" onClick={()=>{setIsEdit(false); setChangedTodo(item.name); setIsEditing(false)}}>Cancel</button>
                <button className="save" onClick={()=>{saveMember(item.id)}}>Save</button>
              </span>
            ):(
              <span className='btns'>
                <button className='deleteButton' onClick={()=>{handleDelete(item)}}>Delete</button>
                {
                  !item.done ?
                    (<button className='editButton' onClick={()=>{setIsEdit(true); setIsEditing(true);}}>Edit</button>)
                  :
                  (<></>)
                }
                  
              </span>
            )}
        </div>
        <hr className='line'/>
      </div>
    )
}

export default TodoItem
