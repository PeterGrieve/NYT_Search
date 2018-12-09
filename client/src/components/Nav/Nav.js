import React from "react";

var Nav = () =>
  <nav className="navbar navbar-default navbar-top" style={style.navBar}>
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a  href="/" className="navbar-brand">
          NYT Article Search
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/">Search</a></li>
          <li><a href="/saved">Saved Articles</a></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;