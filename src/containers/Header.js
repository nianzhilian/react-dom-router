import React from 'react';
import { connect } from 'react-redux';
import {add} from '../actions/index'

function Header({dispatch}){
  let input;
    return (
        <form onSubmit={e=>{
          e.preventDefault()
          dispatch(add(input.value))
          input.value = ""
        }}>
        <label>
          请输入:
          <input type="text" ref={node=>{
            input = node
          }} placeholder="请输入" />
        </label>
        <button type="submit">
          Add Todo
        </button>
      </form>
    )
}

export default connect()(Header)