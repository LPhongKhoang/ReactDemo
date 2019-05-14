import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

/*
We'll start by specifying the initial state. 
Redux will call our reducer with an undefined state for the first time. 
This is our chance to return the initial state of our app (just the shape of state, in default case)
*/
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
