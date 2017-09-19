// @flow

import React, { Component } from 'react';
import { Table, Icon, Button, Popconfirm } from 'antd';
import './style.css';

const columns = [
    {
        title: 'Treatment Date',
        dataIndex: 'treatment_date',
        key: 'treatment_date',
    }, 
    {
        title: 'Injector',
        dataIndex: 'injector',
        key: 'injector',
    }, 
    {
        title: 'Two weeks follow-up visit date',
        dataIndex: 'visit_date',
        key: 'visit_date',
    }, 
    {
        title: 'Next Appointment date booked',
        dataIndex: 'date_booked',
        key: 'date_booked',
    }, 
    {
        title: 'First JUDERM Treatment',
        dataIndex: 'first_juvederm_treatment',
        key: 'first_juvederm_treatment',
    }, 
    {
        title: 'Pre-photo taken',
        dataIndex: 'pre_photo_taken',
        key: 'pre_photo_taken',
    },
    {
        title: 'Post-photo taken',
        dataIndex: 'post_photo_taken',
        key: 'post_photo_taken',
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
        treatment_date: 'August 21, 2017',
        injector: 'test',
        visit_date: 'Sept 4, 2017',
        date_booked: 'Sept 4, 2017',
        first_juvederm_treatment: 'test',
        pre_photo_taken: 'Yes',
        post_photo_taken: 'Yes',
    },
    {
        key: '2',
        treatment_date: 'August 21, 2017',
        injector: 'test',
        visit_date: 'Sept 4, 2017',
        date_booked: 'Sept 4, 2017',
        first_juvederm_treatment: 'test',
        pre_photo_taken: 'Yes',
        post_photo_taken: 'Yes',
    },
    {
        key: '3',
        treatment_date: 'August 21, 2017',
        injector: 'test',
        visit_date: 'Sept 4, 2017',
        date_booked: 'Sept 4, 2017',
        first_juvederm_treatment: 'test',
        pre_photo_taken: 'Yes',
        post_photo_taken: 'Yes',
    },
    {
        key: '4',
        treatment_date: 'August 21, 2017',
        injector: 'test',
        visit_date: 'Sept 4, 2017',
        date_booked: 'Sept 4, 2017',
        first_juvederm_treatment: 'test',
        pre_photo_taken: 'Yes',
        post_photo_taken: 'Yes',
    }
];

class TreatmentPlan extends Component{
    render(){
        return(
            <div className='records-content'>
                <h2>
                    F.A.M.I Report 
                    <Button type="primary" shape="circle" icon="plus" size='large' className='margin' />
                </h2>
                <Table columns={columns} dataSource={data} />
                <h2>
                    BOTOX Treatment Report
                    <Button type="primary" shape="circle" icon="plus" size='large' className='margin' />
                </h2>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default TreatmentPlan;