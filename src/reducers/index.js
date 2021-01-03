import React from 'react';
import { combineReducers } from 'redux';
import visiblityFilter from './visiblityFilter'
import todos from './todo'

// const todoApp = combineReducers({visiblityFilter,todos})
const todoApp = combineReducers({
    filter:visiblityFilter,
    todos:todos
})
console.log(todoApp.toString())
export default todoApp