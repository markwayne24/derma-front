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
import TopBar from './components/TopBar';

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
                <TopBar 
                    scrollHeight={150} 
                    actions={actions}
                    match={match}
                    imageUrl='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    name='John Butil'
                    patientNo='2017001'
                    age={25}
                    gender='male'
                    civilStatus='Married'
                    contactNo='09123456789'
                    />
                <Content className='content-top'>
                    <Row type='flex' justify='space-around' align='middle'>
                        <Col xs={6} md={2}>
                            <Avatar id='avatar-records' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                        <Col xs={6} md={4} >
                            <h3><b>John Butil</b></h3>
                            <h4 className='grey-bold'>Patient No. 2017001</h4>
                        </Col>
                        <Col xs={6} md={4}>
                            <h4 className='grey-bold'>Age: 25</h4>
                            <h4 className='grey-bold'>Gender: Male</h4>
                        </Col>
                        <Col xs={6} md={4}>
                            <h4 className='grey-bold'>Civil Status: Married</h4>
                            <h4 className='grey-bold'>Contact Number: 09123456789</h4>
                        </Col>
                        <Col xs={6} md={2}>
                            <Dropdown overlay={<Actions menus={actions} match={match} />} trigger={['click']}>
                                <Button type='primary' style={{ margin: 5 }}>
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
                        mode='horizontal'>
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
                                <Route key={i} exact={record.exact} path={`${match.url}${record.url}`} component={record.component} />
                            )}
                        </Switch>
                    </Content>
                </Content>
            </Layout>
        );
    }
}

export default PatientRecords;