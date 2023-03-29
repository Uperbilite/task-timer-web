import { PageContainer } from '@ant-design/pro-layout';

const Monitor = () => {
    return (
        <PageContainer title="定时器监控看板">
            <iframe
                id="monitor"
                name="监控看板"
                src="http://182.92.189.35:3000/d/sKzbj8fVk/new-dashboard?orgId=1&kiosk"
                width="100%"
                height="700"
                title="监控看板"
                frameBorder="yes"
            />
        </PageContainer>
    )
}

export default Monitor;
