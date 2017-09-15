import React, { Component } from 'react';
import Login from '../pages/Login';

class AuthLayout extends Component {
    render() {
        return(
            <div className="login">
                <Login />
            </div>
        );
    }
}

export default AuthLayout;