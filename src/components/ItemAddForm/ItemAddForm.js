import React from "react";
import styles from './ItemAddForm.module.scss';

const ItemAddForm = ({ onAddItem }) => {
  return (
    <div>
      <button
        className={styles.addItem}
        type={"button"}
        onClick={onAddItem}
      >Add Item
      </button>
    </div>
  )
}

export default ItemAddForm;