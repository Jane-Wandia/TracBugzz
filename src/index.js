import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {provider} from 'react-redux';
import{congigureStores,combineReducers} from'@reduxjs/toolkit'
import App from './App';
//Reducers
import authReducer from './controllers/redux/authSlice'
import bugReducer from './controllers/Redux/bugSlice'
import userReducer from './controllers/Redux/userSlice'


const reducer = combinedReducers({
  auth:authReducer,
  bug:bugReducer,
  user:userReducer,
})

const store = configureStore({
  reducer
})


ReactDOM.render(
    <provider store={store}>
      <app/>
    </provider>,
  
 document.getElementById('root')
);




