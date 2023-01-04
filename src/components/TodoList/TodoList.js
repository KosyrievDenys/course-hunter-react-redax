import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import styles from './TodoList.module.scss'

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    return (
      <li key={item.label}>
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(item)}
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