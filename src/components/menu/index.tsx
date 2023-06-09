import {
    FieldTimeOutlined,
    FilePdfOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, message as Message, Button } from 'antd';
import React, { FC} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('主页', '/', <FieldTimeOutlined />),
    getItem('定时器', '/timers', <FieldTimeOutlined />),
    getItem('监控看板', '/timer/monitor', <LineChartOutlined />),
    getItem('技术文档', '/timer/doc', <FilePdfOutlined />),
];


const Comp: FC = () => {
    const currentRoute = useLocation();
    const navigateTo = useNavigate();
    const handleClick = (e: { key: string }) => {
        if (e.key == '/err') {
            navigateTo('/')
            Message.error("抱歉，仍在实现中~~ ^……^")
            return 
        }
        navigateTo(e.key);
        return
    }


    return (
            <Menu
                theme="dark"
                defaultSelectedKeys={[currentRoute.pathname]}
                mode="inline"
                items={items}
                onClick={handleClick}
            
            />
    );
};

export default Comp;