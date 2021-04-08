import React, { useCallback } from 'react'
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized'
import './TodoList.scss';


const TodoList = ({ todos, onRemove, onToggle }) => { //todos 와 onRemove를 받겠다. 
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );
    return( //list 전체의 모습을 return
        <List
            className="TodoList"
            width={512} //전체크기
            height={513}    //전체 높이
            rowCount={todos.length} //항목 개수
            rowHeight={57}
            rowRenderer={rowRenderer} // 리스트 항목을 렌더링할때 쓰는 함수
            list={todos} // 배열
            style={{ outline:'none'}}   //List에 기본 적용되는 outline 스타일 제거
        />
        
    );   
};
export default React.memo(TodoList)
