const initialState = {
  loading: true,
  stories: [],
};

export default function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case "SPACES/startLoading": {
      return {
        ...state,
        loading: false,
      };
    }
    case "STORIES/get": {
      console.log("swen", action.payload);
      return {
        ...state,
        stories: action.payload,
      };
    }
    case "STORY/post": {
      console.log("payload new story", action.payload);
      return {
        ...state,
        stories: [...state.stories, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
