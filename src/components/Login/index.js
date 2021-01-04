import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {add} from '../../actions/index'
import {routes} from '../../routes/index'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idno: '',
            pwd: ''
        }

        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleClick = (e)=>{
        alert(123)
    }
    submit(e) {
        localStorage.setItem('token','123')
        this.props.history.push('/')
        e.preventDefault();
        this.props.onClick(routes)
    }
    componentDidMount() {
        console.log(this.props)
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState(
            {
                [name]: value
            }
        )
    }
    render() {
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (routes) => {
            dispatch(add(routes))
        }
    }
}

export default connect(null,mapDispatchToProps)(Login)