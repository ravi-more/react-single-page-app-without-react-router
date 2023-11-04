import React from "react";
import "../assets/css/component/footer.css";
import { routesInfo } from "../data/routesInfo";
class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.routeTo = this.routeTo.bind(this);
  }

  routeTo(routeInfo) {
    this.props.routeTo(routeInfo.url);
    document.getElementById("select-menu").checked = false;
  }
  render() {
    return (
      <footer className="footer">
        <button
          onClick={() => {
            this.routeTo(routesInfo.about);
          }}
        >
          {routesInfo.about.name}
        </button>
        <button
          onClick={() => {
            this.routeTo(routesInfo.contact);
          }}
        >
          {routesInfo.contact.name}
        </button>
        <p>All rights reserved.© 2023</p>
      </footer>
    );
  }
}

export { FooterComponent };
