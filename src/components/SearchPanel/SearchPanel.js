import React, { useEffect, useState } from "react";
import styles from './SearchPanel.module.scss';

function SearchPanel({ onSearchChangeApp }) {
  const [term, setTerm] = useState('');

  const onSearchChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearchChangeApp(value);
    // useEffect(()=>{
    //
    // },[value])
  }

  return <input
    className={styles.searchPanel}
    placeholder='type to search'
    value={term}
    onChange={(e) => onSearchChange(e)}
  />
}

export default SearchPanel;
