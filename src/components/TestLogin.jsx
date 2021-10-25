// import React from "react";

// function test() {
//   return <div></div>;
// }

// export default test;

import React, { Component } from "react"

export class TestLogin extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }
    login = () => {
        console.log(this.state);
    }
    changeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }
    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render () {
        const { username, password } = this.state
        return (
            <div>
                用户名：<input name='username' value={username} onChange={this.changeValue} type="text" /><br />
                密码：<input name='password' value={password} onChange={this.changeValue} type="text" /><br />
                <button onClick={this.login}>登录</button>
            </div>
        )
    }
}

export default TestLogin
