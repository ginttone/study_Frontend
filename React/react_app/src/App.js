// class type
import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <hr />
        <TOC></TOC>
        <hr />
        <Content
          title="HTML"
          desc="HTML is Hyper Text Markup Language"
        ></Content>
      </div>
    );
  }
}

export default App;
