import React from 'react'
import { useState } from 'react'
import '../App.css'
function TodoCreate({ onCreateTodo }) {

    const [add, setNewAdd] = useState('');

    const clearInput = () => {
        setNewAdd('');
    }

    const createTodo = () => {
        if (!add) return;
        const request = {
            id: Math.floor(Math.random() * 123),
            title: add
        }
        onCreateTodo(request);
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input value={add} onChange={(e) => setNewAdd(e.target.value)} type="text" placeholder='write' />
            <button onClick={createTodo}>Create</button>
        </div>
    )
}

export default TodoCreate