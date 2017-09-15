import React, { Component } from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import { Redirect } from 'react-router-dom'; 

import './style.css';

const FormItem = Form.Item;

class Login extends Component {
    state = {
        authenticating: false,
        authenticated: false
    }

    _login = () => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }
            this.AsyncAuth();
            console.log('Received values of form: ', values);
        });
    };

    AsyncAuth = async () => {
        this.setState({authenticating: true});
        await setTimeout(() => {
            this.setState({
                authenticating: false,
                authenticated: true
            });
        }, 2000);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { authenticating, authenticated } = this.state;
        const { location } = this.props;

        if (authenticated) {
            return (
                <Redirect to={{
                    pathname: '/dashboard',
                    state: { from: location }
                }}/>
            );
        }

        return (
            <Layout style={{background: '#fff'}}>
                <Form className="login-form" style={{margin:'auto'}}>
                    <img className="custom-image" src="/img/logo-big.png" alt="logo" />
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button 
                            style={{width:'100%'}}
                            type="primary" 
                            htmlType="submit" 
                            loading={authenticating} 
                            onClick={this._login}
                            className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </Layout>
        );
    }
}

export default Form.create()(Login);