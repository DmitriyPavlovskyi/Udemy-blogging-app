import { FETCH_POSTS, FETCH_POST } from './constants';

const initialState = { all: [], post: null };

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload.data};
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };

    default:
      return state;
  }
}
