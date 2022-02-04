import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { FETCH_COMMENTS_ERROR, FETCH_COMMENTS_SUCCESS } from './actions';
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
  edit: false,
  editID: '',
  reply: false,
  replyID: '',
  messages: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

    await axios.patch(`${url}/${id}`, replyObj);

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

    await axios.post(url, messageObj);

    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, createReply, createMessage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
