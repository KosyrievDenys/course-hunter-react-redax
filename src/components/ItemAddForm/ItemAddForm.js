import React, { useState } from "react";
import styles from './ItemAddForm.module.scss';

const ItemAddForm = ({ onAddItem }) => {
  const [label, setLabel] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onAddItem(label);
    setLabel('')
  }
  return (
    <form className={styles.itemAddForm}
          onSubmit={(e) => onSubmit(e)}
    >
      <input type='text'
             className={styles.input}
             onChange={(e) => setLabel(e.target.value)}
             placeholder='What needs to bo done'
             value={label}
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