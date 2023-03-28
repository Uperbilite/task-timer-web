import { PageContainer } from '@ant-design/pro-layout';

const Monitor = () => {
    return (
        <PageContainer title="XTimer 定时器监控看板">
            <iframe
                id="monitor"
                name="XTimer 监控看板"
                src="http://43.143.168.5:3000/d/-D2G_hKVz/xtimer-jian-kong-da-pan?kiosk"
                width="100%"
                height="700"
                title="XTimer 监控看板"
                frameBorder="yes"
            />
        </PageContainer>
    )
}

export default Monitor;