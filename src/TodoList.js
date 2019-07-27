import React, { Component } from 'react'
import store from './store'
//import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction, delItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChnage)
        this.delItem = this.delItem.bind(this)
    }
    storeChnage = () => {
        this.setState(
            store.getState()
        )
    }
    clickBtn = () => {
        const action = addItemAction();
        store.dispatch(action)
    }
    delItem = (indx) => {
        const action = delItemAction(indx);
        store.dispatch(action);
    }
    changeInputVal = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI inputValue ={this.state.inputValue}
            changeInputVal ={this.changeInputVal}
            clickBtn ={this.clickBtn}
            list={this.state.list}
            delItem={this.delItem}

            />
        );
    }

}

export default TodoList;