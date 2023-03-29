import { PageContainer } from '@ant-design/pro-layout';

const Doc = () => {
    return (
        <PageContainer title="定时器技术文档">
            <iframe
                id="doc"
                name="技术文档"
                src="http://182.92.189.35:8080/2023/03/29/tasktimer/"
                width="100%"
                height="700"
                title="task timer 技术文档"
                frameBorder="yes"
            />
        </PageContainer>
    )
}

export default Doc;