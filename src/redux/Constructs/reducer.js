/* Actions */
import { RECEIVE_CONSTRUCTS } from './actions';

/* Initial State */
const initialState = {
  data: [],
};

/* Reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CONSTRUCTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;