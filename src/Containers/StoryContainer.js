import React, { Component } from 'react';
import StorySelector from "../Components/StorySelector"
import StoryDetail from "../Components/StoryDetail"


class StoryContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      selectedStoryID: ''
    };
    this.handleStorySelected = this.handleStorySelected.bind(this)
  }



  handleStorySelected(storyID) {
    this.setState({ selectedStoryID: storyID })
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
  }

  getSelectedStory() {
    const selectedStory = this.state.stories.find(story => {
      return story.storyID === this.state.selectedStoryID
    })

    return selectedStory
  }

  render() {
    return (
      <article>
        <h1> HackerNews</h1>
        <StorySelector stories={this.state.stories}
          onStorySelected={this.handleStorySelected} />
        <StoryDetail story={this.getSelectedStory()} />
      </article>
    );
  }
}




export default StoryContainer
