import React from 'react'
import TodoItem from './TodoItem'
import '../styles/list.css'
import uuid4 from 'uuid4';
function TodoList({todos,setTodos,isEditing,setIsEditing}) {
  const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className='list'>
        {
            sortedTodos.map((item) =>(
                <TodoItem item={item} key={uuid4()} todos={todos} setTodos={setTodos} isEditing={isEditing} setIsEditing={setIsEditing}/>
            ))
        }
    </div>
  )
}

export default TodoList
