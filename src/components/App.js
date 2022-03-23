import React from "react";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
