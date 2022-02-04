import { FETCH_COMMENTS_ERROR, FETCH_COMMENTS_SUCCESS } from './actions';

const reducer = (state, { type, payload }) => {
  if (type === FETCH_COMMENTS_SUCCESS) {
    return { ...state, loading: false, error: false, messages: payload };
  }
  if (type === FETCH_COMMENTS_ERROR) {
    return { ...state, loading: false, error: true, messages: [] };
  }
  return state;
};

export default reducer;
