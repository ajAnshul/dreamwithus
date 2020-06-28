import React from 'react';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header className="app-header">
            <h2 className="logo">DreamWithUs</h2>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Home</Menu.Item>
            </Menu>
        </Header>
    )
}

export default AppHeader;