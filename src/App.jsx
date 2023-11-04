import React from "react";
import { Route } from "./components/Route";
import { HeaderComponent } from "./components/HeaderComponent";
import { HomePage } from "./pages/HomePage";
import "./assets/css/common.css";
import { FooterComponent } from "./components/FooterComponent";
import { routesInfo } from "./data/routesInfo";
import { DropdownPage } from "./pages/DropdownPage";
import { ProductPage } from "./pages/ProductPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactUsPage } from "./pages/ContactUsPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: window.location.pathname,
    };
    this.routeTo = this.routeTo.bind(this);
  }
  routeTo(url) {
    window.history.pushState("page2", "Title", url);
    this.setState({
      pathName: window.location.pathname,
    });
  }
  render() {
    return (
      <div className="main-body">
        <HeaderComponent
          pathName={this.state.pathName}
          routeTo={(url) => this.routeTo(url)}
        />
        <Route
          pathName={this.state.pathName}
          routeInfo={routesInfo.home}
          component={HomePage}
        />
        <Route
          pathName={this.state.pathName}
          routeInfo={routesInfo.dropdown}
          component={DropdownPage}
        />
        <Route
          pathName={this.state.pathName}
          routeInfo={routesInfo.product}
          component={ProductPage}
        />
        <Route
          pathName={this.state.pathName}
          routeInfo={routesInfo.about}
          component={AboutUsPage}
        />
        <Route
          pathName={this.state.pathName}
          routeInfo={routesInfo.contact}
          component={ContactUsPage}
        />
        <FooterComponent
          pathName={this.state.pathName}
          routeTo={(url) => this.routeTo(url)}
        />
      </div>
    );
  }
}

export default App;
