import {
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  TOGGLE_DELETE_ASIDE,
  USER_SELECTED,
} from './actions';

const reducer = (state, { type, payload }) => {
  if (type === FETCH_COMMENTS_SUCCESS) {
    return { ...state, loading: false, error: false, messages: payload };
  }
  if (type === FETCH_COMMENTS_ERROR) {
    return { ...state, loading: false, error: true, messages: [] };
  }
  if (type === TOGGLE_DELETE_ASIDE) {
    return {
      ...state,
      deleteAside: !state.deleteAside,
      deleteID: payload.id,
      deleteReplyID: payload.replyID,
    };
  }
  if (type === USER_SELECTED) {
    return { ...state, mounted: true, user: payload };
  }

  return state;
};

export default reducer;
