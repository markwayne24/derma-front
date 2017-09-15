// @flow

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


class MenuTop extends Component{
    render(){
        const { menus } = this.props;
        
        return(
            <Menu>
                {menus.map((menu,i) =>
                    <Menu.Item key={i}>
                        <Link to={menu.url}>
                            <Icon type={menu.icon} className='margin' />
                            {menu.text}
                        </Link>
                    </Menu.Item>
                )}
            </Menu>
        );
    }
}

export default MenuTop;
