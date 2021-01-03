/*
 * @Author: your name
 * @Date: 2020-12-28 10:12:08
 * @LastEditTime: 2020-12-28 10:23:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base-config\src\components\Login\index.js
 */
import React, { PureComponent } from 'react'
import {RoutesContext} from '../../RoutesContext/index'

export default class extends React.Component{
    static contextType = RoutesContext
    constructor(props){
        super(props)
        this.state = {
            idno:'',
            pwd:''
        }
        
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    submit(e){
        let {change} = this.context
        localStorage.setItem('token',123)    
        change()
        this.props.history.push('/')
        this.props.history.listen((location)=>{
            console.log(location)
        })
        e.preventDefault()
    }
    componentDidMount(){
        
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState(
            {
                [name]:value
            }
        )
    }
    render(){
        return (
            <form onSubmit={this.submit}>
                <div>
                    <label>账号:</label>
                    <input name="idno" type="text" value={this.state.idno} onChange={this.handleChange} />
                </div>
                <div>
                    <label>密码:</label>
                    <input name="pwd" type="password" value={this.state.pwd} onChange={this.handleChange} />
                </div>
                <div>
                    <button>登陆</button>
                </div>
            </form>
        )
    }
}
