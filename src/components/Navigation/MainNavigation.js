import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NavItems from "./NavItems";
import "./MainNavigation.css";
// import SeriesList from "../../utils/SeriesList";

const mainNavigation = (props) => (
  <nav className="main-nav">
    <div className="main-nav__logo">
      <NavLink to="/" >
        <HomeIcon />
      </NavLink>
    </div>
    <div className="main-nav__logo">
      <NavLink to="/library">
        <VideoLibraryIcon />
      </NavLink>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      <NavItems isAuth={props.isAuth} onLogout={props.onLogout} />
    </ul>
  </nav>
);

export default mainNavigation;
