import React from "react";
import styles from "./Header.module.css";
import { Link, useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <header className={styles.header}>
      <div>
        <Link to={"/"}>NatureGram</Link>
        <div className={styles["search-input-wrapper"]}>
          <input
            type="text"
            placeholder="Search here..."
            onChange={(e) => {
              setSearchParams({ title: e.target.value });
            }}
          />
        </div>
        <div className={styles["button-container"]}>
          <Link to={"/createNew"}>Create New</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
