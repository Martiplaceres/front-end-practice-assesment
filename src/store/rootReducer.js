import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaceReducer from "./spaces/reducers";
import storiesReducer from "./stories/reducers";

export default combineReducers({
  appState,
  user,
  spaceReducer,
  storiesReducer,
});
