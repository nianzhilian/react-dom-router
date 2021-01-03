/*
 * @Author: your name
 * @Date: 2020-12-16 10:31:02
 * @LastEditTime: 2020-12-28 10:09:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base-config\src\index.jsx
 */
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import routes from './routes/index'
/**
 * 路由上下文
 * 好处是:不需要一层一层的通过props往下传递路由数组
 */
import {RoutesContext} from './RoutesContext/index'
import { object } from 'prop-types'

class Root extends React.Component{
    constructor(props){
        super(props)
        this.change = ()=>{
            this.setState((state)=>{
                return {
                    routes:state.routes.map((item,index)=>{
                        if(item.isAuth!=undefined){
                            return Object.assign({},item,{isAuth:!item.isAuth})
                        }
                        return item
                    })
                }
            })
        }
        this.state = {
            routes:routes,
            change:this.change
        }
    }
    render(){
        return (
            <RoutesContext.Provider value={this.state}>
                <BrowserRouter basename="/">
                    <App />
                </BrowserRouter>
            </RoutesContext.Provider>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('root'))