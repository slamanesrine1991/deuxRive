import React, { Component } from "react";
import "antd/dist/antd.css";
import Dashboard from "./List";
import Home from "./Home";
import Contact from "./Contact";
import Cent from "./Cent";
import Forum from "./Forum";
import logo from "../img/logo-rive.png";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./navbar.css";

export default class NavBar extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="navBar">
        <div className="logoSearch">
          <div className="logo">
            <Link component={Home} to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="projet">
            {" "}
            <Link component={Dashboard} to="/projects">
              Projets
            </Link>{" "}
          </Menu.Item>

          <Menu.Item key="cent">
            <Link component={Cent} to="/cent">
              Les cent
            </Link>
          </Menu.Item>

          <Menu.Item key="forum">
            {" "}
            <Link component={Forum} to="/forums">
              Forums
            </Link>
          </Menu.Item>

          <Menu.Item key="contact">
            {" "}
            <Link component={Contact} to="/contact">
              Contact{" "}
            </Link>{" "}
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
