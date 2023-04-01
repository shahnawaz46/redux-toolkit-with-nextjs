import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

const URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk("user/getAll", async()=>{
    const res = await axios.get(URL)
    return res.data;
})


const asyncUserSlice = createSlice({
    name:'users',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.push(...action.payload)
        })
    }
})

export default asyncUserSlice.reducer;