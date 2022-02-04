import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import {
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  TOGGLE_DELETE_ASIDE,
} from './actions';
import reducer from './reducer';
import uniqid from 'uniqid';

const user = {
  image: {
    png: './images/avatars/image-juliusomo.png',
    webp: './images/avatars/image-juliusomo.webp',
  },
  username: 'juliusomo',
};

const url = '/api/v1/comments';

const initialState = {
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
      user,
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
      user,
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
    console.log(id, replyID);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleDeleteAside,
        createReply,
        createMessage,
        editMessage,
        deleteMessage,
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
