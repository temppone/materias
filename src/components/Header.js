import React from "react";
import logo from "../img/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <img className={styles.logo} src={logo} alt="" />
      <input className={styles.search} type="text" placeholder="Procurar" />
    </nav>
  );
};

export default Header;
