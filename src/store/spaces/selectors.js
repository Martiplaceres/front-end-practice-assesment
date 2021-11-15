export const selectSpaces = (reduxState) => reduxState.spaceReducer.spaces;

export const selectSpaceById = () => {
  return (reduxState) => {
    console.log("Redux State", reduxState);
    return reduxState.spaceReducer.spaceDetails;
  };
};
