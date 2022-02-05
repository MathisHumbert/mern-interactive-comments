import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import reducer from './reducer';

import {
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  TOGGLE_DELETE_ASIDE,
  USER_LOGIN,
  USER_LOGOUT,
} from './actions';

const url = '/api/v1/comments';

const localUser = JSON.parse(localStorage.getItem('user')) || {};

const initialState = {
  mounted: localUser.username ? true : false,
  user: localUser,
  loading: true,
  error: false,
  messages: [],
  deleteAside: false,
  deleteID: '',
  deleteReplyID: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userLogin = (name) => {
    const user = {
      image: {
        png: `./images/avatars/image-${name}.png`,
      },
      username: name,
    };

    dispatch({ type: USER_LOGIN, payload: user });
    localStorage.setItem('user', JSON.stringify(user));
  };

  const userLogout = () => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('user');
  };

  const toggleDeleteAside = (id, replyID) => {
    dispatch({ type: TOGGLE_DELETE_ASIDE, payload: { id, replyID } });
  };

  const fetchMessages = async () => {
    try {
      const { data } = await axios(url);
      dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_COMMENTS_ERROR });
    }
  };

  const createReply = async (content, id, replyingTo) => {
    const replyObj = {
      id: uniqid(),
      content,
      createdAt: 'Today',
      score: 0,
      replyingTo,
      user: state.user,
    };

    try {
      await axios.patch(`${url}/${id}`, replyObj);
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_COMMENTS_ERROR });
    }

    fetchMessages();
  };

  const createMessage = async (content) => {
    const messageObj = {
      id: uniqid(),
      content,
      createdAt: 'Today',
      score: 0,
      user: state.user,
      replies: [],
    };

    try {
      await axios.post(url, messageObj);
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_COMMENTS_ERROR });
    }

    fetchMessages();
  };

  const editMessage = async (content, id, replyID) => {
    try {
      await axios.patch(`${url}?id=${id}&replyID=${replyID}`, {
        content,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_COMMENTS_ERROR });
    }

    fetchMessages();
  };

  const deleteMessage = async (id, replyID) => {
    try {
      await axios.delete(`${url}?id=${id}&replyID=${replyID}`);
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_COMMENTS_ERROR });
    }

    fetchMessages();
  };

  const toggleUpvotes = async (action, id, replyID) => {
    console.log(action, id, replyID);

    try {
      await axios.patch(`${url}/upvote`, { action, id, replyID: replyID });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_COMMENTS_ERROR });
    }

    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        userLogin,
        userLogout,
        toggleDeleteAside,
        createReply,
        createMessage,
        editMessage,
        deleteMessage,
        toggleUpvotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
