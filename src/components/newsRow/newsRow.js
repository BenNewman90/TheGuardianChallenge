import React, { Component } from "react";
import { RowDiv } from "./newsRow.style";

class newsRow extends Component {
  render() {
    return (
      <RowDiv href={this.props.webUrl}>
        <p>{this.props.number}</p>
        <p href={this.props.webUrl}>{this.props.webTitle}</p>
      </RowDiv>
    );
  }
}

export default newsRow;
