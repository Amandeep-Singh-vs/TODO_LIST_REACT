import React, { useState } from 'react'
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

function Todo() {
    const [todos, setTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const completedTodos = todos.filter((todo)=>todo.done).length;
    const totalTodos = todos.length
    return (
        <div className='todoWrapper'>
            <Form todos={todos} setTodos={setTodos} isEditing={isEditing}/>
            <TodoList todos={todos} setTodos={setTodos} isEditing={isEditing} setIsEditing={setIsEditing}/>
            <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
        </div>
    )
}

export default Todo
