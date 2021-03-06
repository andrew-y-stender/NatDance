import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  state = {
    whatsnew: false,
    store: false,
    contact: false,
    about: false,
    portfolio: false
  };
  render() {
    return (
      <div className="App-header-wrapper">
        <div className="App-header">
          <div className="container-nav">
            <Link to="/">
              <img
                className="content-home bottom logo-style"
                alt=""
                src={logo}
                onClick={() =>
                  this.setState({
                    whatsnew: false,
                    store: false,
                    contact: false,
                    about: false,
                    portfolio: false
                  })
                }
              />
            </Link>

            <Link to="/whats-new">
              <button
                className={
                  this.state.whatsnew
                    ? "content-whats-new link-focus bottom"
                    : "content-whats-new link bottom"
                }
                onClick={() =>
                  this.setState({
                    whatsnew: true,
                    store: false,
                    contact: false,
                    about: false,
                    portfolio: false
                  })
                }
              >
                What's new
              </button>
            </Link>
            <Link to="/store">
              <button
                className={
                  this.state.store
                    ? "content-store link-focus bottom"
                    : "content-store link bottom"
                }
                onClick={() =>
                  this.setState({
                    whatsnew: false,
                    store: true,
                    contact: false,
                    about: false,
                    portfolio: false
                  })
                }
              >
                Store
              </button>
            </Link>
            <Link to="/contact">
              <button
                className={
                  this.state.contact
                    ? "content-contact link-focus bottom"
                    : "content-contact link bottom"
                }
                onClick={() =>
                  this.setState({
                    whatsnew: false,
                    store: false,
                    contact: true,
                    about: false,
                    portfolio: false
                  })
                }
              >
                Contact
              </button>
            </Link>
            <Link to="/about">
              <button
                className={
                  this.state.about
                    ? "content-about link-focus bottom"
                    : "content-about link bottom"
                }
                onClick={() =>
                  this.setState({
                    whatsnew: false,
                    store: false,
                    contact: false,
                    about: true,
                    portfolio: false
                  })
                }
              >
                About
              </button>
            </Link>
            <Link to="/portfolio">
              <button
                className={
                  this.state.portfolio
                    ? "content-portfolio link-focus bottom"
                    : "content-portfolio link bottom"
                }
                onClick={() =>
                  this.setState({
                    whatsnew: false,
                    store: false,
                    contact: false,
                    about: false,
                    portfolio: true
                  })
                }
              >
                Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
