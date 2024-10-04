import React from 'react'
import TodoAdjust from './TodoAdjust'

function TodoList({ lists, deleteListById }) {
    return (
        <div className='List-line' style={{ width: "100%" }}>
            {
                lists && lists.map((list) => (
                    < TodoAdjust key={list.id} data={list} deleteListById={deleteListById} />
                ))

            }

        </div>
    )
}

export default TodoList