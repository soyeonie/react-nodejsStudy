/* eslint-disable */
//yarn add sass classnames react-icons
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

const App = () => {
  const [members, setMembers] = useState([
    {
      no: 1,
      id: 'id1',
      pw: 'pw1',
      email: 'email1',
      gender: 'woman',
    },
  ]);

  const nextNo = useRef(2);

  const onInsert = useCallback(
    (form) => {
      const member = {
        no: nextNo.current,
        id: form.id,
        pw: form.pw,
        email: form.email,
        gender: form.gender,
      };
      setMembers(members.concat(member));
      nextNo.current += 1;
    },
    [members],
  );

  const onRemove = useCallback(
    (no) => {
      //선택한 id와 동일하지 않은 요소만 반환
      setMembers(members.filter((member) => member.no !== no));
    },
    [members],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList members={members} onRemove={onRemove} />
    </TodoTemplate>
  );
};

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: '리액트의 기초 알아보기',
//       checked: true,
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링해 보기',
//       checked: true,
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false,
//     },
//   ]);

//   // 고유 값으로 사용 될 id
//   // ref 를 사용하여 변수 담기
//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1; // nextId 1 씩 더하기
//     },
//     [todos],
//   );

//   const onRemove = useCallback(
//     (id) => {
//       //선택한 id와 동일하지 않은 요소만 반환
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos],
//   );

//   const onToggle = useCallback(
//     (id) => {
//       setTodos(
//         todos.map((todo) =>
//           todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//         ),
//       );
//     },
//     [todos],
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };

export default App;
