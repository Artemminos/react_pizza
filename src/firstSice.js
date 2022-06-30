import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    customValue: 'art',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log(action)
            state.value += action.payload
        },
        changeCustomVal: (state, action) => {
            console.log(action)
            state.customValue = action.payload
        },
    },
})

export const {increment, decrement, incrementByAmount, changeCustomVal} = counterSlice.actions

export default counterSlice.reducer