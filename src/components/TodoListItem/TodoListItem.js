import React, { useState } from "react";
import styles from './TodoListItem.module.scss';

const TodoListItem = (
  {
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    important,
    done,
  }) => {
  let classNames = '';
  if (done) {
    classNames += ` ${styles.done}`;
  }
  if (important) {
    classNames += ` ${styles.important}`;
  }
  return (
    <div className={`${styles.block} ${classNames}`}>
    <span onClick={onToggleDone}>
{label}
    </span>
      <div className='buttons'>
        <button
          type={'button'}
          className={styles.btn}
          onClick={onDeleted}
        >X
        </button>
        <button
          type={'button'}
          className={styles.btn}
          onClick={onToggleImportant}
        >!
        </button>
      </div>
    </div>
  )
}

export default TodoListItem;