import React from "react";
import { PageLayoutMainComponent } from "../components/PageLayoutMainComponent";
class HomePage extends React.Component {
  render() {
    return (
      <PageLayoutMainComponent>
        <section className="text-center">
          <h2>Welcome</h2>
        </section>
      </PageLayoutMainComponent>
    );
  }
}

export { HomePage };
