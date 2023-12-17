import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "../Search/Search.module.css";

function Search({placeholder}) {
    const onSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input
        required
        type="text"
        placeholder={placeholder}
        className={styles.search}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
