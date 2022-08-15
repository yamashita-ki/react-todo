import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabledFlag } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabledFlag}
        placeholder="TODOを追加"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabledFlag} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
