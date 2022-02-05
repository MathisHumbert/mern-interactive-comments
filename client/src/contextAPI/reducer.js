import {
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  TOGGLE_DELETE_ASIDE,
  USER_LOGIN,
  USER_LOGOUT,
} from './actions';

const reducer = (state, { type, payload }) => {
  if (type === USER_LOGIN) {
    return { ...state, mounted: true, user: payload };
  }
  if (type === USER_LOGOUT) {
    return { ...state, mounted: false, user: {} };
  }
  if (type === TOGGLE_DELETE_ASIDE) {
    return {
      ...state,
      deleteAside: !state.deleteAside,
      deleteID: payload.id,
      deleteReplyID: payload.replyID,
    };
  }
  if (type === FETCH_COMMENTS_SUCCESS) {
    return { ...state, loading: false, error: false, messages: payload };
  }
  if (type === FETCH_COMMENTS_ERROR) {
    return { ...state, loading: false, error: true, messages: [] };
  }

  return state;
};

export default reducer;
