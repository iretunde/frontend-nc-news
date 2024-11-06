import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <nav className="navbar">
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
    </nav>
);

export default Nav;
