/**
 * 路由拦截器
 */
import React ,{Suspense}from 'react';
import { NoPage } from '../routes/index'
/**
 * 路由上下文
 * 好处是不需要一层一层的通过props往下传递路由数组
 */
import {RoutesContext} from '../RoutesContext/index'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'

class RouterInterceptor extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        console.log(localStorage.getItem('token'))
    }
    render() {
        const {routes} = this.context
        return (
            <Suspense fallback={<div>正在加载中</div>}>
                <Switch>
                    {routes.map((item, i) => {
                        return (
                            <Route
                                path={item.path}
                                key={i}
                                exact={item.exact}
                                render={(routerProps) => {
                                    //item.isAuth = localStorage.getItem('token')
                                    if (item.isAuth) {
                                        if (item.children) {
                                            let location = routerProps.location;
                                            let isMatch = item.children.find((obj) => {
                                                return item.path + obj.path == location.pathname;
                                            });
                                            if (isMatch) {
                                                return (
                                                    <item.component {...routerProps} pitem={item} routes={item.children} />
                                                );
                                            } else {
                                                return <Route path="*" component={NoPage} />;
                                            }
                                        } else {
                                            return <Redirect to={item.redirect} />;
                                        }
                                    } else {
                                        if (item.hidden) {
                                            return <item.component {...routerProps} />;
                                        }
                                        return (
                                            <Redirect
                                                to={{
                                                    pathname: "/login",
                                                    state: { from: routerProps.location },
                                                }}
                                            />
                                        );
                                    }
                                }}
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        )
    }
}

RouterInterceptor.contextType = RoutesContext

export default RouterInterceptor