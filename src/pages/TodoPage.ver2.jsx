import React from 'react';
import axios from 'axios';
import {Button, Form, Input, InputNumber } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export const TodoPage = () => {
    const [serverData, setServerData] = React.useState([])


    const getDataFn = () => {
        axios.get('/todos', {
            params: {}
        }).then(({data, status}) => {
            if (status === 200) {
                //some code
            } else if (status === 203) {
                //other code
            }
            //console.log('выполнюсь если запрос успешен')
            setServerData(data)
        })
            .catch((data) => {
                //console.log('выполнюсь если была ошибка')
            })
            .finally(() => {
                //console.log('выполнюсь в любом случае')
            })

        /*asyncFN().then((val)=>{ // first async function
            console.log(val)
        })*/
    }

    const onFinish = (values) => {
        const newTodo = {
            name: values.name,
            content: values.content,
            data: Date.now(),
            status: false
        }
        axios.post('/todos', newTodo)

    };

    return (
        <div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}//вызовется когда отправишь форму
                >
                <Form.Item
                    name={'name'}//имя инпута
                    label="Название" //название которое будет рядом с инпутом
                    help={<div>помозь</div>}
                    rules={[
                        {
                            min: 1,
                            max: 10,
                            message:'херню написал'
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'content'}
                    label="Что сделать"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
