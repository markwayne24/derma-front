import React, { Component } from 'react';
import { 
    Breadcrumb,
    Icon, 
    Row, 
    Col, 
    Avatar, 
    Button,
    Card,
    Modal 
} from 'antd';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './style.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const data = [
    {
        patientNo: '2017001',
        photo: 'http://loremflickr.com/90/90/paris,girl/all',
        patientName: 'John Brown',
        practitioner: 'Dr. Strange Vergara',
        chiefComplaint: 'Test',
    }, 
    {
        patientNo: '2017002',
        photo: 'http://loremflickr.com/90/90/paris,girl/all',
        patientName: 'Johny Bravo',
        practitioner: 'Dr. Strange Vergara',
        chiefComplaint: 'Test',
    },
    {
        patientNo: '2017003',
        photo: 'http://loremflickr.com/90/90/paris,girl/all',
        patientName: 'Dura Explorer',
        practitioner: 'Dr. Strange Vergara',
        chiefComplaint: 'Test2',
    },
    {
        patientNo: '2017004',
        photo: 'http://loremflickr.com/90/90/paris,girl/all',
        patientName: 'John Lenon',
        practitioner: 'Dr. Strange Vergara',
        chiefComplaint: 'Test3',
    },
    {
        patientNo: '2017005',
        photo: 'http://loremflickr.com/90/90/paris,girl/all',
        patientName: 'John Brown',
        practitioner: 'Dr. Strange Vergara',
        chiefComplaint: 'Test4',
    },
    {
        patientNo: '2017006',
        photo: 'http://loremflickr.com/90/90/paris,girl/all',
        patientName: 'Luis Naguit',
        practitioner: 'Dr. Strange Vergara',
        chiefComplaint: 'Test5',
    },
];

const actions = ()=> {
    return(
        <Col>
            <Button className='btn-space'><Icon type='eye' /></Button>
            <Button ><Icon type='fork' /></Button>
            <Button type='primary' className='btn-space'><Icon type='check' /></Button>
            <Button type='danger' className='btn-space'><Icon type='cross' /></Button>
        </Col>
    );
};

class Dashboard extends Component {
    state = {
        loading: false,
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading } = this.state;

        return(
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Appointments</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Row gutter={30}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Row type='flex' justify='space-between' align='middle'>
                                <Col style={{display:'flex', alignItems:'center'}}>
                                    <Row>
                                        <Col xs={24} md={8} className='flex-container'>
                                            <Avatar 
                                                size='small' 
                                                className='card-dash yellow'>0</Avatar>
                                            <h4 className='space-between'>pending</h4>
                                        </Col>
                                       
                                        <Col xs={24} md={8} className='flex-container'>
                                            <Avatar 
                                                size='small' 
                                                className='card-dash blue'>0</Avatar>
                                            <h4 className='space-between'>complete</h4>
                                        </Col>
                                        <Col xs={24} md={8} className='flex-container'>
                                            <Avatar 
                                                size='small' 
                                                className='card-dash red'>0</Avatar>
                                            <h4 className='space-between'>cancelled</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Button type="primary" shape="circle" icon="plus" size='large' onClick={this.showModal} className='margin' />
                                </Col>
                            </Row>
                            <Row className='table-max-height'>
                                {data.map((data, i) =>
                                    <Col key={i}>
                                        <div style={{ background: '#ECECEC', padding: '10px' }}>
                                            <Card 
                                                title={data.patientName} 
                                                bordered={true} 
                                                extra={actions} 
                                                style={{ width: '100%' }}>
                                                <Row 
                                                    type="flex" 
                                                    justify="space-between" 
                                                    align="middle">
                                                    <Col style={{display:'flex', alignItems:'center',justify:'space-between', margin:'auto'}}>
                                                        <Avatar 
                                                            className='img-dashboard' 
                                                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                                        <div style={{marginLeft:'10px'}}>
                                                            <p className='font-bolder'>{data.patientNo}</p>
                                                            <p className='font-bold'>{data.practitioner}</p>
                                                            <p className='font-bold'>{data.chiefComplaint}</p>
                                                        </div>
                                                    </Col>
                                                    <Col style={{margin:'10px auto'}}>
                                                        <Button 
                                                            className='btn-space' 
                                                            size='large'>
                                                            <Icon type='eye' />
                                                            </Button>
                                                        <Button 
                                                            className='btn-space' 
                                                            size='large'>
                                                            <Icon type='fork' />
                                                            </Button>
                                                        <Button 
                                                            type='primary' 
                                                            className='btn-space' 
                                                            size='large'>
                                                            <Icon type='check' />
                                                            </Button>
                                                        <Button 
                                                            type='danger' 
                                                            className='btn-space' 
                                                            size='large'>
                                                            <Icon type='cross' />
                                                            </Button>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <BigCalendar
                                events={[]}
                                startAccessor='startDate'
                                endAccessor='endDate'
                                views={['month']}
                                popupOffset={{x: 10, y: 10}}
                                />
                        </Col>
                    </Row>
                    <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
                        Submit
                        </Button>,
                    ]}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Dashboard;