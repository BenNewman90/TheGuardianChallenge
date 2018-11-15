import React, { Component } from "react";
import { TabDiv } from "./tabs.style";

class Tabs extends Component {
  render() {
    return (
      <TabDiv onClick={() => this.props.changeTab(this.props.storyType)}>
        {this.props.title}
      </TabDiv>
    );
  }
}

export default Tabs;
