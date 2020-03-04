import React from 'react';

const StorySelector = (props) => {
  const options = props.stories.map(story => {
    return <option value={story.storyID} key={story.storyID}>{story.title}
    </option>
  })

  function handleChange(event) {
    props.onStorySelected(event.target.value)
  }

  return (
    <select id="story-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default"> Choose a Story...</option>
      {options}
    </select>
  )

}

export default StorySelector