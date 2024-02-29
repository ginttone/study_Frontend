import React from 'react';
import TodoItem from './TodoItem';

interface TodoBoardProps {
    todoList: string[];
}

function TodoBoard({ todoList }: TodoBoardProps) {
    return (
        <div>
            <h2>To do List</h2>
            {todoList.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </div>
    );
}

export default TodoBoard;