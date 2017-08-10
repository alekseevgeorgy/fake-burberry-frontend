import React, { Component } from "react";
import "normalize.css";
import "flexboxgrid2";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
