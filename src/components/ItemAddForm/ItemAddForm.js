import React, { useState } from "react";
import styles from './ItemAddForm.module.scss';

const ItemAddForm = ({ onAddItem }) => {
  const [label, setLabel] = useState('');
  return (
    <form className={styles.itemAddForm}
          onSubmit={(e) => {
            e.preventDefault();
            onAddItem(label);
          }}
    >
      <input type='text'
             className={styles.input}
             onChange={(e) => {
               setLabel(e.target.value)
             }}
             placeholder='What needs to bo done'
      />
      <button
        className={styles.addItem}
        type={"submit"}
      >Add Item
      </button>
    </form>
  )
}

export default ItemAddForm;