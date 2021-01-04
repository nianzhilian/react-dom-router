
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './store/index'

class Root extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store={store}>
                    <BrowserRouter basename="/">
                        <App />
                    </BrowserRouter>
            </Provider>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('root'))