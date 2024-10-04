import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


function TodoAdjust({ data, deleteListById }) {

    const [check, setCheck] = useState(false)
    const [newtodo, setNewtodo] = useState(data.title)
    const onClickDelete = () => {
        deleteListById(data.id)

    }
    return (
        <>

            <div className='todo-list' >



                <div>
                    {check ? <input value={newtodo} onChange={(e) => setNewtodo(e.target.value)} type="text" /> : newtodo}

                </div>
                <div className='Adjust-buttons'>

                    <MdDelete onClick={onClickDelete} />
                    {check ? <FaCheck onClick={() => setCheck(false)} /> : <FaEdit onClick={() => setCheck(true)} />
                    }
                </div>
            </div>

        </>


    )
}

export default TodoAdjust