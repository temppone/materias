import React from "react";
import logo from "../img/logo.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <input className={styles.search} type="text" placeholder="Procurar" />
    </nav>
  );
};

export default Header;
