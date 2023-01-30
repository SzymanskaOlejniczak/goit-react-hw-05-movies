import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <div className={s.mainContainer}>
        <nav className={s.mainNavigation}>
          <NavLink
            to="/"
            className={s.mainNavigation__link}
           
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={s.mainNavigation__link}
          
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;