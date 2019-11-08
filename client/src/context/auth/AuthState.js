import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
   
  };

  const [state, dispatch] = useReducer(authReducer, initialState);


  return (
    <ContactContext.Provider
      value={{
       
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
