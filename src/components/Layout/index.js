/*
 * @Author: your name
 * @Date: 2020-12-28 11:07:20
 * @LastEditTime: 2020-12-28 15:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base-config\src\components\Layout\index.js
 */
import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {RoutesContext} from '../../RoutesContext/index'

export default class extends React.Component {
    static contextType = RoutesContext
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(){
        let {change} = this.context
        let {history} = this.props
        localStorage.removeItem('token')
        history.replace('/login')
        change()
    }
    render() {
        const { children, routes, pitem } = this.props
        return (
            <>
                <div>
                    头部
                    <button onClick={this.logout}>退出</button>
            </div>
                <Switch>
                    {routes.map((route, j) => {
                        return (
                            <Route
                                path={pitem.path + route.path}
                                key={j}
                                exact={route.exact}
                                component={(childRoutes) => {
                                    return <route.component {...childRoutes} />;
                                }}
                            />
                        );
                    })}
                </Switch>
                <div>底部</div>
            </>
        )
    }
}