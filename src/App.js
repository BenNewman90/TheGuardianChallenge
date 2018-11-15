import React, { Component } from "react";
import NewsTable from "./components/newsTable/newsTable";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      storyType: "footballStories"
    };
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab(storyType) {
    console.log("made it ot changeTab");
    this.setState({ storyType: storyType });
  }
  render() {
    return (
      <NewsTable storyType={this.state.storyType} changeTab={this.changeTab} />
    );
  }
}

export default App;
