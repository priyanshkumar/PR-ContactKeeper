import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'professional',
        id: 1,
        name: 'Pooja Vyas',
        email: 'poojavyas@gmail.com',
        phone: '111-111-1111'
      },
      {
        type: 'personal',
        id: 2,
        name: 'RD',
        email: 'Priyansh@gmail.com',
        phone: '7057337875'
      },
      {
        type: 'personal',
        id: 3,
        name: 'PR',
        email: 'Priyansh@gmail.com',
        phone: '7057337875'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
};
