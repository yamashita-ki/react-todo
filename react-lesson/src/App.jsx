import React, { useState } from 'react';
import "./style.css";
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInCompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"])
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    deleteAndSetIncompleteTodos(newTodos, index);
  }
  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    setCompleteTodos([...completeTodos, incompleteTodos.at(index)]);
    newTodos.at(index);
    deleteAndSetIncompleteTodos(newTodos, index);
  }

  const deleteAndSetIncompleteTodos = (newTodos, index) => {
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  }

  const onClickReturnIncompleteTodos = (index) => {
    const currentCompleteTodos = [...completeTodos];
    setInCompleteTodos([...incompleteTodos, completeTodos.at(index)]);
    currentCompleteTodos.splice(index, 1);
    setCompleteTodos([...currentCompleteTodos]);
  }
  // FIXME: コンポーネント化したい
  return (
    <>
      <div className='input-area'>
        <input placeholder='TODOを追加' value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickReturnIncompleteTodos(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  );
}