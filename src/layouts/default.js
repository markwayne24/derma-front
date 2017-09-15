// @flow

import React, { Component } from 'react';
import { 
    Layout,
    Menu, 
    Icon, 
    BackTop, 
    Dropdown, 
    Input, 
    Row, 
    Col, 
    Avatar
} from 'antd';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import {
    Route,
    Switch
} from 'react-router-dom';
import MenuTop from '../components/Menu';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const { Search } = Input;

const AsyncDashboard = Loadable({
    loader: () => import('../pages/Dashboard'),
    loading: Loading
});

const AsyncPatients = Loadable({
    loader: () => import('../pages/Patients'),
    loading: Loading
});

const AsyncManagement = Loadable({
    loader: () => import('../pages/Management'),
    loading: Loading
});

const AsyncAccounting = Loadable({
    loader: () => import('../pages/Accounting'),
    loading: Loading
});

const AsyncProcedures = Loadable({
    loader: () => import('../pages/Procedures'),
    loading: Loading
});

const AsyncAccounts = Loadable({
    loader: () => import('../pages/Accounts'),
    loading: Loading
});

const AsyncClinics = Loadable({
    loader: () => import('../pages/Clinics'),
    loading: Loading
});

const AsyncApplicationSettings = Loadable({
    loader: () => import('../pages/ApplicationSettings'),
    loading: Loading
});

const menus = [
    {
        key:'profile',
        text:'My Profile',
        icon: 'idcard',
        url:'/profile'
    },
    {
        key:'lock',
        text:'Lock',
        icon:'lock',
        url:'/lock'
    },
    {
        key:'login',
        text:'Logout',
        icon:'key',
        url:'/'
    },
];

class DefaultLayout extends Component{
    state = {
        collapsed: true,
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    linkTo = ({key}: any) => {
        let history = this.props.history;
        history.push(key);
    }

    transition = (e: any) => {
        e.preventDefault();
        let history = this.props.history;
        history.push({
          pathname: e.currentTarget.pathname,
          search: e.currentTarget.search
        });
    }

    render() {
        const { collapsed } = this.state;
        const { match } = this.props;

        return (
            <Layout>
                <Header style={{background: '#fff'}}>
                    <Row type='flex' justify='space-between' align='top'>
                        <Col span={8}>
                            <Search
                                placeholder="Search Patient"
                                style={{ marginLeft:'10px', width: 190 }}
                                onSearch={value => console.log(value)} />
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign:'center'}}>
                                <a href='/dashboard' onClick={this.transition}>
                                    <Avatar className='small-logo' shape='square'src='/img/logo-small.png'/>
                                </a>
                            </div>  
                        </Col>
                        <Col span={8}>
                            <div style={{float:'right'}}>
                                <Dropdown overlay={<MenuTop menus={menus} />} trigger={['click']} style={{display:'flex', alignItems:'middle'}}>
                                    <span className="pointer" style={{display:'flex'}}>
                                        <Avatar shape='circle' size='large' style={{margin:'10px 5px', lineHeight:'40px', backgroundColor: '#87d068'}} icon='user' />
                                        <div>
                                            Dr. Stephen Strange <Icon type="down" style={{margin:10}} /> 
                                        </div>
                                        
                                    </span> 
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Layout style={{ minHeight: '100vh', marginTop:66}}>
                    <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.toggle}
                    >
                        <Menu theme="dark" defaultSelectedKeys={[`${match.url}`]} mode="inline" onClick={this.linkTo}>
                            <Menu.Item key={`${match.url}`}>
                                <Icon type="home" />
                                <span>Dashboard</span>
                            </Menu.Item>
                            <Menu.Item key={`${match.url}/patients`}>
                                <Icon type="team" />
                                <span>Patients</span>
                            </Menu.Item>
                            <SubMenu
                            key="management"
                            title={<span><Icon type="folder" /><span>Clinic Management</span></span>}
                            >
                                <Menu.Item key={`${match.url}/management`}><Icon type="area-chart" />Clinic Management</Menu.Item>
                                <Menu.Item key={`${match.url}/management/accounting`}><Icon type="share-alt" />Accounting</Menu.Item>
                                <Menu.Item key={`${match.url}/management/procedures`}><Icon type="bars" />Procedure</Menu.Item>
                                <Menu.Item key={`${match.url}/management/accounts`}><Icon type="solution" />Accounts</Menu.Item>
                                <Menu.Item key={`${match.url}/management/clinics`}><Icon type="heart-o" />Clinic</Menu.Item>
                                <Menu.Item key={`${match.url}/management/application-settings`}><Icon type="setting" />Application Settings</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 20px' }}>
                            <Switch>
                                <Route exact path={`${match.url}`} component={AsyncDashboard} />
                                <Route path={`${match.url}/patients`} component={AsyncPatients} />
                                <Route path={`${match.url}/management/accounting`} component={AsyncAccounting} />
                                <Route path={`${match.url}/management/accounts`} component={AsyncAccounts} />
                                <Route path={`${match.url}/management/procedures`} component={AsyncProcedures} />
                                <Route path={`${match.url}/management/clinics`} component={AsyncClinics} />
                                <Route path={`${match.url}/management/application-settings`} component={AsyncApplicationSettings} />
                                <Route path={`${match.url}/management`} component={AsyncManagement} />
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            
                        </Footer>
                    </Layout>
                </Layout>
                <BackTop />
            </Layout>
        );
    }
}

export default DefaultLayout;