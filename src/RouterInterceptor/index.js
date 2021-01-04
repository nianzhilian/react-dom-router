/**
 * 路由拦截器
 */
import React ,{Suspense}from 'react';
import { NoPage } from '../routes/index'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux';
import {routersConfig} from '../routes/index'


class RouterInterceptor extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {routes} = this.props;
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
                                    console.log(routerProps.location)
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
                                            if(routerProps.location.pathname=='/'){
                                               return <Redirect
                                                    to={{
                                                        pathname: "/login",
                                                        state: { from: routerProps.location },
                                                    }}
                                                />
                                            }
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

const mapStateToProps = (state, ownProps) => {
    return {
        routes: [...state.routes,...routersConfig]
    }
}

export default connect(mapStateToProps)(RouterInterceptor)