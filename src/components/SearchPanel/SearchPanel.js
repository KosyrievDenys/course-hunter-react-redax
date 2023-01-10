import React from "react";
import styles from './SearchPanel.module.scss';

function SearchPanel() {
  return <input className={styles.searchPanel} placeholder='type to search' />;
}

export default SearchPanel;
