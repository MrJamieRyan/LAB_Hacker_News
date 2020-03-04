import React from 'react'

const StoryDetail = (props) => {

  if (!props.story) return null;

  return (
    <section>
      <h3>Headline: {props.story.title} </h3>
      <h4>Story Score: {props.story.score} </h4>
      <h4>Story URL: {props.story.url} </h4>
    </section>
  )
}

export default StoryDetail