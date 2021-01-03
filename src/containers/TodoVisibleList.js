import React from 'react';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux';
import {toogleTodo} from '../actions/index'
import { createSelector } from 'reselect';



function setVisibleTodo(todos,filter){
    switch (filter) {
        case 'show_completed':
            return todos.filter(t=>t.completed)
            break;
        case 'show_uncompleted':
            return todos.filter(t=>!t.completed)
            break;
        case 'show_all':
        default:
            return todos
            break;
    }
}

const getTodos = (state,filter)=>state.todos;
const getFilter = (state,filter)=>filter;

const setVisibleTodoSelector = createSelector([getTodos,getFilter],function(todos,filter){
    console.log(filter)
    switch (filter) {
        case 'show_completed':
            return todos.filter(t=>t.completed)
            break;
        case 'show_uncompleted':
            return todos.filter(t=>!t.completed)
            break;
        case 'show_all':
        default:
            return todos
            break;
    }
})

const mapSelector = ()=>{
    return createSelector([getTodos,getFilter],function(todos,filter){
        switch (filter) {
            case 'show_completed':
                return todos.filter(t=>t.completed)
                break;
            case 'show_uncompleted':
                return todos.filter(t=>!t.completed)
                break;
            case 'show_all':
            default:
                return todos
                break;
        }
    })
}

const protecdMapStateToProps=(state,ownProps)=>{
    console.log(state)
    const setVisibleTodoSelector = mapSelector();
    const mapStateToProps = (state, ownProps) => {
        return {
            todos:setVisibleTodoSelector(state,ownProps.filter)
        }
    }
    return mapStateToProps
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos:setVisibleTodoSelector(state,ownProps.filter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (id) => {
            dispatch(toogleTodo(id))
        }
    }
}


export default connect(protecdMapStateToProps,mapDispatchToProps)(TodoList)

