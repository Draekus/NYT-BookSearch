import React from "react";
import Styled from "styled-components";

const NavBar = Styled.nav`
  margin-bottom: 20px;
`;

const Nav = props => {
  return (
    <div className="navbar-fixed">
      <NavBar>
        <div className="nav-wrapper blue lighten-3">
          <a
            href="github.com/pgould94"
            id="nav-mobile"
            className="brand-logo center">
            <i className="material-icons">import_contacts</i>
            NYT Book Search
          </a>
          <ul className="left hide-on-med-and-down">
            <li>
              <a href="/books">Search</a>
            </li>
            <li>
              <a href="/">Saved Books</a>
            </li>
          </ul>
        </div>
      </NavBar>
    </div>
  );
};

export default Nav;
