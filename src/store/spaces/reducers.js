const initialState = {
  loading: true,
  spaces: [],
};

export default function spaceReducer(state = initialState, action) {
  switch (action.type) {
    case "SPACES/startLoading": {
      return {
        ...state,
        loading: false,
      };
    }
    case "SPACESWITHSTORIES/get": {
      return {
        ...state,
        spaces: action.payload,
      };
    }
    case "SPACEBYID/get": {
      console.log("Am I here?", action.payload);
      return {
        ...state,
        spaceDetails: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
