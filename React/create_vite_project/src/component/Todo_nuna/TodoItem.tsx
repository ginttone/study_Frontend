import React from 'react'
interface TodoProps {
    todo: string;
}
export default function TodoItem({ todo }: TodoProps) {
    return (
        <React.Fragment>
            <div className='todo-item'>
                {todo}
            </div>
        </React.Fragment>
    )
}