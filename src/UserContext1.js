import React, { createContext, useContext, useReducer } from 'react';
const UserContext1=createContext(
    {
        user:{
            isAuthenticated: false,
            userRole: null,
        }
    }
);
export default UserContext1
