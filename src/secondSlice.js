import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    custom: '123',

}

export const secondSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        custom: (state) => {
            state.custom = 'artem'
        },

    },
})

export const {custom} = secondSlice.actions

export default secondSlice.reducer