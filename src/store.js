import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './firstSice'
import secondSlice from './secondSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        secondReuser: secondSlice,
    },
})