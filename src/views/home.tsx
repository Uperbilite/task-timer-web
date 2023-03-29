import { Layout, Avatar, Button, Image, message, Popconfirm, Card } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { PageContainer } from '@ant-design/pro-layout';
import Menu from '@/components/menu'
import eason from '@/img/eason.jpeg';
import hezhao from '@/img/hezhao.jpeg';
import hezhao2 from '@/img/hezhao2.jpeg';
import xtimer from '@/img/xtimer.png'


const { Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigator = useNavigate();
    const location = useLocation();

    const unlogin = () => {
        sessionStorage.removeItem("app");
        navigator("/login");
        message.success("注销成功~");
    }

    return (
        // 左侧侧边栏
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Image
                    width={200}
                    src={eason}
                />
                <br></br>
                <br></br>
                <br></br>
                <Menu />
            </Sider>

            {/* 右侧内容 */}
            <Layout className="site-layout">
                <Content style={{ margin: '0 0 0' }} className="site-layout-background">
                    <br></br>
                    <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'large', marginLeft: '1050px' }} size={55} gap={4}>
                        {sessionStorage.getItem("app")}
                    </Avatar>
                    <Popconfirm placement="leftTop" title="确认注销吗？" onConfirm={unlogin} okText="是" cancelText="否">
                        <Button
                            size="middle" style={{ margin: '0 16px', verticalAlign: 'middle' }}
                        >
                            注销
                        </Button>
                    </Popconfirm>

                    <Outlet />
                    {location.pathname == "/" && (
                        <div>
                            <br></br>
                            <br></br>
                            <Card size="default" title="xTimer: 一款基于 go 语言实现的分布式定时任务系统" headStyle={{ textAlign: "center", fontSize: "24px" }} hoverable={true} style={{ width: 1150, alignItems:"baseline" }}>
                                <p style={{ fontWeight: "bold", fontSize: "18px" }}>开源地址: </p>
                                <a href='https://github.com/Uperbilite/task-timer' >https://github.com/Uperbilite/task-timer</a>
                                <br></br>
                                <p style={{ fontWeight: "bold", fontSize: "18px" }}>技术文档: </p>
                                <a href='http://182.92.189.35:8080/2023/03/29/tasktimer/' >http://182.92.189.35:8080/2023/03/29/tasktimer/</a>
                                <br></br>
                                <br></br>
                            </Card>
                        </div>
                    )}

                </Content>
                {/* 右侧底部 */}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '72px' }}>---- 谢谢你，来看我的空间 ----</Footer>
            </Layout>
        </Layout>
    );
};

export default View;
