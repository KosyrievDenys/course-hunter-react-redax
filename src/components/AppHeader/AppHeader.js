import React, { useEffect, useState } from "react";
import styles from './AppHeader.module.scss';

function AppHeader({ arrTodoData }) {
  const [done, setDone] = useState([]);
  const [todo, setTodo] = useState(0);
  useEffect(()=>{
    setDone(arrTodoData.filter(el => el.done))
  },[arrTodoData]);

  useEffect(()=>{
    setTodo( arrTodoData.length - done.length)
  },[done]);

  return (
    <div className={styles.appHeader}>
      <h1>My Todo List</h1>
      <h2>{todo} more to do, {done.length} done</h2>
    </div>
  )
}

export default AppHeader;