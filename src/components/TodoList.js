import React from 'react'
import TodoListItem from './TodoListItem';
import './TodoList.scss';


const TodoList = ({ todos, onRemove }) => { //todos 와 onRemove를 받겠다. 
    return (
        <div className="TodoList">
            {todos.map(todo => (    //여기서 todo는 지정한것? 
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
            ))}
        </div>
    )
}

export default TodoList
