import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Reducer from './greeting/greeting';

const store = createStore(Reducer, applyMiddleware(thunk));
export default store;
