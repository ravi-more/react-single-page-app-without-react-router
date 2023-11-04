import React from "react";
import { PageLayoutMainComponent } from "../components/PageLayoutMainComponent";

class DropdownPage extends React.Component {
  render() {
    let params = new URLSearchParams(window.location.search);
    let menuname = params.get("menuname");
    return (
      <PageLayoutMainComponent>
        <section className="text-center">
          <h2>{menuname}</h2>
        </section>
      </PageLayoutMainComponent>
    );
  }
}

export { DropdownPage };
