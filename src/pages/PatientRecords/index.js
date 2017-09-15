// @flow

import React, { Component } from 'react';
import { 
    Layout,
    Menu,
    Icon,
    Avatar,
    Row,
    Col,
    Dropdown,
    Button
} from 'antd';
import {
    Route,
    Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';
import Actions from './components/Actions';

import './style.css';

const { Content } = Layout;

const AsyncPatientInfo = Loadable({
    loader: () => import('../PatientInfo'),
    loading: Loading
});

const AsyncTreatmentPlan = Loadable({
    loader: () => import('../TreatmentPlan'),
    loading: Loading
});

const AsyncTreatmentRecords = Loadable({
    loader: () => import('../TreatmentRecords'),
    loading: Loading
});

const AsyncGallery = Loadable({
    loader: () => import('../Gallery'),
    loading: Loading
});

const AsyncPrescriptions = Loadable({
    loader: () => import('../Prescriptions'),
    loading: Loading
});


const records = [
    {
        name:'Patient Information',
        label: 'Patient Information',
        icon:'solution',
        url: '',
        component: AsyncPatientInfo,
        exact: true
    },
    {
        name:'Treatment Plan',
        label: 'Treatment Plan',
        icon:'medicine-box',
        url: '/treatment-plan',
        component: AsyncTreatmentPlan,
        exact: false
    },
    {
        name:'Treatment Records',
        label: 'Treatment Records',
        icon:'database',
        url: '/treatment-records',
        component: AsyncTreatmentRecords,
        exact: false
    },
    {
        name:'Gallery',
        label: 'Gallery',
        icon:'picture',
        url: '/galleries',
        component: AsyncGallery,
        exact: false
    },
    {
        name:'Prescriptions',
        label: 'Prescriptions',
        icon:'file-ppt',
        url: '/prescriptions',
        component: AsyncPrescriptions,
        exact: false
    }
];

const actions = [
    {
        key: 'complete',
        icon: 'check',
        text: 'Complete Consultation',
        url:'complete'
    },
    {
        key: 'cancel',
        icon:'close',
        text: 'Cancel Consultation',
        url:'cancel'
    },
    {
        key: 'print',
        icon:'printer',
        text: 'Print',
        url:'print'
    },
];

class PatientRecords extends Component{
    _linkTo = ({key}: any) => {
        let history = this.props.history;
        history.push(key);
    }

    render(){
        const { match } = this.props;

        return(
            <Layout>
                <Content className='content-top'>
                    <Row gutter={20} type='flex' justify='space-around' align='middle'>
                        <Col xs={12} md={4}>
                            <Avatar id='avatar-records' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                        <Col xs={12} md={4}>
                            <h1>Name: John Butil</h1>
                            <h3>Patient No. 2017001</h3>
                        </Col>
                        <Col xs={12} md={4}>
                            <h3>Age: 25</h3>
                            <h3>Gender: Male</h3>
                        </Col>
                        <Col xs={12} md={4}>
                            <h3>Civil Status: Married</h3>
                            <h3>Contact Number: 09123456789</h3>
                        </Col>
                        <Col xs={12} md={4}>
                            <Dropdown overlay={<Actions menus={actions} match={match} />} trigger={['click']}>
                                <Button type='primary' style={{ marginLeft: 8 }}>
                                    Actions <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </Content>
                <Content className='content-body'>
                    <Menu
                        defaultSelectedKeys={[`${match.url}`]}
                        onClick={this._linkTo}
                        mode="horizontal">
                            {records.map((record) =>
                                <Menu.Item key={`${match.url}${record.url}`}>
                                    <Icon type={record.icon} />
                                    {record.label}
                                </Menu.Item>
                            )}
                    </Menu>
                    <Content>
                        <Switch>
                            {records.map((record, i)=>
                                <Route key={i} exact={record.exact} path={`${match.url}/${record.url}`} component={record.component} />
                            )}
                        </Switch>
                    </Content>
                </Content>
            </Layout>
        );
    }
}

export default PatientRecords;