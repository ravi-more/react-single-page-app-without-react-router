import React from "react";
class PageLayoutMainComponent extends React.Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}

export { PageLayoutMainComponent };
