import React from "react";
import styles from './ItemStatusFilter.module.scss';

const ItemStatusFilter = () => {
  return (
    <div className={styles.itemStatusFilter}>
      <button type={"button"} className={styles.btn}>All</button>
      <button type={"button"} className={styles.btn}>Active</button>
      <button type={"button"} className={styles.btn}>Done</button>
    </div>
  )
}

export default ItemStatusFilter;