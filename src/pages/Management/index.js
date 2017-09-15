import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Management extends Component{
    render() {
        return(
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Management</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    
                </div>
            </div>
        );
    }
}

export default Management;