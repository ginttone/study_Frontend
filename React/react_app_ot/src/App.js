// class type
import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Contents";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          desc="HTML is Hyper Text Markup Language"
        ></Content>
      </div>
    );
  }
}

export default App;
