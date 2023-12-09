import React from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div
            style={{
                marginTop: 10,
                padding: 15,
                border: '3px solid gray',
            }}
        >
            {todo.id} задача {todo.title}
            <input type='checkbox' checked={todo.completed} />
        </div>
    );
};

export default TodoItem;
