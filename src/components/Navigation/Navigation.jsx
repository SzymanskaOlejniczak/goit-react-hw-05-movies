import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import classname from 'classnames';

const Navigation = () => {
  return (
    <header>
      <div className={s.mainContainer}>
        <nav className={s.mainNavigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
            classname(s.mainNavigation__link, { [s.active]: isActive })
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              classname(s.mainNavigation__link, { [s.active]: isActive })
            }
          
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;