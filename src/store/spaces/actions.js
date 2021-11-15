import axios from "axios";

export function startLoadingSpaces() {
  // TODO
  return {
    type: "SPACES/startLoading",
  };
}

export function fetchedAllSpaces(data) {
  return {
    type: "SPACESWITHSTORIES/get",
    payload: data,
  };
}

export function fetchedSpaceById(data) {
  return {
    type: "SPACEBYID/get",
    payload: data,
  };
}

export function fetchAllSpaces() {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingSpaces());

    const response = await axios.get("http://localhost:4000/spaces");

    // console.log("action:", response);
    dispatch(fetchedAllSpaces(response.data));
  };
}

export function fetchSpaceById(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingSpaces());

    const response = await axios.get(`http://localhost:4000/spaces/${id}`);

    console.log("Space by id:", response);
    dispatch(fetchedSpaceById(response.data));
  };
}
