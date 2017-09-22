import React, { Component } from 'react';
import { 
    Breadcrumb,
    Table, 
    Avatar,
    Row,
    Layout, 
    Button, 
    Modal 
} from 'antd';

const { Content } = Layout;

const columns = [
    {
        title: 'Patient No',
        dataIndex: 'patient_no',
        key: 'patient_no',
    }, 
    {
        title: 'Photo',
        dataIndex: 'photo',
        key: 'photo',
    }, 
    {
        title: 'Patient Name',
        dataIndex: 'name',
        key: 'name',
    }, 
    {
        title: 'Last Visited',
        dataIndex: 'last_visited',
        key: 'last_visited',
    }, 
    {
        title: 'Last Doctor',
        dataIndex: 'last_doctor',
        key: 'last_doctor',
    }, 
    {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
    }, 
    {
        title: 'Date Added',
        dataIndex: 'date_added',
        key: 'date_added',
    }, 
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button icon='arrow-right'></Button>
            </span>
        ),
    }
];

const data = [
    {
        key: '1',
        patient_no:'2017001',
        photo: <Avatar size='large' src='http://loremflickr.com/320/240/paris,girl/all'/>,
        name: 'John Brown',
        last_visited: 'Aug 07, 2017',
        last_doctor: 'Dr. Bush Bustamante',
        balance: 'P 0.00',
        date_added: 'Aug 04, 2017'
    }, {
        key: '2',
        patient_no:'2017002',
        photo: <Avatar size='large' src='http://loremflickr.com/320/240/paris,girl/all'/>,
        name: 'John Brown',
        last_visited: 'Aug 07, 2017',
        last_doctor: 'Dr. Bush Bustamante',
        balance: 'P 0.00',
        date_added: 'Aug 04, 2017'
    }, {
        key: '3',
        patient_no:'2017003',
        photo: <Avatar size='large' src='http://loremflickr.com/320/240/paris,girl/all'/>,
        name: 'John Brown',
        last_visited: 'Aug 07, 2017',
        last_doctor: 'Dr. Bush Bustamante',
        balance: 'P 0.00',
        date_added: 'Aug 04, 2017'
    }
];

class Patients extends Component {
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
            <Layout>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Patients</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Row type='flex' justify='start' align='middle'>
                        <h1>Patient</h1>
                        <Button 
                            type='primary' 
                            shape='circle' 
                            icon='plus' 
                            size='small' 
                            onClick={this.showModal} 
                            className='margin' />
                    </Row>
                    <Row>
                        <Table columns={columns} dataSource={data} />
                    </Row>
                </Content>
                
                <Modal
                    visible={visible}
                    title='Title'
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button 
                            key='back' 
                            size='large' 
                            onClick={this.handleCancel}>Return</Button>,
                        <Button 
                            key='submit' 
                            type='primary' 
                            size='large' 
                            loading={loading} 
                            onClick={this.handleOk}>
                        Submit
                        </Button>,
                    ]}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
            </Layout>
        );
    }
}

export default Patients;