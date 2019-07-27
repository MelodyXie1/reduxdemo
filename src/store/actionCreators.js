import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypes'
export const changeInputAction = (val) => ({
    type: CHANGE_INPUT,
    value: val
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (indx) => ({
    type: DEL_ITEM,
    indx
})