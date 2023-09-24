import React, { createContext, useReducer } from "react";
export const FormOpt = {
  NEW_SEARCH: "new_search",
  UPDATE_SEARCH: "update_search",
};
const INITIAL_STATE = JSON.parse(localStorage.getItem("book_info")) || {
  city: [undefined],
  from: undefined,
  to: undefined,
  guest: undefined,
  rooms: undefined,
  adults: undefined,
  children: undefined,
  price: 0,
  days: 1,
  betDates: [],
  roomnumber:[],

};
const BookReducer = (state, action) => {
  switch (action.type) {
    case FormOpt.NEW_SEARCH:
      localStorage.setItem("book_info", JSON.stringify(action.payload));
      return action.payload;
    case FormOpt.UPDATE_SEARCH:
      const {payload} = action                                                                  
    
      localStorage.setItem(
        "book_info",
        JSON.stringify({...state,...payload})
      );
      return {...state,...payload};

      case 'reset': 
      localStorage.removeItem('book_info');
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

export const BookContextProvider = createContext();

const FormContext = ({ children }) => {
  const [bookInfo, dispatch] = useReducer(BookReducer, INITIAL_STATE);
  return (
    <BookContextProvider.Provider value={{ bookInfo, dispatch }}>
      {children}
    </BookContextProvider.Provider>
  );
};

export default FormContext;
