import React, { Component } from "react";
import { TableDiv, TabsDiv } from "./newsTable.style";

import Tabs from "../tabs/tabs";
import NewsRow from "../newsRow/newsRow";
import getGuardianNews from "../../logic";

class NewsTable extends Component {
  constructor() {
    super();
    this.state = {
      footballStories: [],
      travelStories: [],
      uknewsStories: []
    };
  }
  componentDidMount() {
    Promise.all([
      getGuardianNews("football"),
      getGuardianNews("travel"),
      getGuardianNews("uk-news")
    ])
      .then(data => {
        this.setState({
          footballStories: data[0],
          travelStories: data[1],
          uknewsStories: data[2]
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const storiesStr = this.props.storyType;
    const stories = this.state[storiesStr];
    if (stories.length === 0) {
      return (
        <div>
          <h1>gimme a sec...just finding the data</h1>
        </div>
      );
    } else {
      return (
        <TableDiv>
          <TabsDiv>
            <Tabs
              title="Football"
              changeTab={this.props.changeTab}
              storyType="footballStories"
            />
            <Tabs
              title="Travel"
              changeTab={this.props.changeTab}
              storyType="travelStories"
            />
            <Tabs
              title="UK News"
              changeTab={this.props.changeTab}
              storyType="uknewsStories"
            />
          </TabsDiv>
          {stories.map((story, index) => {
            return (
              <NewsRow
                key={index}
                number={index + 1}
                webTitle={story.webTitle}
                webUrl={story.webUrl}
              />
            );
          })}
        </TableDiv>
      );
    }
  }
}

export default NewsTable;
