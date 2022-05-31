import React from 'react';
import axios from 'axios';
import {Button, Form, Input, Card, List, Divider} from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export const TodoPage = () => {
    const [inputVal, setInputVal] = React.useState('');
    const [serverData, setServerData] = React.useState([])//данные с сервера
    const [load, setLoad] = React.useState(false);//переменная для показателя загрузки
    const getDataFn = () => {
        setLoad(true)//переменная для показателя загрузки ставим true
        axios.get('/todos')//запрашиваем данные с сервеа
            .then(({data}) => {//в then получаем данные с сервера в data
                setServerData(data)//записываем данные с сервера в переменную
                setLoad(false)//переменная для показателя загрузки ставим false
            })
    }
    React.useEffect(() => {
        console.log('Я вызвался!')
    }, [inputVal])
    React.useEffect(() => {//отработает при первом рендере компоненты
        getDataFn()//вызываем функцию загрузки данных с сервера
    }, [])//пестой массив зависмостей

    const onFinish = (values) => {//отработает при сабмите формы
        const newTodo = {//новый объект тудушки
            name: values.name,
            content: values.content,
            data: Date.now(),
            status: false
        }

        axios.post('/todos', newTodo)//отправка на сервер тудушки
    };
    console.log('<div></div>')
    return (
        <div>
            <input value={inputVal} onChange={(event) => {
                setInputVal(event.target.value)
            }} type="text"/>
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
                            message: 'херню написал'
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
            <Divider/>
            {/*            {serverData.map((item)=>{
                return  <Card extra={[<Button>{item.status ? 'не готово' : 'готово'}</Button>]} title={item.name}>
                    {item.content}
                </Card>
            })}*/}
            {!load ? <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={serverData}
                renderItem={(item, index) => (
                    <List.Item>
                        <Card extra={[
                            <Button onClick={() => {
                                const updatedTodo = {...item, status: !item.status}//создаем новый объект тудушки с изменным статусом
                                axios.put(`/todos/${index}`, updatedTodo)//отправляем новую тудушку на сервер
                            }}>
                                {item.status === true ? 'готово' : 'не готово'}
                            </Button>
                        ]}
                              title={item.name}>
                            {item.content}
                        </Card>
                    </List.Item>
                )}
            /> : 'loading'}
        </div>
    );
};
