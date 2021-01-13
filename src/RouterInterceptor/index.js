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
import {routersConfig,config} from '../routes/index'


class RouterInterceptor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            completeRoutes:[]
        }
        //this.filterRoutes = this.filterRoutes.bind(this)
    }
    componentDidMount(){
        
    }
    componentDidUpdate(prevP){
        console.log(prevP)
    }
    filterRoutes(arr){ 
        return arr.map((item,index)=>{
            let a = [];
            if(item.children){
                a = this.filterRoutes(item.children)
            }
            return item.children? {...item,component:config[item.component],children:a}:{...item,component:config[item.component]}
        })
    }
    render() {
        const {routes} = this.props;
        const arr = Array.from(routes)
        let completeRoutes = this.filterRoutes(arr)
        console.log(routes)
        return (
            <Suspense fallback={<div>正在加载中</div>}>
                <Switch>
                    {completeRoutes.map((item, i) => {
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
                                            if(routerProps.location.pathname!='/login'){
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
    console.log(state)
    return {
        routes: [...state.routes,...routersConfig]
    }
}

export default connect(mapStateToProps)(RouterInterceptor)