import React from 'react'
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
}   from 'react-icons/md';
import './TodoListItem.scss';
import cname from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;     //todo에 포함되어있는 속성들 
    return (
    <div className="TodoListItem-virtualized" style={style}>
        <div className="TodoListItem">
            {/* classnames library 사용  */}
            <div className={cname("checkbox", {checked})} onClick={()=>onToggle(id)}> 
                {checked ? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    </div>

    )
}

export default React.memo(TodoListItem);    //React.memo = 리렌더링을 방지해주는 함수, 즉 TodoListItem의 todo, onRemove, onToggle 이 변하지 않으면 렌더링 하지 않음 
