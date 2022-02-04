import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { FETCH_COMMENTS_ERROR, FETCH_COMMENTS_SUCCESS } from './actions';
import reducer from './reducer';

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
      const { data } = await axios('/api/v1/comments');
      dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_COMMENTS_ERROR });
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
