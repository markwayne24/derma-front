import React, { Component } from 'react';
import { Spin } from 'antd';
import './style.css';

class Loading extends Component{
    render() {
        return(
            <div className="loading">
                <Spin tip="Loading..." size="large"/>
            </div>
        );
    }
}

export default Loading;