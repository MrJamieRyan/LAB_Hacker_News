import React, { Component } from 'react';
// import StorySelector from "../Components/StorySelector"
import StoryDetail from "../Components/StoryDetail"


class StoryContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      selectedStoryID: ''
    };
  }

  componentDidMount() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"

    fetch(url)
      .then(response => response.json())
      .then(storyIDs => fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIDs[0]}.json`))
      .then(response => response.json())
      .then(stories => this.setState({ stories: stories }))
      .catch(error => console.error)
  }

  render() {
    return (
      <article>
        <h1> HackerNews</h1>
        <StoryDetail story={this.state.stories} />
      </article>
    );
  }
}



export default StoryContainer
