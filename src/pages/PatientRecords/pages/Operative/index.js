import React, { Component } from 'react';
import { Table, Icon, Button, Popconfirm } from 'antd';
import './style.css';

const columns = [
    {
        title: 'Date Created',
        dataIndex: 'date_created',
        key: 'date_created',
    }, 
    {
        title: 'Pre-Operative Diagnosis',
        dataIndex: 'pre_operative_diagnosis',
        key: 'pre_operative_diagnosis',
    }, 
    {
        title: 'Surgical Procedure',
        dataIndex: 'surgical_procedure',
        key: 'surgical_procedure',
    }, 
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button><Icon type='printer' /></Button>
                <span className='ant-divider' />
                <Popconfirm title='Are you sure you want to cancel?'>
                    <Button type='danger'><Icon type='close' />
                        
                        
                    </Button>
                </Popconfirm>
            </span>
        ),
}];

const data = [
    {
        key: '1',
        date_created: 'August 21, 2017',
        pre_operative_diagnosis: 'test',
        surgical_procedure: 'Test Procedure',
    },
    {
        key: '2',
        date_created: 'August 22, 2017',
        pre_operative_diagnosis: 'test',
        surgical_procedure: 'Test Procedure',
    },
    {
        key: '3',
        date_created: 'August 23, 2017',
        pre_operative_diagnosis: 'test',
        surgical_procedure: 'Test Procedure',
    },
    {
        key: '4',
        date_created: 'August 24, 2017',
        pre_operative_diagnosis: 'test',
        surgical_procedure: 'Test Procedure',
    }
];

class Operative extends Component{
    render(){
        return(
            <div className='records-content'>
                <h2>
                    PRE/POST OPERATIVE CHECKLIST
                    <Button 
                        type='primary' 
                        shape='circle' 
                        icon='plus' 
                        className='margin' />
                </h2>
                <Table 
                    columns={columns} 
                    dataSource={data} />
                <h2>
                    OPERATIVE WORKSHEET
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

export default Operative;