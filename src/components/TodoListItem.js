import React from 'react'
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
}   from 'react-icons/md';
import './TodoListItem.scss';
import cname from 'classnames';

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;     //todo에 포함되어있는 속성들 
    return (
        <div className="TodoListItem">
            {/* classnames library 사용  */}
            <div className={cname("checkbox", {checked})}> 
                {checked ? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default TodoListItem
