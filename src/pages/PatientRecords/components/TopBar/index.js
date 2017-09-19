import React, { Component } from 'react';
import {
    Icon,
    Dropdown,
    Button,
    Row,
    Col,
    Avatar  
} from 'antd';
import Actions from '../Actions';

class TopBar extends Component {
    constructor(props){
      super(props);
      this.state={isHide:false};
      this.hideBar = this.hideBar.bind(this);
    }
    hideBar(){
       let {isHide} = this.state;
       window.scrollY > this.props.scrollHeight ?
       !isHide && this.setState({isHide:true})
       :
       isHide && this.setState({isHide:false});
    }
    componentDidMount(){
        window.addEventListener('scroll',this.hideBar);
    }
    componentWillUnmount(){
         window.removeEventListener('scroll',this.hideBar);
    }
    render(){
        let classHide=!this.state.isHide?"hide":"";
        const {
            imageUrl, name, patientNo, age, civilStatus,
            gender, contactNo,actions, match
        
        } = this.props;

        return(
            <div className={"topbar "+classHide}>
                <Row gutter={20} type='flex' justify='space-around' align='middle'>
                    <Col xs={6} md={2}>
                        <Avatar id='avatar-records-top' src={imageUrl} />
                    </Col>
                    <Col xs={6} md={4} >
                        <h6 className='black-bold'>{name}</h6>
                        <h6 className='grey-bold'>Patient No. {patientNo}</h6>
                    </Col>
                    <Col xs={6} md={4}>
                        <h6 className='grey-bold'>Age: {age}</h6>
                        <h6 className='grey-bold'>Gender: <b>{gender}</b></h6>
                    </Col>
                    <Col xs={6} md={4}>
                        <h6 className='grey-bold'>Civil Status: {civilStatus}</h6>
                        <h6 className='grey-bold'>Contact Number: {contactNo}</h6>
                    </Col>
                    <Col xs={6} md={2}>
                        <Dropdown overlay={<Actions menus={actions} match={match} />} trigger={['click']}>
                            <Button type='primary' style={{ margin: 5 }}>
                                Actions <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TopBar;