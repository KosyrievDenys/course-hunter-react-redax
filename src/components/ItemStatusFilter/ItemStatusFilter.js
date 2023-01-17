import React from "react";
import styles from './ItemStatusFilter.module.scss';

const ItemStatusFilter = (
  {
    stFilter,
    onFilterChange,
  }) => {
  const buttonsArr = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  const buttons = buttonsArr.map(({ name, label }) => {
    const isActive = stFilter === name;
    const clazz = isActive ? `${styles.btnInfo}` : `${styles.btnOutlineSecondary}`;
    return (
      <button
        type="button"
        className={`${styles.btn} ${clazz}`}
        key={name}
        onClick={() => onFilterChange(name)}
      >{label}</button>
    )
  })

  return (
    <div className={styles.itemStatusFilter}>
      {buttons}
    </div>
  )
}

export default ItemStatusFilter;