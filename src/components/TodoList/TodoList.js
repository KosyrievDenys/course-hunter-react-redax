import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import styles from './TodoList.module.scss';

const TodoList = ({
                    todos,
                    onDeleted,
                    onToggleImportant,
                    onToggleDone
                  }) => {
  const elements = todos.map((item) => {
    // const {label, ...labelProps} = item; для видалення кожного одинакового елементу з кожного об.екту
    return (
      <li key={item.label}>
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(item.label)}
          onToggleImportant={() => onToggleImportant(item.label)}
          onToggleDone={() => onToggleDone(item.label)}
        />
      </li>
    )
  })
  return (
    <ul>
      {elements}
    </ul>
  )
}

export default TodoList;