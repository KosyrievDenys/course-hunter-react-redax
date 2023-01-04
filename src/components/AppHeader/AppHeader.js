import React from "react";
import styles from './AppHeader.module.scss';

function AppHeader({ toDo, done }) {
  return (
    <div className={styles.header}>
      <h1>My Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  )
}

export default AppHeader;