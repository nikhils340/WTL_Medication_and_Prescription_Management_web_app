// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  isAuthenticated: false,
  userRole: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, userRole: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, userRole: null };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = (role) => dispatch({ type: 'LOGIN', payload: role });
  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <UserContext.Provider value={{ userState: state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
