import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    value: 0
}

// By default redux provide immutable state 
// -> which means we cannot update/change state directly
// -> to update/change the state we have to use deep copy and then update the state and return new state

// But Redux Toolkit allows us to write "mutating" logic in reducers.



// createSlice function accepts a "slice name", an initial state and object of reducer functions,
// and automatically generates action creators and action types that correspond to the reducers and state.

// Internally, it uses createAction and createReducer

// action type -> counter/increment, counter/decrement and counter/incrementByAmout

export const couterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state)=>{
           state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1
        },
        incrementByAmout: (state,action)=>{
            state.value += action.payload
        }
    }
})

// to use these actions we have to export the actions
export const {increment, decrement, incrementByAmout} = couterSlice.actions

// we also need to export the reducer to pass into store
export default couterSlice.reducer