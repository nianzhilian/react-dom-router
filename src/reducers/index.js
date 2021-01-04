import React from 'react';
import { combineReducers } from 'redux';
import todos from './todo'

// const todoApp = combineReducers({visiblityFilter,todos})
const todoApp = combineReducers({
    routes:todos
})
export default todoApp