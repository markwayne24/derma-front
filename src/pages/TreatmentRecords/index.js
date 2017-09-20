// @flow

import React, { Component } from 'react';
import { Table, Icon, Button, Popconfirm } from 'antd';
import './style.css';

const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    }, 
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
    }, 
    {
        title: 'Diagnosis',
        dataIndex: 'diagnosis',
        key: 'diagnosis',
    }, 
    {
        title: 'Treatment',
        dataIndex: 'treatment',
        key: 'treatment',
    }, 
    {
        title: 'Remarks',
        dataIndex: 'remarks',
        key: 'remarks',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button><Icon type="printer" /></Button>
                <span className="ant-divider" />
                <Popconfirm title="Are you sure you want to cancel?">
                    <Button type='danger'><Icon type="close" />
                        
                        
                    </Button>
                </Popconfirm>
            </span>
        ),
}];

const data = [
    {
        key: '1',
        date: 'August 21, 2017',
        image: 'test',
        diagnosis: 'Test Diagnosis',
        treatment: 'Test Treatments',
        remarks: 'test',
    },
    {
        key: '2',
        date: 'August 22, 2017',
        image: 'test',
        diagnosis: 'Test Diagnosis',
        treatment: 'Test Treatments',
        remarks: 'test',
    },
    {
        key: '3',
        date: 'August 23, 2017',
        image: 'test',
        diagnosis: 'Test Diagnosis',
        treatment: 'Test Treatments',
        remarks: 'test',
    },
    {
        key: '4',
        date: 'August 24, 2017',
        image: 'test',
        diagnosis: 'Test Diagnosis',
        treatment: 'Test Treatments',
        remarks: 'test',
    }
];

class TreatmentPlan extends Component{
    render(){
        return(
            <div className='records-content'>
                <h2>
                    Treatment Lists
                    <Button 
                        type='primary' 
                        shape='circle' 
                        icon='plus'
                        className='margin' />
                </h2>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default TreatmentPlan;