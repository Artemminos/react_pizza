import React from 'react';
import {Space,Button} from 'antd'
export const Tabs = () => {
    const [currTab, setTab] = React.useState(0)
    const tabs = [
        {
            tabName: 'names',
            content: <div>names content</div>
        },
        {
            tabName: 'cards',
            content: <div>cards content</div>
        },
        {
            tabName: 'market',
            content: <div>market content</div>
        },
    ]
    return (
        <div>
         <Space direction={'horizontal'}>

            {tabs.map((item,index)=>{
                return <Button onClick={()=>{
                    setTab(index)
                }}>
                    {item.tabName}
                </Button>
            })}
         </Space>

            {tabs[currTab].content}
        </div>
    );
};
