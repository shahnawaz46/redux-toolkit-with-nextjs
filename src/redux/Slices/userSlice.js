import { createSlice } from "@reduxjs/toolkit";

// initial State for define State structer/fields
const initialState = [
    {id:"1", name:"Shahnawaz", email:'shahnawaz@gmail.com', age:21, country:"India",profession:'Software Engineer'},
    {id:"2", name:"Arshad Khan", email:'arshadkhan@gmail.com', age:22, country:"India",profession:'Continental Chef'}
]


// createSlice for create reducer
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
})


// we also need to export the reducer to pass into store
export default userSlice.reducer