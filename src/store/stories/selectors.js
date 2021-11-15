export const selectStoriesbyId = (id) => {
  return (reduxState) => {
    const stories = reduxState.stories.find((story) => {
      return parseInt(id) === story.id;
    });

    return stories;
  };
};
