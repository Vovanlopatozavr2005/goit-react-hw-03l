import React from 'react'
import styles from './SearchBox.module.css';

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={styles.searchBox}>
      <p>Find cotacts by name</p>
      <input className={styles.input} type='text' value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox