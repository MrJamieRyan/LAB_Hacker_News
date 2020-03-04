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

    // `https://hacker-news.firebaseio.com/v0/item/${storyIDs[0]}.json`

    const convertUrlsToFetches = tenStoryUrls => tenStoryUrls.map(storyUrl => fetch(storyUrl))

    const convertResponseToJSON = response => response.json()

    fetch(url)
      .then(convertResponseToJSON)
      .then(storyIDs => storyIDs.map(storyID => `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`))
      .then(storyUrls => storyUrls.slice(0, 10))
      .then(convertUrlsToFetches)
      .then(fetchPromises => Promise.all(fetchPromises))
      .then(responses => responses.map(response => response.json()))
      .then(resolvedPromises => Promise.all(resolvedPromises))
      .then(stories => this.setState({ stories: stories }))



    // .then(response => response.json())
    // .catch(error => console.error)
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
