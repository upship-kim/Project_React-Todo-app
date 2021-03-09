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

  const onRemove = useCallback(
    id => {
      //todo 배열들의 todo.id 값이 위 id값과 같지 않은것들만 새로 배열 추출
      setTodos(todos.filter(todo => todo.id !==id));
    }, [todos] //todos 배열이 업데이트 되면 리렌더링
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ?{...todo, checked: !todo.checked} : todo
        )
      )
    }, [todos]
  )
  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
      
    
  );
}

export default App;
