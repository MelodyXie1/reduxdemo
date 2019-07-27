import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypes'
const defaultState = {
    inputValue: 'Write Something...',
    list: [
        '早八点开晨会分配今天的工作任务',
        '跟项目经理开需求沟通会',
        '和小伙伴喝咖啡吃水果'
    ]
}

export default (state = defaultState, action) => {
    //console.log(state,action);
    //Reducer里只能接受state不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DEL_ITEM) {
        console.log(action.indx)
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝
        newState.list.splice(action.indx, 1)
        return newState
    }



    return state
}