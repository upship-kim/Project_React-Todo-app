import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어보기',
      checked: false,
    }
  ]);

  const nextId = useRef(4);
  
  const onInsert = useCallback(
    text => { const todo = { id : nextId.current, text, checked: false};
              setTodos(todos.concat(todo));
              nextId.current += 1; //nextId 1 더하기 
            },
            [todos] //todos 배열이 업데이트될때 리렌더링 
  );
  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} />
      </TodoTemplate>
      
    
  );
}

export default App;
