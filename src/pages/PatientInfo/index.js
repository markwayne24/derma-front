import React, { Component } from 'react';
import { 
    Form, 
    DatePicker, 
    Select, 
    Input, 
    Row, 
    Col,
    Upload, 
    Icon, 
    Modal,
    Checkbox,
    Button
} from 'antd';
import SignaturePad from './components/Signature/index.js';

import './style.css';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const dateFormat = 'MM/DD/YYYY';

class PatientInfo extends Component{
    state = {
        previewVisible: false,
        previewImage: '',
        signature: '',
        modalSignature: false,
        fileList: [],
    };
    sigPad = {}
    _clear = () => {
      this.sigPad.clear();
    }

    _setSignatureDataUrl = () => {
        this.setState({signature: this.sigPad.getTrimmedCanvas()
            .toDataURL('image/png'), modalSignature:false});
    }

    handleCancel = () => this.setState({ previewVisible: false })
    
    _setModalSignature = () => this.setState({ modalSignature: true })

    handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
      }
    
    handleChange = ({ fileList }) => this.setState({ fileList })

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const { previewVisible, previewImage, fileList, signature, modalSignature } = this.state;
        const uploadButton = (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        );

        return(
            <div style={{padding:'20px'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <FormItem 
                            xs={24} 
                            md={24}
                            label="Entry Date">
                            {getFieldDecorator('date-picker', config)(
                                <DatePicker format={dateFormat} />
                            )}
                        </FormItem>
                    </Row>
                    <Row gutter={15}>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem
                                label="First Name">
                                    {getFieldDecorator('first_name', {
                                        rules: [{ required: true, message: 'Please input First Name!' }],
                                    })(
                                        <Input />
                                    )}
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem 
                                label="First Name">
                                    {getFieldDecorator('middle_name', {
                                        rules: [{ required: false, message: 'Please input Middle Name!' }],
                                    })(
                                        <Input />
                                    )}
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem 
                            label="First Name">
                                {getFieldDecorator('last_name', {
                                    rules: [{ required: true, message: 'Please input Last Name!' }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={15}>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem 
                                label="Birthdate">
                                {getFieldDecorator('birthdate', config)(
                                    <DatePicker className='expand-width' />
                                )}
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem
                                label='Gender'>
                                <Select
                                    showSearch
                                    className='expand-width'
                                    placeholder="Select a gender"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem
                                label='Civil Status'>
                                <Select
                                    showSearch
                                    className='expand-width'
                                    placeholder="Select a civil status"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="single">Single</Option>
                                    <Option value="married">Married</Option>
                                    <Option value="seperated">Seperated</Option>
                                    <Option value="widowed">Widowed</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={15}>
                        <Col xs={24} sm={12} md={12}>
                            <FormItem
                                label='Home Address'>
                                <TextArea rows={4} />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} md={12}>
                            <FormItem
                                label='Bussiness Address'>
                                <TextArea rows={4} />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={15}>
                        <Col xs={24} sm={12} md={12}>
                            <FormItem 
                                label="Home Phone/s">
                                    <Input />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} md={12}>
                            <FormItem 
                                label="Bussiness Phone/s">
                                    <Input />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={15}>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem 
                                label="Mobile Phone's">
                                    {getFieldDecorator('mobile', {
                                        rules: [{ required: false, message: 'Please input First Name!' }],
                                    })(
                                        <Input />
                                    )}
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem 
                                label="Email">
                                    {getFieldDecorator('email', {
                                        rules: [{ required: false, message: 'Please input email!' }],
                                    })(
                                        <Input />
                                    )}
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={8} md={8}>
                            <FormItem
                                label="Occupation">
                                    {getFieldDecorator('occupation', {
                                        rules: [{ required: false, message: 'Please input occupation!' }],
                                    })(
                                        <Input />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <h3 className='text-bold'>AUTHORIZED AND INFORMED CONSENT</h3>
                    </Row>
                    <Row>
                        <div className='consent'>
                            <p>
                            SAMPLE TO BE DONELorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsum qui sunt tenetur voluptatem? Asperiores distinctio doloremque eum expedita facilis fuga, fugit necessitatibus quos unde vero. Corporis debitis quod vel.
                            </p>
                            <p>
                            SAMPLE TO BE DONELorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsum qui sunt tenetur voluptatem? Asperiores distinctio doloremque eum expedita facilis fuga, fugit necessitatibus quos unde vero. Corporis debitis quod vel.
                            </p>
                            <p>
                            SAMPLE TO BE DONELorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsum qui sunt tenetur voluptatem? Asperiores distinctio doloremque eum expedita facilis fuga, fugit necessitatibus quos unde vero. Corporis debitis quod vel.
                            </p>
                            <p>
                            SAMPLE TO BE DONELorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsum qui sunt tenetur voluptatem? Asperiores distinctio doloremque eum expedita facilis fuga, fugit necessitatibus quos unde vero. Corporis debitis quod vel.
                            </p>
                            <p>
                            SAMPLE TO BE DONELorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsum qui sunt tenetur voluptatem? Asperiores distinctio doloremque eum expedita facilis fuga, fugit necessitatibus quos unde vero. Corporis debitis quod vel.
                            </p>
                            <p>
                            SAMPLE TO BE DONELorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsum qui sunt tenetur voluptatem? Asperiores distinctio doloremque eum expedita facilis fuga, fugit necessitatibus quos unde vero. Corporis debitis quod vel.
                            </p>
                        </div>
                    </Row>
                    <Row type='flex' justify='start' align='middle'>
                        <Col>
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                                >
                                {fileList.length >= 3 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </Col>
                        <Col>
                            <h4 className='text-bold'>Other attachments</h4>
                        </Col>
                        <div style={{border:'1px solid grey'}}></div>
                    </Row>
                    <Row>
                        <Checkbox onClick={this._setModalSignature}>I hearby certify that above information / data are true and correct.</Checkbox>
                    </Row>
                    <Row>
                        <div className='signature margin-top-bottom'>
                            {signature
                            ? <img alt='signature'
                            src={signature} />
                            : null}
                        </div>
                    </Row>
                    <Row>
                        <Button type='primary' style={{float:'right'}}>Save Record</Button><br/><br/><br/>
                    </Row>
                </Form>
                <Modal
                    wrapClassName="vertical-center-modal"
                    visible={modalSignature}
                    onOk={this._setModalSignature}
                    onCancel={this._setModalSignature}
                    footer={[
                        <Button type='default' key='1' onClick={this._clear}>Clear</Button>,
                        <Button type='primary' key='2' onClick={this._setSignatureDataUrl}>Confirm</Button>
                    ]}
                    >
                        <div className='container'>
                            <div className='sigContainer'>
                                <SignaturePad 
                                    canvasProps={{className: 'sigPad'}}
                                    ref={(ref) => { this.sigPad = ref; }} />
                            </div>
                        </div>
                </Modal>
            </div>            
        );
    }
}

export default Form.create()(PatientInfo);