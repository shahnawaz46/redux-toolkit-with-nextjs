import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/posts'

// initial State for define State structer/fieldds
const initialState = {
    post:[],
    status: 'idle',
    error:null
}


// here i am using thunk middleware for achieve async data fetching inside the redux.
// by default @reduxjs/toolkit provide createAsyncThunk function to achive async data fetching inside redux.
export const fetchPosts = createAsyncThunk("posts/getAll", async()=>{
    const res = await axios.get(URL)
    return res.data
})

// whenever we use thunk middleware so, it's means we are working with promise handling
// so, to handle promises here i am using extraReducers 
// with the help of extraReducers we can add the cases to handle the promise status like(pending, fulfilled, rejected)

const asyncPostSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {
        remove: (state, action) => {
            const newState = state.post.filter((post) => post.id !== action.payload);
            return {...state, post:newState};
          },
          incrementReactionCount: (state, action) => {
            const { postId, reaction } = action.payload;
            const selectedPost = state.post.find((post) => post.id == postId);
            if (selectedPost) 
              selectedPost.reactions[reaction]++;
          },
    },

    extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state,action)=>{
            state.status = 'succeeded';
            let min = 60000;
            const allPosts = action.payload.slice(1,20).map((post)=> {
                const updatedPost =  {...post, date: new Date().toISOString(), reactions: {
                    thumbsup: 0,
                    wow: 0,
                    heart: 0,
                  }}
                min += 60000
                return updatedPost
            })
            
            state.post = state.post.concat(allPosts)
        })
        .addCase(fetchPosts.rejected, (state, action)=>{
            state.status = 'failed',
            state.error = action.error.message
        })

    }
})

// to use these actions we have to export the actions
export const {remove, incrementReactionCount} = asyncPostSlice.actions


// we also need to export the reducer to pass into store
export default asyncPostSlice.reducer