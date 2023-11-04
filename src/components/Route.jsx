import React from "react";
class Route extends React.Component {
  render() {
    if (this.props.routeInfo.url === this.props.pathName) {
      if (this.props.routeInfo.title !== undefined) {
        document.title = this.props.routeInfo.title;
      } else {
        document.title = "SPA Web App";
      }
    }
    return this.props.routeInfo.url === this.props.pathName ? (
      <this.props.component theme={this.props.theme} />
    ) : undefined;
  }
}

export { Route };
