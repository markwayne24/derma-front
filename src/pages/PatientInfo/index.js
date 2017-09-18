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
    Checkbox
} from 'antd';
import './style.css';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const dateFormat = 'MM/DD/YYYY';

class PatientInfo extends Component{
    state = {
        previewVisible: false,
        previewImage: '',
        signature: 'data:image/gif;base64,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',
        modalSignature: false,
        fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false })
    
    _setModalSignature(modalSignature) {
        this.setState({ modalSignature });
    }

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
                        <Checkbox onClick={() => this._setModalSignature(true)}>I hearby certify that above information / data are true and correct.</Checkbox>
                    </Row>
                    <Row>
                        {signature
                        ? <img alt='signature' className='signature margin-top-bottom'
                        src={signature} />
                        : null}
                    </Row>
                </Form>
                <Modal
                    wrapClassName="vertical-center-modal"
                    visible={modalSignature}
                    onOk={() => this._setModalSignature(false)}
                    onCancel={() => this._setModalSignature(false)}
                    >
                    
                </Modal>
            </div>            
        );
    }
}

export default Form.create()(PatientInfo);