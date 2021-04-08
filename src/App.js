import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

//렌더링 성능 최적화를 위한 방법 1. useState 함수 업데이트 활용 방법
//***********************************************************************
// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos);  //성능 최적화 테스트를 위해 createBulkTodos 를 통해 대량의 데이터 생성
//   //   기존 initState
//   //   [{
//   //     id: 1,
//   //     text: '리액트의 기초 알아보기',
//   //     checked: true,
//   //   },
//   //   {
//   //     id: 2,
//   //     text: '컴포넌트 스타일링 해보기',
//   //     checked: true,
//   //   },
//   //   {
//   //     id: 3,
//   //     text: '일정 관리 앱 만들어보기',
//   //     checked: false,
//   //   }
//   // ]);

//   const nextId = useRef(2501);

//   const onInsert = useCallback(
//     text => { const todo = { id : nextId.current, text, checked: false};
//               setTodos( todos => todos.concat(todo));
//               nextId.current += 1; //nextId 1 더하기
//             },
//             [] //todos 배열이 업데이트될때 리렌더링
//   );

//   const onRemove = useCallback(
//     id => {
//       //todo 배열들의 todo.id 값이 위 id값과 같지 않은것들만 새로 배열 추출
//       setTodos(todos => todos.filter(todo => todo.id !==id));
//     }, [] //todos 배열이 업데이트 되면 리렌더링
//   );

//   const onToggle = useCallback(
//     id => {
//       setTodos(todos => todos.map(todo =>
//           todo.id === id ?{...todo, checked: !todo.checked} : todo
//         )
//       )
//     }, []
//   )
//   return (
//       <TodoTemplate>
//         <TodoInsert onInsert={onInsert}/>
//         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//       </TodoTemplate>

//   );
// }
//***********************************************************************

//렌더링 성능 최적화를 위한 방법 2. useReducer 활용 방법
//***********************************************************************

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);

    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );

    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
