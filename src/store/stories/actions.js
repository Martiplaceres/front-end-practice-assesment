import axios from "axios";
import { startLoadingSpaces } from "../spaces/actions";
import { selectToken } from "../user/selectors";

export function startLoadingStories() {
  // TODO
  return {
    type: "STORIES/startLoading",
  };
}

export function getStories(data) {
  return {
    type: "STORIES/get",
    payload: data,
  };
}

export function postStory(data) {
  return {
    type: "STORY/post",
    payload: data,
  };
}

//fetching data:

export function fetchStories(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingStories());

    const response = await axios.get(`http://localhost:4000/stories/${id}`);
    console.log("my updated stories:", response);
    dispatch(getStories(response.data));
  };
}

// posting new story and getting all stories back:

export const createNewStory = (title, content, image) => {
  return async (dispatch, getState) => {
    console.log("CREATENEWSTORY");
    try {
      const response = await axios.post(
        `http://localhost:4000/stories`,
        {
          title: title,
          content: content,
          imageUrl: image,
        },
        {
          headers: {
            Authorization: `Bearer ${getState().user.token}`,
          },
        }
      );

      //const response = await axios.get(`http://localhost:4000/stories`);
      console.log("my new story:", response);
      dispatch(postStory(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
