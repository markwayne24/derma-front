// @flow

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


class Actions extends Component{
    render(){
        const { menus, match } = this.props;

        return(
            <Menu>
                {menus.map((menu,i) =>
                    <Menu.Item key={i}>
                        <Link to={`${match.url}/${menu.url}`}>
                            <Icon type={menu.icon} className='margin' />
                            {menu.text}
                        </Link>
                    </Menu.Item>
                )}
            </Menu>
        );
    }
}

export default Actions;
