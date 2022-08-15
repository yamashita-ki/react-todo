import React, { useState } from "react";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { CompleteTodos } from "./components/CompleteTodo";
import "./style.css";
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInCompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    deleteAndSetIncompleteTodos(newTodos, index);
  };
  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    setCompleteTodos([...completeTodos, incompleteTodos.at(index)]);
    newTodos.at(index);
    deleteAndSetIncompleteTodos(newTodos, index);
  };

  const deleteAndSetIncompleteTodos = (newTodos, index) => {
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  const onClickReturnIncompleteTodos = (index) => {
    const currentCompleteTodos = [...completeTodos];
    setInCompleteTodos([...incompleteTodos, completeTodos.at(index)]);
    currentCompleteTodos.splice(index, 1);
    setCompleteTodos([...currentCompleteTodos]);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabledFlag={incompleteTodos.length >= 5}
      />
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです。</p>
      )}
      <CompleteTodos
        todos={completeTodos}
        onClickReturnIncompleteTodos={onClickReturnIncompleteTodos}
      />
    </>
  );
};
