import React from "react";
import classes from "../../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>
          My news
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>
          Music
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.setting}`}>
        <NavLink to="/setting" activeClassName={classes.active}>
          Setting
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.setting}`}>
        <NavLink to="/users" activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar

