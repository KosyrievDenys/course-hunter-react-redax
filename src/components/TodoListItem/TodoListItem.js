import React, { useState } from "react";
import styles from './TodoListItem.module.scss';

const TodoListItem = ({ label, onDeleted }) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);
  let classNames = `${styles.block}`;
  if (done) {
    classNames += ` ${styles.done}`;
  }
  if (important) {
    classNames += ` ${styles.important}`;
  }

  return (
    <div className={classNames}>
    <span onClick={() => setDone(!done)}>
{label}
    </span>
      <div className='buttons'>
        <button
          type={'button'}
          className={styles.btn}
          onClick={onDeleted}
        >$
        </button>
        <button
          type={'button'}
          className={styles.btn}
          onClick={() => setImportant(!important)}
        >!
        </button>
      </div>
    </div>
  )
}

export default TodoListItem;