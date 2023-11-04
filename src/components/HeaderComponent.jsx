import React from "react";
import "../assets/css/component/header.css";
import "../assets/css/icons.css";
import { routesInfo } from "../data/routesInfo";
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.routeTo = this.routeTo.bind(this);
    this.hideSubmenu = this.hideSubmenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.isNavItemActive = this.isNavItemActive.bind(this);
  }

  isNavItemActive(routeInfo) {
    if (routeInfo.url.includes(this.props.pathName) === true) {
      if (this.props.pathName + window.location.search === routeInfo.url) {
        return "active";
      } else {
        return "";
      }
    } else {
      if (this.props.pathName === routeInfo.url) {
        return "active";
      } else {
        return "";
      }
    }
  }

  toggleMenu(event) {
    if (event.key === "Enter")
      document.getElementById("select-menu").checked =
        !document.getElementById("select-menu").checked;
  }

  toggleSubmenu(event, eventType) {
    if (eventType === "click") {
      let subMenu = event.target.parentElement.children[1];
      if (subMenu !== undefined) {
        if (subMenu.className.includes("show-sub-menu") === true) {
          subMenu.className = subMenu.className.replace(
            "show-sub-menu",
            "hide-sub-menu"
          );
        } else {
          subMenu.className = subMenu.className.replace(
            "hide-sub-menu",
            "show-sub-menu"
          );
        }
      }
    }
  }
  hideSubmenu() {
    let subMenu = document.getElementsByClassName("sub-menu")[0];
    if (subMenu !== undefined) {
      if (subMenu.className.includes("show-sub-menu") === true) {
        subMenu.className = subMenu.className.replace(
          "show-sub-menu",
          "hide-sub-menu"
        );
      }
    }
  }
  routeTo(routeInfo) {
    this.props.routeTo(routeInfo.url);
    document.getElementById("select-menu").checked = false;
    this.hideSubmenu();
  }
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-brand">
              <button
                onClick={() => {
                  this.routeTo(routesInfo.home);
                }}
              >
                <h2> Single Page Application</h2>
              </button>
            </div>
            <input
              onKeyUp={(event) => {
                this.toggleMenu(event, "click");
              }}
              id="select-menu"
              type="checkbox"
            />
            <div className="menu">
              <div className="menu-item">
                <button
                  onClick={() => {
                    this.routeTo(routesInfo.home);
                  }}
                  className={`${this.isNavItemActive(routesInfo.home)}`}
                >
                  {routesInfo.home.name}
                </button>
              </div>

              <div
                className="menu-item"
                onClick={(event) => {
                  this.toggleSubmenu(event, "click");
                }}
              >
                <button
                  className={`${this.isNavItemActive(
                    routesInfo.dropdown["submenu1"]
                  )} ${this.isNavItemActive(
                    routesInfo.dropdown["submenu2"]
                  )} ${this.isNavItemActive(routesInfo.dropdown["submenu3"])}`}
                >
                  {routesInfo.dropdown.name}
                </button>
                <div className="sub-menu hide-sub-menu">
                  <div className="sub-menu-item">
                    <button
                      onClick={() => {
                        this.routeTo(routesInfo.dropdown["submenu1"]);
                      }}
                      className={`${this.isNavItemActive(
                        routesInfo.dropdown["submenu1"]
                      )}`}
                    >
                      {routesInfo.dropdown["submenu1"].name}
                    </button>
                  </div>
                  <div className="sub-menu-item">
                    <button
                      onClick={() => {
                        this.routeTo(routesInfo.dropdown["submenu2"]);
                      }}
                      className={`${this.isNavItemActive(
                        routesInfo.dropdown["submenu2"]
                      )}`}
                    >
                      {routesInfo.dropdown["submenu2"].name}
                    </button>
                  </div>
                  <div className="sub-menu-item">
                    <button
                      onClick={() => {
                        this.routeTo(routesInfo.dropdown["submenu3"]);
                      }}
                      className={`${this.isNavItemActive(
                        routesInfo.dropdown["submenu3"]
                      )}`}
                    >
                      {routesInfo.dropdown["submenu3"].name}
                    </button>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <button
                  onClick={() => {
                    this.routeTo(routesInfo.product);
                  }}
                  className={`${this.isNavItemActive(routesInfo.product)}`}
                >
                  {routesInfo.product.name}
                </button>
              </div>
              <div className="menu-item">
                <button
                  onClick={() => {
                    this.routeTo(routesInfo.about);
                  }}
                  className={`${this.isNavItemActive(routesInfo.about)}`}
                >
                  {routesInfo.about.name}
                </button>
              </div>
              <div className="menu-item">
                <button
                  onClick={() => {
                    this.routeTo(routesInfo.contact);
                  }}
                  className={`${this.isNavItemActive(routesInfo.contact)}`}
                >
                  {routesInfo.contact.name}
                </button>
              </div>
            </div>
            <label htmlFor="select-menu" className="menu-icon">
              <i className="gg-menu" aria-label="open-menu"></i>
            </label>
            <label htmlFor="select-menu" className="close-icon">
              <i className="gg-close" aria-label="close-menu"></i>
            </label>
          </div>
        </nav>
      </header>
    );
  }
}

export { HeaderComponent };
