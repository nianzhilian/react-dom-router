import React from 'react';
import { connect } from 'react-redux';
import {setVisibilityFilter} from '../actions/index'
import { NavLink } from 'react-router-dom';




const FilterLink = (props)=>{
    let {filter,children} = props
    return (
        <NavLink to={filter} activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>
            {children}
        </NavLink>
    )
}

export default FilterLink