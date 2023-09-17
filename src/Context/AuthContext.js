import FormContext from './FormContext'
import React, { createContext, useReducer } from 'react'
export const AuthOpt = {
    USER_LOGOUT: 'user_logout',
    LOGIN_USER: "login_user",
    USER_ERR: "logout_user"
}
const INITIAL_STATE = JSON.parse(localStorage.getItem('user_info')) || {
    user: null,
    loading: null,
    err: null
}
const AuthReducer = (state,action) =>{
   switch(action.type){
    case AuthOpt.USER_LOGOUT: 
    localStorage.removeItem('user_info');
    return {
        user: null,
        loading: false,
        err: null
    }
    case AuthOpt.LOGIN_USER:
        localStorage.setItem('user_info',JSON.stringify({
            user: action.payload,
            loading: false,
            err: null
        }));
        return {
            user: action.payload,
            loading: false,
            err: null
        }
    case AuthOpt.USER_ERR: 
     return {
        user: null,
        loading: false,
        err: action.payload
     }
    default: 
    return INITIAL_STATE;
   }
}

export const  AuthContextProvider = createContext();

const AuthContext = ({children}) => {
    const [authInfo,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
  return (
    <AuthContextProvider.Provider value={{authInfo,dispatch}} >
        <FormContext>
        {children}</FormContext>
    </AuthContextProvider.Provider>
  )
}

export default AuthContext