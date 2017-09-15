import React, { Component } from 'react';
import { Breadcrumb, Table, Icon, Row, Layout, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Icon type='team' />
                <Link to='www.test.com'>Action 一 {record.name}</Link>
                <span className="ant-divider" />
                <a href="">Delete</a>
                <span className="ant-divider" />
                <a href="" className="ant-dropdown-link">
                    More actions <Icon type="down" />
                </a>
            </span>
        ),
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
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
                        <Button type="primary" shape="circle" icon="plus" size='small' onClick={this.showModal} className='margin' />
                    </Row>
                    <Row>
                        <Table columns={columns} dataSource={data} />
                    </Row>
                </Content>
                
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
            </Layout>
        );
    }
}

export default Patients;