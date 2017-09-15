import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';
const FormItem = Form.Item;

class PatientInfo extends Component{
    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                    hasFeedback
                    >
                        <Row gutter={20}>
                            <Col xs={24} xs={12} lg={8}>
                                <Input/>
                            </Col>
                            <Col xs={24} xs={12} lg={8}>
                                <Input />
                            </Col>
                            <Col xs={24} xs={12} lg={8}>
                                <Input />
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem
                    hasFeedback
                    >
                        <Row gutter={20}>
                            <Col xs={24} xs={12} lg={8}>
                                <Input/>
                            </Col>
                            <Col xs={24} xs={12} lg={8}>
                                <Input />
                            </Col>
                            <Col xs={24} xs={12} lg={8}>
                                <Input />
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </div>            
        );
    }
}

export default PatientInfo;