// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';
import filtersReducer from './filterSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

export default rootReducer;
