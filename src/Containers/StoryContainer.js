import React, { Component } from 'react';
// import StorySelector from "../Componen ts/StorySelector"


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
      .then(console.log)


    // .then(stories => this.setState({ stories: stories }))
    // .catch(error => console.error)
  }

  componentDidUpdate() {
    fetch(this.state.selectedStoryID)
      .then(response => response.json())
      .then(storyObject => this.setState({ selectedStory: storyObject }))
      .catch(err => console.error)
  }

  render() {
    return (
      <article>
        <h2> This is the Story Container</h2>
        {/* <StorySelector /> */}
      </article>
    );
  }
}



export default StoryContainer

