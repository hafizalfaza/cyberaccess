import React, { Component } from 'react';
import { render } from 'react-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Cyber Access Care</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="/">Dashboard</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Admin</a></li>
            </ul>
          </div>
        </div>
      </nav>
    ) 
}

export default Navbar;