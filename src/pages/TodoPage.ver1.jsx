import React from 'react';
import axios from 'axios';

export const TodoPage = () => {
    const [serverData, setServerData] = React.useState([]);
    const asyncFN = async () => {
        return 'ASYNC'
    }
    asyncFN()
    const obj = {
        data: 'art',
        status: '123',
        status2: '123',
        status3: '123',
    }
    const {data, status} = obj
    React.useEffect(()=>{
        console.log(serverData)//вызовется каждый раз когда поменяется serverData
    },[serverData.length])
    const getDataFn = () => {
        axios.get('/todos', {
            params: {}
        }).then(({data, status}) => {
            if (status === 200) {
                //some code
            } else if (status === 203) {
                //other code
            }
            setServerData(data)
        })
            .catch((data) => {
            })
            .finally(() => {
            })

        /*asyncFN().then((val)=>{ // first async function
            console.log(val)
        })*/
    }
    const pushDataFn = () => {
        const newTodo = {
            name: "Вторая туду",
            content: "Сожрать яицо",
            data: Date.now(),
            status: false
        }
        axios.post('/todos',newTodo)
    }

    return (
        <div>
            <button onClick={pushDataFn}>post data</button>
            <button onClick={getDataFn}>get data</button>
        </div>
    );
};
