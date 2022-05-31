import React from 'react';
import {Space, Button} from 'antd'

export const Tabs = () => {
    const [currTab, setTab] = React.useState(0)
    const [currTab2, setTab2] = React.useState(null)
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
    const tabs2 = [
        {
            tabName: tabs[0] + ' ' + 'surnames',
            content: <div>{tabs[0]} content</div>
        },
        {
            tabName: tabs[1] + ' ' + 'masti',
            content: <div>{tabs[1]} content</div>
        },
        {
            tabName: tabs[2] + ' ' + 'super',
            content: <div>{tabs[2]} content</div>
        },
    ]
    return (
        <div>
            <Space direction={'horizontal'}>

                {tabs.map((item, index) => {
                    return <Button onClick={() => {
                        setTab(index)
                    }}>
                        {item.tabName}
                    </Button>
                })}
                {tabs2.map((item, index) => {
                    return <Button onClick={() => {
                        setTab2(index)
                    }}>
                        {item.tabName}
                    </Button>
                })}
            </Space>

            {tabs[currTab].content}
            {currTab2 && tabs[currTab2].content}
        </div>
    );
};
