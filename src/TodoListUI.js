import React from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI =(props)=>{
       return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input placeholder={props.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={props.changeInputVal}
                        value={props.inputValue}
                    />
                    <Button type='primary'
                        onClick={props.clickBtn}
                    >添加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem={
                            (item, indx) =>(<List.Item onClick={
                                () => { props.delItem(indx) }}> {item}</List.Item>)
                        }
                    />

                </div>
            </div>
        );
    }

export default TodoListUI;
