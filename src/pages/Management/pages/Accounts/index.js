import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Accounts extends Component{
    render() {
        return(
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Management</Breadcrumb.Item>
                    <Breadcrumb.Item>Accounts</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    
                </div>
            </div>
        );
    }
}

export default Accounts;