import React from "react";
import { PageLayoutMainComponent } from "../components/PageLayoutMainComponent";
class ProductPage extends React.Component {
  render() {
    return (
      <PageLayoutMainComponent>
        <section className="text-center">
          <h2 className="text-center">Product</h2>
        </section>
      </PageLayoutMainComponent>
    );
  }
}
export { ProductPage };
